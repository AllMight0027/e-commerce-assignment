import React from "react";
import CartItem from "../components/cart-item";
import { CART_LOCAL_KEY } from "../constants";

const CartPage = () => {
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    const cartItems = localStorage.getItem(CART_LOCAL_KEY);
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  const removeItemFromCart = (productId) => {
    const newCartItems = cartItems.filter((item) => {
      return item.id !== productId;
    });
    setCartItems(newCartItems);
    localStorage.setItem(CART_LOCAL_KEY, JSON.stringify(newCartItems));
  };

  if (!cartItems.length) return <div>No items in cart</div>;

  return (
    <div style={{ padding: 16, display: "flex", flexWrap: "wrap" }}>
      {cartItems.map((item) => (
        <CartItem
          product={item.product}
          qty={item.qty}
          onRemove={removeItemFromCart}
        />
      ))}
    </div>
  );
};

export default CartPage;
