import React from "react";
import ProductList from "../components/product-list";

const Home = () => {
  const [productsList, setProductsList] = React.useState([]);
  const [loadingProducts, setLoadingProducts] = React.useState(true);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsList(data);
        setLoadingProducts(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {loadingProducts ? (
        <div>Loading...</div>
      ) : (
        <ProductList products={productsList} />
      )}
    </div>
  );
};

export default Home;
