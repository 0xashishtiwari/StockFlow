import React from "react";

const Stats = () => {
  return (
    <div className="container p-5">
      <div className="row p-5 align-items-center">
        
        {/* Left Section */}
        <div className="col-6">
          <h1 className="fs-2 mb-5">Built on Trust, Backed by Scale</h1>

          <div className="mt-4">
            <h2 className="fs-4">Customer-First Approach</h2>
            <p className="text-muted">
              More than <strong>1.3 crore investors</strong> choose StockFlow for
              reliable, transparent, and hassle-free investing.
            </p>
          </div>

          <div className="mt-3">
            <h2 className="fs-4">Unmatched Market Presence</h2>
            <p className="text-muted">
              Over <strong>3.5 lakh crore INR</strong> in equity assets managed every
              day through our platform.
            </p>
          </div>

          <div className="mt-3">
            <h2 className="fs-4">Wide Range of Opportunities</h2>
            <p className="text-muted">
              From equities and mutual funds to currencies and derivatives —
              everything under one roof.
            </p>
          </div>

          <div className="mt-3">
            <h2 className="fs-4">Secure & Seamless</h2>
            <p className="text-muted">
              Advanced infrastructure ensures smooth trades with bank-grade security.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-6 text-center">
          <img
            src="media/ecosystem.png"
            alt="Investment Ecosystem"
            style={{ width: "75%" }}
            className="mb-4"
          />

          <div className="d-flex justify-content-center gap-4">
            <a href="/" style={{ textDecoration: "none" }}>
              Explore Products{" "}
              <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              Try Our Demo{" "}
              <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
