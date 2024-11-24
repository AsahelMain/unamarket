from flask import Flask, request, jsonify
from model.product_model import *
from . import products_bp

@products_bp.route('/featured', methods=['GET'])
def featured():
    products = get_products()
    return jsonify([product.to_dict() for product in products])
