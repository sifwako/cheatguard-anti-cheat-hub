import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container" style={{ backgroundColor: "#d3d3d3" }}>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-0 mb-0">
          <li className="nav-item">
            {" "}
            <Link to="/" className="nav-link px-3 text-muted">
              Home
            </Link>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/" className="nav-link px-3 text-muted">
              Features
            </Link>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/" className="nav-link px-3 text-muted">
              FAQs
            </Link>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/" className="nav-link px-3 text-muted">
              About
            </Link>{" "}
          </li>
        </ul>
        <p className="text-center text-muted">© 2023 Company, Inc</p>
      </footer>
    </div>
  );
}

export default Footer;
