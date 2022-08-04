import React from "react";
import "./styles.css";

const CartItem = ({ product, onRemove, qty }) => {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.title}
        style={{ width: 100, height: 100, borderRadius: 5 }}
      />
      <div>
        <p className="title">{product.title}</p>
        <p className="price">
          {product.price} x {qty}
        </p>
      </div>
      <button onClick={() => onRemove(product.id)} className="remove">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
