import { Link } from "react-router-dom";
import frog from "../../../assets/frog.jpeg";
import { useFetch } from "../../../hooks/useFetch";
import "./SellerProducts.css";

function SellerProducts({ search }) { 

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
                        <Link key={product.id} className="product-card" to={`product/${product.id}`}>
                            <img src={frog} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                            <div className="card-bottom">
                                <p>Calificación</p>
                                <p>Pedro Perez</p>
                            </div>
                         </Link>
                    ))}
                    <Link className="product-card" to="product/30">
                        <img src={frog} alt="Rana" />
                        <h3>Increible rana saltarina</h3>
                        <p>$100</p> 
                        <div className="card-bottom">
                            <p>Calificacion</p>
                            <p>Pedro Perez</p>
                        </div>
                        </Link>   

                    {
                       /**
                         <Link className="product-card" to="/comprar">
                        <img src={frog} alt="Rana" />
                        <h3>Rana</h3>
                        <p>$100</p> 
                        <div className="card-bottom">
                            <p>Calificacion</p>
                            <p>Pedro Perez</p>
                        </div>
                        </Link>    
                        */
                    }               
                </div>
            </div>
        </div>
    );
};

export default SellerProducts;