import React from "react";

export default function Navbar({ totalItems }) {
  return (
    <nav className="navbar">
      <div>
        <h1>My Cart</h1>
        <small className="cart-subtext">“Your Favorite Items are Here!”</small>
      </div>

      <div className="cart-container">
        <img
          src="https://i.pinimg.com/736x/e5/cf/4b/e5cf4bb70625caf5fef862d1a71e914c.jpg"
          alt="Cart"
          className="cart-icon"
        />
        <span className="total-items-badge">{totalItems}</span>
      </div>
    </nav>
  );
}
