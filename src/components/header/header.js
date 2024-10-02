import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Toggle cart state
  };

  return (
    <>
      <div className="header">
        {/* Logo Section */}
        <div className="logo">E-Shopping Cart</div>

        {/* Navigation Options */}
        <div className="options">
          {/* Home Link */}
          <div>
            <Link to="/cart">
              <i className="fas fa-home fa-2x homeAndCart text-white"></i>
            </Link>
          </div>

          {/* Cart Toggle */}
          <div onClick={toggleCart}>
            <i className="fas fa-shopping-cart fa-2x homeAndCart text-white"></i>
          </div>
        </div>
      </div>

      {/* Sliding Cart Section */}
      <div className={`cart ${isCartOpen ? "open" : ""}`}>
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="cardHeader">My Cart</div>
          <div className="closeIcon">
            <i className="bi bi-x closeIconMark" onClick={toggleCart}></i>
          </div>
        </div>
        <div className="cart-content d-flex justify-content-between align-items-center">
          <h2>Your Cart</h2>
          <p>Cart items go here...</p>
          {/* Add more cart details here */}
         
        </div>
      </div>
    </>
  );
}

export default Header;
