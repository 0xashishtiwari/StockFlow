import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center" to={'/'}>
         <i className="fa-solid fa-chart-column me-2 fs-4 text-primary"></i>
          <span className="fw-bold">Stockflow</span>
        </Link>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to={'/signup'}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/about'}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/product'}>
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/pricing'}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/support'}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
