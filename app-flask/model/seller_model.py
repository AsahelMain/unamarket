from db.alchemyClasses.Seller import Seller
from db.alchemyClasses.Seller import db

def get_seller_by_email(email: str):
    return Seller.query.filter(Seller.email == email).first()

def get_seller_by_username(username: str):
    return Seller.query.filter(Seller.username == username).first()

def get_seller_by_cellphone(cellphone: str):
    return Seller.query.filter(Seller.cellphone == cellphone).first()

def get_seller_by_id(seller_id):
    return Seller.query.filter(Seller.seller_id == seller_id).first()

def add_seller(email:str, username:str, cellphone:str, password:str):
    try:
        seller = Seller(email=email, username=username, cellphone=cellphone, password=password)

        db.session.add(seller)
        db.session.commit()
        return seller
    except (Exception) as e:
        return None

def get_seller_by_id(seller_id: str):
    return Seller.query.filter(Seller.seller_id == seller_id).first()
