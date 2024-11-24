from flask import Blueprint

products_bp = Blueprint('products', __name__)

from . import featured, search, products, addproduct, deleteproduct

