import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLinkClick = () => {
    setMenuVisible(false);
  };

  return (
    <div className="navbar">
      <Link to="/" className="heading-link">
        <h1 className="heading">MI TIO</h1>
      </Link>
      <button className="navbar-toggler" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={menuVisible ? "show" : ""}>
        <li>
          <Link className="link" to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/Menu" onClick={handleLinkClick}>
            Menu
          </Link>
        </li>
        <li>
          <Link className="link" to="/Drinks" onClick={handleLinkClick}>
            Drinks
          </Link>
        </li>
        <li>
          <Link className="link" to="/Info" onClick={handleLinkClick}>
            Info
          </Link>
        </li>
      </ul>
      {menuVisible && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default Navbar;
