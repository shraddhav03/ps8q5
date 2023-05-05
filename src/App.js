import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { ProductList } from "./pages/ProductList";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { Header } from "./components/Header";
import { ProductDetails } from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
