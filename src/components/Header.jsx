import { NavLink } from "react-router-dom";

const getActiveStyle = ({ isActive }) => ({
  margin: "1 rem 0",
  fontWeight: isActive ? "600" : "400",
  padding: isActive ? "1rem" : "0.5rem",
  color: isActive ? "red" : ""
});

export const Header = () => {
  return (
    <>
      <div>
        <h1 className="product-listing-page">Product Listing Page</h1>
        <nav className="nav-links">
          <NavLink style={getActiveStyle} to="/">
            Home
          </NavLink>
          <NavLink style={getActiveStyle} to="/cart">
            MyCart
          </NavLink>
          <NavLink style={getActiveStyle} to="/wishlist">
            MyWishList
          </NavLink>
        </nav>
      </div>
    </>
  );
};
