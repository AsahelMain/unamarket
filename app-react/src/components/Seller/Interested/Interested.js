import React, { useState } from 'react';
import userIcon from '../../../assets/userIcon.svg';
import './Interested.css';

function Interested({ user, product_id }) {
     const [loading, setLoading] = useState(false);

     const handleClick = () => {
        setLoading(true);
        fetch('/confirm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                buyer_id: 'user.id',
                product_id: 'product_id',
                email: 'user.email',
                name: 'user.name',
            }),
        })
        .then(response => response.json())
        .then(data => {
            setLoading(false);
        })
        .catch(error => {
            console.error('Error al confirmar solicitud:', error);
            setLoading(false);
        });
    };
    return (
        <div className="interested-card">
            <div className="interested-content">
                <div className="interested-user">{user.username}</div>
                <button className="accept-button" onc>Aceptar</button>
            </div>
        </div>
    );
}

export default Interested;
