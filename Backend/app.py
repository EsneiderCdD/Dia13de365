from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Lista de productos
products = [
    {"id": 1, "name": "Producto A", "price": 10.99, "image": "https://via.placeholder.com/150"},
    {"id": 2, "name": "Producto B", "price": 20.5, "image": "https://via.placeholder.com/150"},
    {"id": 3, "name": "Producto C", "price": 15.75, "image": "https://via.placeholder.com/150"}
]

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)
