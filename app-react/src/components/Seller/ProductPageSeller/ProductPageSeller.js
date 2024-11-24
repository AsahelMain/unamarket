import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import frog from "../../../assets/frog.jpeg";
import { useFetch } from "../../../hooks/useFetch";
import HeaderSeller from "../HeaderSeller/HeaderSeller";
import Interested from "../Interested/Interested"; // Importa el componente de interesados
import Review from "../Review/Review";
import "./ProductPageSeller.css";
import ImageDecoder from '../../../utils/ImageDecoder/ImageDecoder';
import { useAuth } from "../../../hooks/useAuth";

function ProductPageSeller() {
    const navigate = useNavigate();
    const { productId } = useParams();
    const { data: product, loading, error } = useFetch(`http://127.0.0.1:5000/api/products/product/${productId}`);
    const {user} = useAuth();
    console.log(product);
    const { data: interestedUsers, loadingInterested, errorInterested } = useFetch(`http://localhost:5000/api/requests/buyers_by_product_request?product_id=${productId}`);
    const handleHomeSeller = () => {
        navigate('/homeseller');
    };

    const handleUpdateProductClick = () => {
        navigate(`/actualizar-producto/${productId}`);
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/products/deleteproduct/${user.id}/${productId}`, {
                method: 'DELETE'
            });
            console.log(`http://127.0.0.1:5000/api/products/deleteproduct/${user.id}/${productId}`);
            if (response.ok) {
                console.log('Producto borrado exitosamente');
                navigate('/homeseller')
            } else {
                const responseData = await response.json();
                console.error('Error:', responseData.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const [sellerData, setSellerData] = useState(null);
    const { data: reviews, loadingReviews, errorReviews } = useFetch(`http://127.0.0.1:5000/api/reviews/listreviews/${productId}`);
    return (
        <>
            <HeaderSeller />
            <div className="product">
                <button className="home-seller-button" onClick={handleHomeSeller}>
                    Regresar
                </button>
                <div className="product-container">
                    <div className="productpage-card">
                        {error && <h3 className="error-message">Error: {error.message}</h3>}
                        {loading && <h3 className="loading-message">Cargando...</h3>}
                        {product && ( // Add conditional check for product
                            <div>
                                <div className="product-image">
                                    <ImageDecoder base64Image={product.photo} />
                                </div>
                                <div className="product-info">
                                    <h2>{product.name}</h2>
                                    {sellerData && (
                                        <div className="seller-info">
                                            <p>Vendedor: {sellerData.username}</p>
                                        </div>
                                    )}
                                    <p className="description">{product.description}</p>
                                    <p><strong>Categoría:</strong> {product.category}</p>
                                    <p><strong>Costo:</strong> ${product.price}</p>
                                    <div className="footer-product">
                                        <p>{product.stock} disponibles</p>
                                        <button className="reserve-button" onClick={handleUpdateProductClick}>Editar</button>
                                        <button className="reserve-button-eliminar" onClick={handleDelete}>Eliminar</button>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="reviews-interested-container">
                        <div className="reviews-section">
                            <h3>Reseñas</h3>
                            {reviews && reviews.reviews_list.map((review, index) => (
                                <Review
                                    key={review.buyer_id}
                                    rating={review.score}
                                    text={review.comment}p
                                />
                            ))}
                        </div>
                        <div className="interested-section">
                            <h3>Interesados</h3>
                            {interestedUsers?.map((interested) => (
                                <Interested
                                    key={interested.buyer_id}
                                    user={interested}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default ProductPageSeller;
