import React from "react";

const ProductImage = ({ image, title }) => {
  //Can be useful if carousel is needed
  return (
    <img
      src={image}
      alt={title}
      style={{
        width: 500,
        height: "80vh",
        objectFit: "contain",
      }}
    />
  );
};

export default ProductImage;
