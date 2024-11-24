from flask import Blueprint

requests_bp = Blueprint('requests', __name__)

from . import request, confirm
