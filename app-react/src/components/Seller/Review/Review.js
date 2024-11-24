import React from 'react';
import userIcon from '../../../assets/userIcon.svg';
import './Review.css';

function Review({ user, rating, text }) {
    return (
        <div className="review-card">
            <div className="review-profile-pic">
                <img src={userIcon} alt="User Icon" />
            </div>
            <div className="review-content">
                <div className="review-header">
                    <span className="review-user">{user}</span>
                    <span className="review-rating">{rating} ★</span>
                </div>
                <div className="review-text">
                    {text}
                </div>
            </div>
        </div>
    );
}

export default Review;
