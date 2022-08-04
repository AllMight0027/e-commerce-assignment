import React from "react";
import { useParams } from "react-router-dom";
import AddToCartButton from "../components/add-to-cart";
import ProductImage from "../components/product-image";
import ProductInfo from "../components/product-info";

const ProductDisplayPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loadingProduct, setLoadingProduct] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoadingProduct(false);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        setLoadingProduct(false);
      });
  }, [productId]);

  if (!loadingProduct && !product) return <div>Product Not Found</div>;

  return (
    <div>
      {loadingProduct ? (
        <>Loading....</>
      ) : (
        <div
          style={{
            display: "flex",
          }}
        >
          <ProductImage image={product.image} title={product.title} />
          <div style={{ width: "60%", padding: 16, paddingLeft: 50 }}>
            <ProductInfo product={product} />
            <AddToCartButton product={product} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDisplayPage;
