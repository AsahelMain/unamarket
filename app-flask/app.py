from flask import Flask
from flask_cors import CORS
from db.alchemyClasses import db
from controllers.products import products_bp
from controllers.auth import auth_bp
from controllers.requests import requests_bp
from controllers.products import products_bp
from controllers.sellers import sellers_bp
from controllers.reviews import reviews_bp
from mail.mail import mail
import os

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://aavaa:aavaa@localhost:3306/unamarket'
app.config.from_mapping(
    SECRET_KEY='dev'
)

app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_USERNAME')
app.config['CIENCIASMART_MAIL_SUBJECT_PREFIX'] = '[UNAMarket]'


db.init_app(app)
mail.init_app(app)

app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(requests_bp, url_prefix='/api/requests/')
app.register_blueprint(products_bp, url_prefix='/api/products/')
app.register_blueprint(sellers_bp, url_prefix='/api/sellers/')
app.register_blueprint(reviews_bp, url_prefix='/api/reviews/')

if __name__ == '__main__':
    app.run()
