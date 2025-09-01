import React from "react";

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row py-5 mt-5 text-center border-top">
        
        {/* Brokerage Calculator */}
        <div className="col-md-6 mb-4">
          <a
            style={{ textDecoration: "none" }}
            href="#"
          >
            <h3 style={{textAlign :"left", }} className="fs-5 fw-bold">Brokerage Calculator</h3>
          </a>
          <ul style={{textAlign :"left", lineHeight : '2.5'}} className="list-unstyled text-muted mt-3 ">
            <li>✔ Call & trade charges: ₹50 per order</li>
            <li>✔ RMS auto square-off: ₹50 per order</li>
            <li>✔ Stamp duty: As per state regulations</li>
            <li>✔ GST: 18% on brokerage + transaction charges</li>
            <li>✔ SEBI charges: ₹10 per crore</li>
            <li>✔ Exchange transaction charges apply</li>
          </ul>
        </div>

        {/* List of Charges */}
        <div className="col-md-6 mb-4">
          <a
            style={{ textDecoration: "none" }}
            href="#"
          >
            <h3 className="fs-5 fw-bold">List of Charges</h3>
          </a>
          <p className="text-muted mt-3">
            View the complete list of all charges applicable for equity, F&O,
            currency, and commodity segments.  
            <br /> <br />
            <a href="#" className="btn btn-outline-primary btn-sm">
              View Charges PDF
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
