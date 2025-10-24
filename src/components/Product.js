import React from "react";

export default function Product(props) {
  // Format price with Indian commas
  const formatPrice = (price) => price.toLocaleString("en-IN");

  return (
    <div className="row mt-3 align-items-center product-row">
      {/* Serial Number */}
      <div className="col-1">
        <h5>{props.index + 1}</h5>
      </div>

      {/* Product Name & Price */}
      <div className="col-4 product-name">
        <h5>{props.product.name}</h5>
        <span className="product-price">
          ₹{formatPrice(props.product.price)}
        </span>
      </div>

      {/* Quantity Buttons */}
      <div className="col-3">
        <div className="btn-group" role="group">
          <button
            className="btn btn-danger"
            onClick={() => props.decrementQuantity(props.index)}
          >
            -
          </button>
          <button className="btn btn-warning">{props.product.quantity}</button>
          <button
            className="btn btn-success"
            onClick={() => props.incrementQuantity(props.index)}
          >
            +
          </button>
        </div>
      </div>

      {/* Total Amount */}
      <div className="col-3">
        <h5>
          Total: ₹{formatPrice(props.product.quantity * props.product.price)}
        </h5>
      </div>

      {/* Remove Button */}
      <div className="col-1">
        <button
          className="btn btn-danger"
          onClick={() => props.removeItem(props.index)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
