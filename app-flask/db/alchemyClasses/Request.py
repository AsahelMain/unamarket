from sqlalchemy import Boolean, Column, ForeignKey, Integer
from db.alchemyClasses import db

class Request(db.Model):
    __tablename__ = 'request'
    product_id = Column(Integer, ForeignKey('product.product_id'), primary_key=True)
    buyer_id = Column(Integer, ForeignKey('buyer.buyer_id'), primary_key=True)
    quantity_requested = Column(Integer, nullable=False)
    finished = Column(Boolean, nullable=False, default=False)
