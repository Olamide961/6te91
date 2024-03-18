import "./assest/Header.css";import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import "./assest/Header.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icon";

function Header2() {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

    return (
        <>
        <div className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            6TE9
          </NavLink>

          <div className="nav-search">
            <input type="text" placeholder="search..." />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/About"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Service"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
    
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
        </div>
        </>
    );
}

export default Header2;