import { useContext } from "react";
import { CartContext } from "..";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  return (
    <>
      <h3>My Cart</h3>
      <h3>Items : {cart.length} </h3>
      {cart.map(
        ({ id, name, description, price, category, quantity, brand }) => (
          <div key={id}>
            <p>Name: {name}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>
            <button onClick={() => removeFromCart(id)}>Remove From Cart</button>
            <hr />
          </div>
        )
      )}
    </>
  );
};
