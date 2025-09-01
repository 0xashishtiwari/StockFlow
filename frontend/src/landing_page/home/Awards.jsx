import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row align-items-center">
        {/* Left section */}
        <div className="col-6 text-center">
          <img
            src="/media/largestBroker.svg"
            alt="Brokerage Recognition"
            className="img-fluid"
          />
        </div>

        {/* Right section */}
        <div className="col-6 p-5">
          <h1>India’s Leading Broker </h1>
          <p>
            Trusted by over <strong>2 million+ investors</strong> nationwide,
            contributing to more than{" "}
            <strong>15% of all retail trading volumes </strong>
             in India every single day through investments and trading in:
          </p>

          <div className="row mt-4">


            <div className="col-6">
              <ul>
                <li>
                  <p>Futures & Options</p>
                </li>
                <li>
                  <p>Commodities</p>
                </li>
                <li>
                  <p>Currency Markets</p>
                </li>
              </ul>
            </div>


            <div className="col-6">
              <ul>
                <li>
                  <p>Equity Investments</p>
                </li>
                <li>
                  <p>Mutual Funds</p>
                </li>
                <li>
                  <p>Derivatives</p>
                </li>
              </ul>
            </div>
          </div>


          <img src="media/pressLogos.png" style={ {width : '90%'}} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
