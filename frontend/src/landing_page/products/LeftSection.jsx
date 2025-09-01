import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  AppStore,
}) => {
  return (
    <div className="container my-5 border-top">
      <div className="row align-items-center">
        {/* Left - Image */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src={imageURL}
            alt={`${productName} Preview`}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right - Content */}
        <div className="col-12 col-md-6">
          <h2 className="fw-bold">{productName}</h2>
          <p className="text-muted">{productDescription}</p>

          {/* Action Buttons */}
          <div className="d-flex flex-wrap gap-3 mt-3">
            {tryDemo && (
              <a href={tryDemo} className="btn btn-primary">
                Try Demo
              </a>
            )}
            {learnMore && (
              <a href={learnMore} className="btn btn-outline-secondary">
                Learn More
              </a>
            )}
          </div>

          {/* Store Badges */}
          <div className="d-flex gap-3 mt-4">
            {googlePlay && (
              <a href={googlePlay} target="_blank" rel="noopener noreferrer">
                <img
                  src="media/googlePlayBadge.svg"
                  alt="Get it on Google Play"
                  height="50"
                />
              </a>
            )}
            {AppStore && (
              <a href={AppStore} target="_blank" rel="noopener noreferrer">
                <img
                  src="media/appstoreBadge.svg"
                  alt="Download on the App Store"
                  height="50"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
