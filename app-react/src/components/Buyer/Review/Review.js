import { useFetch } from '../../../hooks/useFetch';
import './Review.css'

function Review({ productId }) {
    const { data, loading, error } = useFetch(`http://127.0.0.1:5000/api/reviews/listreviews/${productId}`);
    const reviews = data?.reviews_list || [];
    return(
        <div className="review">
            <div className="review-section">
                <h2>Reseñas del producto</h2>
                
                <div className="review-cards">
                   {error && <h3 className="error-message">Error: {error.message}</h3>}

                    {loading && <h3 className="loading-message">Cargando...</h3>}

                    {reviews.length === 0 && <h3>No hay reseñas disponibles</h3>}

                    {reviews.length > 0 && reviews.map((review) => (
                        <div key={review.buyer_id} className="review-card">
                            <h3>{ review.name }</h3> 
                            <p>{ review.comment }</p> 
                            <p>Calificación: { review.score }/5</p> 
                                    <p>{new Date(review.review_date).toLocaleDateString('es-ES', { 
                                        weekday: 'long', 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                    })}</p>
                        </div>  
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Review;
