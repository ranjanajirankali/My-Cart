import React from "react";

export default function Footer(props) {
  return (
    <div className="footer d-flex flex-column flex-md-row fixed-bottom p-3 bg-light shadow justify-content-between align-items-center">
      <button
        className="btn btn-danger mb-2 mb-md-0"
        onClick={props.resetQuantity}
      >
        Reset
      </button>
      <div className="total-amount bg-dark text-white px-3 py-2 rounded mb-2 mb-md-0">
        Total: ₹{props.totalAmount.toLocaleString("en-IN")}
      </div>
      <button className="btn btn-success">Pay Now</button>
    </div>
  );
}
