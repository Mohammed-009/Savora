import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="savora-navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        SAVORA
      </NavLink>

      <button
        type="button"
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="savora-nav-items"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul
        id="savora-nav-items"
        className={`nav-items ${menuOpen ? "active" : ""}`}
      >
        <li>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/menu" onClick={closeMenu}>
            Menu
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="reservation-link"
          >
            Reserve a table
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
