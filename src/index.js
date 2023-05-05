import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ProductContext, ProductProvider } from "./contexts/ProductContext";
import { CartContext, CartProvider } from "./contexts/CartContext";
import { WishlistContext, WishlistProvider } from "./contexts/WishlistContext";

export { ProductContext };
export { CartContext };
export { WishlistContext };

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  </StrictMode>
);
