import React from "react";
import myLogo from "../assests/logo_200x200.png";
import { Link } from "react-scroll";

// React font Awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand " href="#">
          <img className="logo" src={myLogo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link
                offset={-110}
                // smooth={true}
                className="nav-link "
                aria-current="page"
                href="#"
                to="home"
              >
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                offset={-110}
                // smooth={true}
                className="nav-link"
                href="#"
                to="about"
              >
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link
                offset={-110}
                // smooth={true}
                className="nav-link"
                href="#"
                to="services"
              >
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                offset={-110}
                // smooth={true}
                className="nav-link"
                href="#"
                to="experience"
              >
                experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                offset={-110}
                // smooth={true}
                className="nav-link"
                href="#"
                to="portfolio"
              >
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                offset={-110}
                // smooth={true}
                className="nav-link"
                href="#"
                to="contacts"
              >
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
