import "../styles/Navbar.css";

export function Navbar() {
  return (
    <>
      <div className={"navbar"}>
        <div className="homeLogoDiv">
          <div className={"navbarLogo"}>
            <img src="src/assets/logo.png" alt="Boot Logo" className="logo" />
          </div>
          <button className="navButton">Home</button>
        </div>

        <div className="cartDiv">
          <button className="cartButton">Cart</button>
        </div>
      </div>
    </>
  );
}
