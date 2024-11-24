from flask import request, jsonify
from model.buyer_model import *
from model.product_model import *
from model.review_model import *
from . import reviews_bp

@reviews_bp.route('/listreviews/<int:product_id>', methods=['GET'])
def listreviews(product_id):
    reviews= get_reviews_by_idproduct(product_id)

    reviews_list = [{'review_date':  review.date, 'buyer_id': review.buyer_id, 'comment': review.comment, 'score': review.score} for review in reviews]

    return jsonify({'reviews_list': reviews_list}), 200
