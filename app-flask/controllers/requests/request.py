from flask import request, jsonify
from model.buyer_model import *
from model.product_model import *
from model.request_model import *
from model.seller_model import *
from mail.mail import send_email
from . import requests_bp

@requests_bp.route('/request', methods=['POST'])
def request_product():
    data = request.get_json()
    buyer_id = data.get('buyerId')
    product_id = data.get('productId')
    quantity_requested = data.get('quantityRequested')

    if not buyer_id or not product_id or quantity_requested is None:
        return jsonify({'error': 'Faltan datos en la solicitud. Se requiere el ID del comprador, el ID del producto y la cantidad solicitada.'}), 400

    buyer = get_buyer_by_id(buyer_id)
    product = get_product_by_id(product_id)

    if not buyer:
        return jsonify({'error': 'Comprador no encontrado.'}), 404
    if not product:
        return jsonify({'error': 'Producto no encontrado.'}), 404

    if quantity_requested <= 0:
        return jsonify({'error': 'La cantidad solicitada debe ser mayor que cero.'}), 400

    if quantity_requested > product.stock:
        return jsonify({'error': 'La cantidad solicitada excede la cantidad en stock disponible.'}), 400

    if buyer.has_requested(product):
        return jsonify({'message': 'El comprador ya ha pedido el producto.'}), 400

    try:
        buyer.request(product, quantity_requested)
        seller = get_seller_by_id(product.seller_id)
        subject = "Gracias por su compra!"
        template = "request.html"
        additional_data = {
            'product': product,
            'seller': seller
        }
        send_email(buyer.email, subject, template, **additional_data)
        return jsonify({'message': 'Petición exitosa'}), 200
    except ValueError as e:
        return jsonify({'error': str(e)}), 400

@requests_bp.route('/get_request_status', methods=['GET'])
def get_request_status():
    buyer_id = request.args.get('buyer_id')
    product_id = request.args.get('product_id')

    if not buyer_id or not product_id:
        return jsonify({'error': 'Falta el ID del comprador o del producto en los datos enviados.'}), 400

    request_data = get_request_by_ids(buyer_id=buyer_id, product_id=product_id)

    if request_data is None:
        estado_request = "No encontrada"
    elif request_data.finished:
        estado_request = "Completada"
    else:
        estado_request = "En Progreso"
    return jsonify({'estado_request': estado_request}), 200
