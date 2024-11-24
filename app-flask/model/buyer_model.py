from db.alchemyClasses.Buyer import Buyer
from db.alchemyClasses.Buyer import db

def get_buyer_by_email(email: str):
    return Buyer.query.filter(Buyer.email == email).first()

def get_buyer_by_id(buyer_id: str):
    return Buyer.query.filter(Buyer.buyer_id == buyer_id).first()

def get_buyer_by_username(username: str):
    return Buyer.query.filter(Buyer.username == username).first()

def get_buyer_by_cellphone(cellphone: str):
    return Buyer.query.filter(Buyer.cellphone == cellphone).first()

def add_buyer(email:str, username:str, cellphone:str, password:str):
    try:
        buyer = Buyer(email=email, username=username, cellphone=cellphone, password=password)

        db.session.add(buyer)
        db.session.commit()
        return buyer
    except (Exception) as e:
        print(e)
        return None

