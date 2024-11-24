import React from 'react';
import './HeaderBuyer.css'; 
import {useNavigate} from 'react-router-dom';
import cart from '../../../assets/shoppingcart.svg';
import shopping from '../../../assets/cartshopping.svg';
import usericon from '../../../assets/userIcon.svg'; 
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import SearchBar from "./SearchBar/SearchBar";

function HeaderBuyer() {

    const categories = ["Libros", "Ropa", 
                        "Comida", "Deportivo",
                        "Juguetes", "Papelería", 
                        "Hogar", "Mascotas"];

    const navigate = useNavigate();
    const { logout } = useAuth();
    
    const [showUserMenu, setShowUserMenu] = useState(false);

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    const buttonHandler = () => {
        console.log(showUserMenu);
    }

    
    const [toSearch, setToSearch] = useState('');
    const categoryHandler = (category) => {
        setToSearch(category);
    };

    useEffect(() => {
        if (toSearch) {
            navigate('/search-results', { state: { toSearch } });
            setToSearch('');
        }
    }, [toSearch, navigate]);

    
    return (
        <div>
            
            <header className="header">
                
                <div className="left">
                    <Link className="logo-btn" to="/comprar">
                        <img src={cart} alt="CiencaSmart Logo" className="logo" />
                        <span className="app-name">CIENCIASMART</span>
                    </Link>
                </div>
            
                <div className="middle">
                    <SearchBar></SearchBar>
                </div>
        
                <div className="right">
                    <button className="user-btn" onClick={() => logout()}>
                        <img src={usericon} alt="User Icon" className="icon" />
                    </button>

                    <button className="cart-btn" onClick={buttonHandler}>
                        <img src={shopping} alt="Shopping Cart Icon" className="icon" />
                    </button>
                </div>
            </header>
            

            <div className="categories">
                {categories.map((category) => (
                    <button key={category} onClick={() => categoryHandler(category)} className="categories-button">{category}</button>

                ))}
            </div>
        </div>
    );
}

export default HeaderBuyer;
