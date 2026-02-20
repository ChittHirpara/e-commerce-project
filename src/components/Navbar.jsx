import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-brand">🛒 ShopHub</div>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Products
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
