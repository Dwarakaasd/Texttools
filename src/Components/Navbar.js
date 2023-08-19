import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode2} bg-${props.mode2}`}
      >
        <div className="container-fluid">
          <a
            className={`navbar-brand text-${
              props.mode2 === "light" ? "green" : "light"
            }`}
            href="#"
          >
            {props.title}
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link active text-${
                    props.mode2 === "light" ? "green" : "light"
                  }`}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
            </ul>
            <div
              className={`form-check form-switch mx-2 text-${
                props.mode2 === "light" ? "green" : "light"
              }`}
            >
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark blue mode
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemodes}
              />
            </div>
          </div>
        </div>
      </nav>
      <div style={{ height: "50px" }}>
        {props.alert && (
          <div
            className={`alert alert-success alert-dismissible fade show`}
            role="alert"
          >
            <strong>{props.alert.type}</strong>: {props.alert.msg}
          </div>
        )}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  handleNavigate: PropTypes.func,
};
