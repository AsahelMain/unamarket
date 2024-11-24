from flask import Blueprint

sellers_bp = Blueprint('sellers', __name__)

from . import sellers, homeseller
