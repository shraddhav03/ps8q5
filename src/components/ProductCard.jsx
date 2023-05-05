import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "..";
import { WishlistContext } from "..";

export const ProductCard = ({ product, noDetail }) => {
  const { id, name, description, price, quantity, category, brand } = product;
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  return (
    <>
      <div key={id}>
        <h3> {name} </h3>
        <p> {description} </p>
        <p>Price: {price} </p>
        {noDetail && <Link to={`/product/${id}`}>Visit item</Link>}
        {!noDetail && (
          <div>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>
          </div>
        )}
        <br />
        <button onClick={() => addToCart(product)}> Add to Cart </button>
        <button onClick={() => addToWishlist(product)}>
          {" "}
          Add to Wishlist{" "}
        </button>
      </div>
    </>
  );
};
