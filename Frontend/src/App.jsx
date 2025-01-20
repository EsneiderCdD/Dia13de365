import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Obtener productos desde Flask
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>

      {/* Lista de productos */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map(product => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img src={product.image} alt={product.name} style={{ width: "150px", height: "150px" }} />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>

      {/* Mostrar carrito */}
      <div style={{ marginTop: "30px" }}>
        <h2>Carrito</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <h3>
              Total: $
              {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
