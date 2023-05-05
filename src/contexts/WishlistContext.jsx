import { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    setWishlist((wishlist) => [...wishlist, item]);
  };

  const removeFromWishlist = (productId) => {
    const removedItem = wishlist.filter(({ id }) => id !== productId);
    setWishlist(() => removedItem);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
