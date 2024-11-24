import "./FeaturedProducts.css";
import frog from "../../../assets/frog.jpeg"
import rana from "../../../assets/r.png"
import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import ImageDecoder from '../../../utils/ImageDecoder/ImageDecoder';

function FeaturedProducts({ search }) { 

    const url = "http://127.0.0.1:5000/api/sellers/homeseller/" + search;
    console.log(url)
    const { data: data, loading, error } = useFetch(url);

    return (
        <div className="featured">
            <div className="featured-container">

                <div className="product-list">

                    {error && <h3 className="error-message">Error: {error.message}</h3>}

                    {loading && <h3 className="loading-message">Cargando...</h3>}
        
                    {data && data.products_list && data.products_list.map((product) => (
                        <Link key={product.product_id} className="product-card" to={`/product-page/${product.product_id}`}>
                            <ImageDecoder base64Image={product.photo} />
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
