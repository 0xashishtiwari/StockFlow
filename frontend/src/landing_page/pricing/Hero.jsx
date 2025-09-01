import React from "react";

const Hero = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="text-center py-5 border-bottom">
        <h1 className="fw-bold">Our Pricing</h1>
        <h3 className="text-muted fs-5 mt-3">
          Transparent, simple, and designed to maximize your returns
        </h3>
      </div>

      {/* Pricing Features */}
      <div className="row py-5 mt-4 text-center">
        {/* Equity Delivery */}
        <div className="col-md-4 px-4 mb-4">
          <img src="\media\pricingEquity.svg" alt="Equity Delivery" />
          <h2 className="fs-4 mt-3">Zero Brokerage on Equity</h2>
          <p className="text-muted">
            Invest in stocks on NSE & BSE with absolutely no hidden fees.
            Long-term wealth building, completely free.
          </p>
        </div>

        {/* Intraday & F&O */}
        <div className="col-md-4 px-4 mb-4">
          <img src="\media\intradayTrades.svg" alt="Intraday Trades" />
          <h2 className="fs-4 mt-3">Flat ₹20 per Order</h2>
          <p className="text-muted">
            Trade intraday & F&O at a flat ₹20 per order—whether your order size
            is ₹1,000 or ₹10,00,000.
          </p>
        </div>

        {/* Mutual Funds */}
        <div className="col-md-4 px-4 mb-4">
          <img src="\media\pricing0.svg" alt="Mutual Funds" />
          <h2 className="fs-4 mt-3">100% Free Mutual Funds</h2>
          <p className="text-muted">
            Invest directly in mutual funds with no commissions or distribution
            charges. More growth, more savings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
