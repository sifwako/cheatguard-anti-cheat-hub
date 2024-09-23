import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from './logo.png'; // Update this path to where your logo is stored

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#28639f" }}
      >
        <div className="container-fluid">
          {/* Replace CheatGuard text with logo */}
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="CheatGuard Logo" className="navbar-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ai-assessmentscale" className="nav-link">
                  AI-Based Cheating
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="https://oqsp.blogs.lincoln.ac.uk/assessment-types/"
                  className="nav-link"
                >
                  Assessment Types
                </Link>
              </li>
              <li className="nav-item">
                <Link to="http://localhost:5001" className="nav-link">
                  Share Incident
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
