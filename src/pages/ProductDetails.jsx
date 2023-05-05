import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "..";

const ProductDetails = () => {
  const { productId } = useParams();
  const { productData } = useContext(ProductContext);

  function getProductDetails(products, productId) {
    return products.find((product) => product.id === Number(productId));
  }
  const product = getProductDetails(productData, productId);

  const { id, name, description, quantity, category, brand } = product;

  return (
    <>
      <div>
        <h1>About</h1>
        <div key={id}>
          <p>Name: {name}</p>
          <p>Description: {description}</p>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>
        </div>
      </div>
    </>
  );
};
export { ProductDetails };
