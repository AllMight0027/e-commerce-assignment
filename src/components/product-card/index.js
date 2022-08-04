import React from "react";

const ProductCard = ({ product }) => {
  return (
    <a href={`/product/${product.id}`}>
      <div
        style={{
          margin: 8,
          width: 100,
        }}
      >
        <img
          src={product.image}
          style={{
            width: "100%",
            height: 100,
            objectFit: "contain",
          }}
          alt={product.title}
        />
        <p>{product.title}</p>
      </div>
    </a>
  );
};

export default ProductCard;
