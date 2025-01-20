from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Lista de productos
products = [
    {"id": 1, "name": "Producto A", "price": 10.99, "image": "https://www.cocinaconalegria.com/wp-content/themes/yootheme/cache/2b/que-son-los-productos-organicos-2b5dd652.jpeg"},
    {"id": 2, "name": "Producto B", "price": 20.5, "image": "https://co.naturesheart.com/sites/default/files/inline-images/NATURE_2.JPG"},
    {"id": 3, "name": "Producto C", "price": 15.75, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhzbyAyqdXMLY243gk80rol9QV3Gfz9g1Ogg&s"}
]

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)
