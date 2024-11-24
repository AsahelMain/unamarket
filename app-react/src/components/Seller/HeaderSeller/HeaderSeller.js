import React from 'react';
import shoppingcart from '../../../assets/shoppingcart.svg';
import userIcon from '../../../assets/userIcon.svg';
import { useAuth } from '../../../hooks/useAuth';
import './HeaderSeller.css';

function HeaderSeller() {
    const { logout } = useAuth();
    return (
        <>
        <div className="header">
            <div className="logo">
                <img src={shoppingcart} alt="Cart" className="icon" />
                <span className="logo-text">UNAMARKET</span>
            </div>
            <div className="user-icon">
                <button className="user-btn" onClick={logout}>
                    <img src={userIcon} alt="User Icon" className="icon" />
                </button>
            </div>
        </div>
        <div className="yellow-bar"></div>
    </>
    );
}

export default HeaderSeller;
