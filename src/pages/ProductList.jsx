import { useContext } from "react";

import { ProductCard } from "../components/ProductCard";
import { ProductContext } from "..";

export const ProductList = () => {
  const { productData } = useContext(ProductContext);

  return (
    <>
      {productData && (
        <div>
          {productData.map((product) => (
            <div>
              <ProductCard product={product} noDetail />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
