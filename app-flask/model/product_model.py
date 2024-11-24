from db.alchemyClasses.Product import Product, db
import base64
from sqlalchemy import text

def get_product_by_id(product_id: str):
    return Product.query.filter(Product.product_id == product_id).first()

def get_products_by_id(seller_id):
    return Product.query.filter(Product.seller_id == seller_id).all()

def add_product(seller_id: int, name: str, description: str, stock: int,
                cellphone: str, photo: bytes, category: str, price: float):
    try:
        print(cellphone)
        product = Product(
            seller_id=seller_id,
            name=name,
            description=description,
            stock=stock,
            cellphone=cellphone,
            photo=photo,
            category=category,
            price=price
            )
        print(product.seller_id, product.name, product.description, product.stock, product.cellphone, product.category, product.price)
        db.session.add(product)
        db.session.commit()
        return product
    except (Exception) as e:
            return None

def search_products(search_query):
    sql_query = f"""
        SELECT * FROM product 
        WHERE MATCH(name, description, category) AGAINST (:search_query IN BOOLEAN MODE)
    """
    
    query = text(sql_query)
    
    products = db.session.execute(query, {'search_query': search_query})
    
    product_objects = []
    for row in products:
        product = Product(
            product_id =row.product_id,
            seller_id=row.seller_id,
            name=row.name,
            description=row.description,
            stock=row.stock,
            cellphone=row.cellphone,
            photo=row.photo,
            category=row.category,
            price=row.price
        )
        product_objects.append(product)
    
    products.close()
    
    return product_objects

def get_products():
    products = Product.query.limit(20).all()
    return products

def update_product_attributes(product, data):
    if 'name' in data:
        product.name = data['name']
    if 'description' in data:
        product.description = data['description']
    if 'stock' in data:
        product.stock = data['stock']
    if 'photo' in data:
        product.photo = base64.b64decode(data['photo'])
    if 'category' in data:
        product.category = data['category']
    if 'price' in data:
        product.price = data['price']

    db.session.commit()

def delete_product(seller_id, product_id):
    try:
        product = Product.query.filter_by(seller_id=seller_id, product_id=product_id).first()
        if not product:
            return None  

        db.session.delete(product)
        db.session.commit()
        return True  
    except (Exception) as e:
        print(f"Error al borrar el producto: {e}")
        return None
