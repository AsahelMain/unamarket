from flask import request, jsonify
from model.seller_model import *
from model.buyer_model import *
from . import auth_bp

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password') 
    seller = get_seller_by_email(email)
    buyer = get_buyer_by_email(email)

    if seller:
        user_type = 'seller'
        user = seller
        user_id = user.seller_id
    elif buyer:
        user_type = 'buyer'
        user = buyer
        user_id = user.buyer_id
    else:
        return jsonify({'error': 'Correo inválido.'}), 401

    if not user.check_password(password):
        return jsonify({'error': 'Contraseña inválida.'}), 401

    datos = {
        'message': 'Inicio de sesión exitoso',
        'type': user_type,
        'id':user_id
    }
    return jsonify(datos), 200
