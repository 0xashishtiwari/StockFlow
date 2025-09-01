import React from "react";

const Hero = () => {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row p-5 mt-5">
        <h1 className="text-center fs-2 fw-bold">
          Redefining how India invests <br />
          Technology, transparency, and trust at the core.
        </h1>
      </div>

      {/* About Section */}
      <div className="row p-5 mt-5 border-top">
        {/* Left Column */}
        <div className="col-12 col-md-6 mb-4 text-muted">
          <p>
            StockFlow started with a simple idea — <b>make investing accessible to
            everyone</b>. We believed that high costs, complex platforms, and lack
            of support shouldn’t stand in the way of financial growth.
          </p>
          <p>
            Over the years, we’ve built <b>India’s fastest-growing trading
            ecosystem</b>, where reliability meets innovation. From long-term
            investors to active traders, millions trust StockFlow to power their
            financial journey every day.
          </p>
          <p>
            With a <b>community-first approach</b>, we go beyond just trading by
            offering knowledge, insights, and tools that truly make a difference.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 text-muted">
          <p>
            What makes us different? <b>Technology that’s built in-house</b>,
            designed to be fast, simple, and powerful — so you spend less time
            figuring things out and more time making decisions that matter.
          </p>
          <p>
            Our journey doesn’t stop at trading. Through <b>fintech collaborations,
            community programs, and educational initiatives</b>, we’re helping shape
            the future of investing in India.
          </p>
          <p>
            This is just the beginning. <b>Join StockFlow today</b> and be part of a
            movement that’s changing how India invests, learns, and grows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
