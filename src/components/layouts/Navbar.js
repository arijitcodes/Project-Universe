import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <Link to="/" className="navbar-brand">
        <img
          src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/globe-icon-18-256.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        &nbsp;&nbsp;Project Universe
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse float-sm-right"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/"
              // data-toggle="collapse"
              // data-target="#navbarSupportedContent"
            >
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/apod"
              // data-toggle="collapse"
              // data-target="#navbarSupportedContent"
            >
              APOD
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/neos"
              // data-toggle="collapse"
              // data-target="#navbarSupportedContent"
            >
              NEOs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/mars"
              // data-toggle="collapse"
              // data-target="#navbarSupportedContent"
            >
              MARS
            </Link>
          </li>
          <li className="nav-item nav-link d-none d-md-block">|</li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/about"
              // data-toggle="collapse"
              // data-target="#navbarSupportedContent"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
