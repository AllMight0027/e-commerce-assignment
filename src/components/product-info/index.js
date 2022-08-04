import React from "react";

const ProductInfo = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>Category- {product.category}</p>
      <p>
        Rating- {product.rating.rate}({product.rating.count})
      </p>
      <p style={{ fontSize: "1.2rem", fontWeight: 500 }}>
        Price: {product.price}/-
      </p>
      <hr />
      <p>{product.description}</p>
      <hr style={{ marginBottom: "1em" }} />
    </div>
  );
};

export default ProductInfo;
