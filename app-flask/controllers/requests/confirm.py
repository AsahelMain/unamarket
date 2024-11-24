from flask import Blueprint, request, jsonify
from model.buyer_model import *
from model.product_model import *
from model.request_model import *
from . import requests_bp
from mail.mail import send_email

@requests_bp.route('/confirm', methods=['POST'])
def confirm_sale():
    data = request.get_json()
    buyer_id = data.get('buyer_id')
    product_id = data.get('product_id')
    email = data.get('email')
    name = data.get('name')
    
    if not buyer_id or not product_id:
        return jsonify({'error': 'Falta el ID del comprador o del producto en los datos enviados.'}), 400

    request1 = get_request_by_ids(buyer_id,product_id)

    if request1 is None:
        return jsonify({'error': 'Request no encontrada'}), 404

    req = finish_request_by_ids(buyer_id,product_id)

    if req is None:
        return jsonify({'error': 'Error interno de servidor'}), 500
    
    subject = "Gracias por comprar con Cienciasmart"
    template = "confirm.html"
    additional_data = {
        'buyer_id': buyer_id,
        'product_id': product_id,
        'name': name
    }
    print(send_email(email, subject, template, **additional_data))
    return jsonify({'message': 'Confirmacion y finalizacion de request exitosas'}), 200
        
