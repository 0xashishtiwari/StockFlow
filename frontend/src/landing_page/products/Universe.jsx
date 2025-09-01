import React from "react";

const Universe = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="my-4">The StockFlow Universe</h1>

        <p className="mb-5">
          Extend your trading experience across multiple platforms, explore
          strategies, and manage investments smarter in one ecosystem.
        </p>

        {/* First row */}
        <div className="col-4 p-3">
          <img
            src="/media/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
          />
          <p className="text-small text-muted">
            Curated thematic investment portfolios
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="/media/streakLogo.png"
            alt="Streak"
            className="img-fluid"
            style={{ width: "40%" }}
          />
          <p className="text-small text-muted">
            Algorithmic trading without coding
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="/media/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid"
            style={{ width: "40%" }}
          />
          <p className="text-small text-muted">
            Options trading simplified for all levels
          </p>
        </div>

        {/* Second row */}
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            className="img-fluid"
            style={{ width: "40%" }}
          />
          <p className="text-small text-muted">
            Direct mutual fund investments made easy
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid"
            style={{ width: "40%" }}
          />
          <p className="text-small text-muted">
            Gold and digital assets investments simplified
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/dittoLogo.png"
            alt="Ditto"
            className="img-fluid"
            style={{ width: "30%" }}
          />
          <p className="text-small text-muted">
            Automated portfolio tracking and insights
          </p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Universe;
