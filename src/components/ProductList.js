import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    <div>
      {props.productList.length > 0 ? (
        props.productList.map((product, i) => (
          <Product
            product={product}
            key={i}
            index={i}
            incrementQuantity={props.incrementQuantity}
            decrementQuantity={props.decrementQuantity}
            removeItem={props.removeItem}
          />
        ))
      ) : (
        <h3 className="text-center mt-4">No Products Available in the Cart</h3>
      )}
    </div>
  );
}
