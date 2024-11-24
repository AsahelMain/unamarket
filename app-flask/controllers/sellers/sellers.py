from flask import jsonify
from model.seller_model import *
from . import sellers_bp

@sellers_bp.route('/seller/<int:id>', methods=['GET'])
def product(id):
    seller = get_seller_by_id(id)
    if seller:
        return jsonify(seller.to_dict()), 200

    return jsonify({"message": "Producto no encontrado"}), 404

