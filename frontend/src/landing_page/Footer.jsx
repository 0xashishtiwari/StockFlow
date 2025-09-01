import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-light border-top pt-5 pb-4">
      <div className="container">
        <div className="row">
          
          {/* Brand + Description */}
          <div className="col-md-4 mb-4">
            <a className="navbar-brand d-flex align-items-center mb-3" href="/">
              <i className="fa-solid fa-chart-column me-2 fs-4 text-primary"></i>
              <span className="fw-bold fs-5">StockFlow</span>
            </a>
            <p className="text-muted small">
              StockFlow is a modern investment and trading platform designed to make financial markets simple, 
              accessible, and transparent for everyone. Our mission is to empower individuals to take control of 
              their wealth-building journey with the help of advanced technology, intuitive tools, and educational 
              resources. Whether you are a first-time investor or an experienced trader, StockFlow provides a seamless 
              experience that combines speed, security, and reliability.
              <br /><br />
              We believe investing should not be limited to experts or institutions—anyone with curiosity and 
              discipline can grow their wealth with the right guidance. That is why StockFlow brings together a 
              clean, user-friendly interface, zero-cost equity investments, and flat, low-cost intraday and derivatives 
              trading. Our powerful web and mobile platforms ensure you never miss an opportunity.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted text-decoration-none">About</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Products</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Pricing</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Referral Program</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Careers</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Press & Media</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted text-decoration-none">Help Center</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Contact Us</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Community</a></li>
              <li><a href="/" className="text-muted text-decoration-none">FAQs</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Account</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted text-decoration-none">Login</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Sign Up</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Plans</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Forgot Password</a></li>
            </ul>
          </div>

        </div>

        {/* Social Media Icons */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="#" className="text-muted fs-5"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" className="text-muted fs-5"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#" className="text-muted fs-5"><i className="fa-brands fa-github"></i></a>
          <a href="#" className="text-muted fs-5"><i className="fa-brands fa-facebook"></i></a>
        </div>

        {/* Bottom line */}
        <div className="text-center text-muted small">
          © {new Date().getFullYear()} StockFlow. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
