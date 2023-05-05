import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../data/fakeFetch";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/products");
      if (response.status === 200) {
        setProductData(() => response.data.products);
      }
    } catch (e) {
      if (e.status === 404) {
        setError(() => e);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {productData && (
        <div>
          <ProductContext.Provider value={{ productData }}>
            {children}
          </ProductContext.Provider>
        </div>
      )}
      {error && <p>{error.message}</p>}
    </>
  );
};
