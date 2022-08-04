import React from "react";
import { CART_LOCAL_KEY } from "../../constants";

const AddToCartButton = ({ product }) => {
  const [cartItems, setCartItems] = React.useState([]);
  const [qtyInCart, setQtyInCart] = React.useState(0);
  const productId = product.id;

  React.useEffect(() => {
    const cartItems = localStorage.getItem(CART_LOCAL_KEY);
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
      const item = JSON.parse(cartItems).find((item) => {
        return item.id === productId;
      });
      console.log(item);
      item && setQtyInCart(item.qty);
    } else {
      localStorage.setItem(CART_LOCAL_KEY, JSON.stringify([]));
    }
  }, [productId]);

  const addToCart = () => {
    let newCartItems = [];
    if (!qtyInCart) {
      newCartItems = [
        ...cartItems,
        { id: productId, qty: qtyInCart + 1, product },
      ];
    } else {
      newCartItems = cartItems
        .map((item) => {
          if (item.id === productId) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        })
        .filter((item) => {
          return item.id !== productId;
        })
        .concat([{ id: productId, qty: qtyInCart + 1, product }]);
    }
    localStorage.setItem(CART_LOCAL_KEY, JSON.stringify(newCartItems));
    setQtyInCart(qtyInCart + 1);
  };

  const removeFromCart = () => {
    let newCartItems = [];
    if (qtyInCart - 1) {
      newCartItems = [
        ...cartItems,
        { id: productId, qty: qtyInCart - 1, product },
      ];
    } else {
      newCartItems = cartItems.filter((item) => {
        return item.id !== productId;
      });
    }
    localStorage.setItem(CART_LOCAL_KEY, JSON.stringify(newCartItems));
    setQtyInCart(qtyInCart - 1);
  };

  if (!qtyInCart) {
    return <button onClick={addToCart}>Add To Cart</button>;
  }

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <button onClick={removeFromCart}>-</button>
      &emsp;{qtyInCart}&emsp;
      <button onClick={addToCart}>+</button>
    </div>
  );
};

export default AddToCartButton;
