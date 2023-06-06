// scss
import "./Hamburger.scss";
// interfaces
import HamburgerProps from "../../interfaces/hamburgerProps";

function Hamburger({ isOpen, setIsOpen }: HamburgerProps) {
  function handleClick(): void {
    setIsOpen(!isOpen);
  }

  return (
    <section
      className={`hamburger-menu ${isOpen ? "hamburger-menu--open" : ""}`}
      onClick={handleClick}
    >
      <span className="hamburger-menu__line"></span>
      <span className="hamburger-menu__line"></span>
      <span className="hamburger-menu__line"></span>
    </section>
  );
}

export default Hamburger;
