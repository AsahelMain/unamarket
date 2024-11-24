import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderSeller from "../HeaderSeller/HeaderSeller";
import './HomeSeller.css';
import { useAuth } from "../../../hooks/useAuth";
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';

function HomeSeller() {
    const navigate = useNavigate();
    const {user} = useAuth();

    const handleAddProductClick = () => {
        navigate(`/agregar-producto/${user.id}`);
        console.log(user.id);
    };

    const handleProductPageClick = () => {
        navigate('/product-page');
    };
    

    const handleProductsPageClick = () => {
        navigate('/products-page');
    };
    return (
        <>
            <HeaderSeller />
            <span className='tus-productos'>Productos publicados</span>
            <right>
            <div className="home-seller-container">
                <button className="add-product-button" onClick={handleAddProductClick}>
                    Agregar Producto
                </button>
                <FeaturedProducts search={"1"}/>

                {/*// <button className="product-page" onClick={ handleProductsPageClick}>
                //     Ver productos
                // </button>*/}
            </div></right>
        </>
    );
}
export default HomeSeller;
