import "../styles/Navbar.css";
import {Cart} from "./Cart.jsx";
import {Link} from "react-router-dom";
export function Navbar() {
  return (
    <>
      <div className={"navbar"}>
        <div className="homeLogoDiv">
          <div className={"navbarLogo"}>
            <img src="src/assets/logo.png" alt="Boot Logo" className="logo" />
          </div>
          <Link to={'/'} className="navButton">Home</Link>
        </div>

        <div className="cartDiv">
          <Link to={'/cart'} className="cartButton">Cart</Link>
        </div>
      </div>
    </>
  );
}
