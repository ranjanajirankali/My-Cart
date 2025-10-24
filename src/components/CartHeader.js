import React from "react";

export default function CartHeader({ totalItems }) {
  return (
    <nav className="navbar">
      <h1>My Cart</h1>
      <div className="cart-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
          alt="Cart"
          className="cart-icon"
        />
        <span className="cart-badge">{totalItems}</span>
      </div>
    </nav>
  );
}
