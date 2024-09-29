import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">E-Shopping Cart</div>
      <div className="options">
        <div>
          <Link to="/cart">
            <button>Home</button> {/* Use a button inside the Link */}
          </Link>
        </div>
        <div>
          <Link to={"/cart/product"}>View Cart</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
