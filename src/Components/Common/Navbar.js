import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#28639f" }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            CheatGuard
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
            <ul className="navbar-nav">
              <li className="nav-item">
                {" "}
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>{" "}
              </li>
              <li class="nav-item">
                {" "}
                <Link
                  to="https://oqsp.blogs.lincoln.ac.uk/assessment-types/"
                  className="nav-link active"
                >
                  Assessment Types
                </Link>{" "}
              </li>
              <li class="nav-item">
                {" "}
                <Link
                  to="http://localhost:5001"
                  className="nav-link active"
                >
                  Share Incident
                </Link>{" "}
              </li>
              <form className="d-flex" role="search">
                {" "}
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>{" "}
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
