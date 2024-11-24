from sqlalchemy import Boolean, Column, ForeignKey, Integer, Date, String
from db.alchemyClasses import db

class Review(db.Model):
    __tablename__ = 'review'
    
    product_id = Column(Integer, ForeignKey('product.product_id'), primary_key=True, autoincrement=True)
    buyer_id = Column(Integer, ForeignKey('buyer.buyer_id'), primary_key=True)
    date = Column(Date, nullable=False)
    comment = Column(String(60), nullable=False)
    score = Column(Integer, nullable=False)
