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
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li> */}
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
};

export default Navbar;
