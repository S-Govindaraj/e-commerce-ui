import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Products</h4>
          <ul className="list-group">
            {products.map((product) => (
              <li key={product.id} className="list-group-item d-flex justify-content-between">
                {product.name} - ${product.price}
                <button className="btn btn-sm btn-success" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-6">
          <h4>Your Cart</h4>
          <ul className="list-group">
            {cart.length === 0 ? (
              <li className="list-group-item">Your cart is empty.</li>
            ) : (
              cart.map((product) => (
                <li key={product.id} className="list-group-item d-flex justify-content-between">
                  {product.name} - ${product.price}
                  <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(product.id)}>
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
          <h5 className="mt-3">Total: ${total}</h5>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
