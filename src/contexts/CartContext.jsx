import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // console.log(cart)
  const addToCart = (item) => {
    setCart((cart) => [...cart, item]);
  };

  const removeFromCart = (productId) => {
    const removedItem = cart.filter(({ id }) => id !== productId);
    setCart(() => removedItem);
  };
  return (
    // <CartContext.
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
