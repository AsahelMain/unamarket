from flask import jsonify, request
from model.product_model import *
from . import products_bp

@products_bp.route('/product/<int:id>', methods=['GET'])
def product(id):
    product = get_product_by_id(id)
    if product:
        return jsonify(product.to_dict()), 200

    return jsonify({"message": "Producto no encontrado"}), 404

@products_bp.route('/update', methods=['POST'])
def update_product():
    data = request.get_json()

    product_id = data.get('product_id')

    if product_id is None:
        return jsonify({'error': 'Se requiere el ID del producto para actualizar.'}), 400

    product = get_product_by_id(product_id)

    if product is None:
        return jsonify({'error': 'Producto no encontrado.'}), 404

    update_product_attributes(product, data)

    return jsonify(product.to_dict()), 200
