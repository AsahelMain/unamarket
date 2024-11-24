from flask import Blueprint, request, jsonify
from db.alchemyClasses.Seller import Seller
from db.alchemyClasses.Product import Product
from model.seller_model import *
from model.product_model import *
from . import products_bp
import base64

@products_bp.route('/deleteproduct/<int:seller_id>/<int:product_id>', methods=['DELETE'])
def deleteproduct(seller_id,product_id):

    product = delete_product(seller_id, product_id)

    if product is None:
        return jsonify({'error': 'Producto no encontrado o error interno de servidor'}), 500

    return jsonify({'message': 'Producto borrado exitosamente'}), 200