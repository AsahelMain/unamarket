import { Link } from "react-router-dom";
import frog from "../../../assets/frog.jpeg";
import { useFetch } from "../../../hooks/useFetch";
import "./FeaturedProducts.css";
import ImageDecoder from '../../../utils/ImageDecoder/ImageDecoder';

function FeaturedProducts({ search }) { 

    const url = "http://127.0.0.1:5000/api/products/" + search;
    const { data: featured, loading, error } = useFetch(url);
    


    return(
        <div className="featured">
            <div className="featured-container">
                {!error && <h2>Destacados</h2>}
                <div className="product-list">

                    {error && <h3 className="error-message">Error: {error.message}</h3>}

                    {loading && <h3 className="loading-message">Cargando...</h3>}
        
                    {featured?.map((product) => (
                        <Link key={product.product_id} className="product-card" to={`product/${product.product_id}`}>
                            <ImageDecoder base64Image={product.photo}/>
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                         </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
