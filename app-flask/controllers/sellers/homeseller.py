from flask import Blueprint, request, jsonify
from db.alchemyClasses.Seller import Seller
from db.alchemyClasses.Product import Product
from model.seller_model import *
from model.product_model import *
from . import sellers_bp

@sellers_bp.route('/homeseller/<int:seller_id>', methods=['GET'])
def homeseller(seller_id):

    seller = get_seller_by_id(seller_id)
    products = get_products_by_id(seller_id)
    products_list = [product.to_dict() for product in seller.products]
    

    if not products_list:
        return jsonify({'error': 'Aún no hay productos publicados.'}), 404
    
    return jsonify({'products_list': products_list}), 200
