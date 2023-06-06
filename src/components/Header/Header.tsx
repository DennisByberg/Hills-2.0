// react
import { useState } from "react";
// components
import Hamburger from "../Hamburger/Hamburger";
// images
import hillsLogo from "../../assets/Images/hillsLogo.png";
// scss
import "./Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__hillsLogo-and-version-container">
        <img className="header__hillsLogo" src={hillsLogo} />
        <span className="header__version">2.0</span>
      </div>
      <div className="header__hamburger-and-button-container">
        <button className="header__bli-medlem-btn">Bli Medlem</button>

        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
export default Header;
