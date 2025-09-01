import React from "react";

const RightSection = ({
  productName,
  productDescription,
 imageURL,
  learnMore,
}) => {
  return  <div className="container my-5 border-top">
      <div className="row align-items-center">
        {/* Left - Image */}
         <div className="col-12 col-md-6">
          <h2 className="fw-bold">{productName}</h2>
          <p className="text-muted">{productDescription}</p>

        
            {learnMore && (
              <a href={learnMore} className="btn btn-outline-secondary">
                Learn More
              </a>
            )}
          </div>

        
       
        

        {/* Right - Content */}
       <div className="col-12 col-md-6 p-3 text-center">
          <img
            src={imageURL}
            alt={`${productName} Preview`}
            className="img-fluid rounded shadow"
          />
        </div>
         </div>
      </div>
    
  
  ;
};

export default RightSection;
