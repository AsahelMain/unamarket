from db.alchemyClasses.Request import Request
from db.alchemyClasses.Buyer import db

def get_request_by_ids(buyer_id, product_id):
    return Request.query.filter(Request.buyer_id == buyer_id, Request.product_id == product_id).first()


def add_request(buyer, product, quantity_requested):
    new_request = Request(
        buyer_id = buyer.buyer_id,
        product_id=product.product_id,
        quantity_requested=quantity_requested,
        finished=False
    )

    product.stock -= quantity_requested
    db.session.add(new_request)
    db.session.commit()
