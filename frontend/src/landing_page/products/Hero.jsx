import React from "react";

const Hero = () => {
  return (
    <section className="container py-5">
      <div className="row text-center justify-content-center">
        <div className="col-lg-8">
          <h1 className="fw-bold display-5">Technology</h1>
          <h3 className="text-muted mt-3">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <p className="mt-4 fs-5">
            Check out our{" "}
            <a
              href="#offerings"
              className="text-decoration-none fw-semibold text-primary"
            >
              investment offerings{" "}
              <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
