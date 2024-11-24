from flask import Flask, request, jsonify
from model.product_model import *
from . import products_bp

@products_bp.route('/search', methods=['GET'])
def search():
    search_query = request.args.get('query')

    if search_query:
        words = search_query.split()
        refined_query = '+'.join(words)
        products = search_products(refined_query)
        product_dicts = [product.to_dict() for product in products]
        return jsonify(product_dicts)
    else:
        return jsonify({'error': 'Falta un parámetro de consulta.'}), 400
