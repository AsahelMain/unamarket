from db.alchemyClasses.Review import Review
from db.alchemyClasses.Review import db
from datetime import datetime

def add_review(product_id: int, buyer_id: int, comment: str, score: float):
    try:
        today_date = datetime.today().date()
        review = Review(
            product_id=product_id,
            buyer_id=buyer_id,
            date=today_date,
            comment=comment,
            score=score
            )
        db.session.add(review)
        db.session.commit()
        return review
    except (Exception) as e:
        print(f"Error al agregar la review: {e}")
        db.session.rollback()
        return None

def get_reviews_by_idproduct(product_id:int):
    reviews = Review.query.filter(Review.product_id == product_id).all()
    return reviews
    
def get_review_by_ids(product_id, buyer_id):
    return Review.query.filter(Review.product_id==product_id, Review.buyer_id==buyer_id).first()
