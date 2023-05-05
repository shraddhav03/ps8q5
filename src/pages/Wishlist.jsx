import { useContext } from "react";
import { WishlistContext } from "..";

export const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  const { removeFromWishlist } = useContext(WishlistContext);

  return (
    <>
      <h3>My Wishlist</h3>
      <h3>Items : {wishlist.length} </h3>
      {wishlist.map(
        ({ id, name, description, price, category, quantity, brand }) => (
          <div key={id}>
            <p>Name: {name}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>
            <button onClick={() => removeFromWishlist(id)}>
              Remove From Wishlist
            </button>
            <hr />
          </div>
        )
      )}
    </>
  );
};
