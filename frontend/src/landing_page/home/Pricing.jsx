import React from 'react'

const Pricing = () => {
  return (
    <div className="container my-5 ">
      <div className="row align-items-center">
        
        {/* Left Section */}
        <div className="col-4">
          <h1 className="mb-3">Unbeatable Pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking in India with a
            commitment to <strong>price transparency</strong>. Enjoy flat fees and
            zero hidden charges.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            See Pricing <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>

        <div className="col-2"></div>

        {/* Right Section */}
        <div className="col-6">
          <div className="row text-center">
            <div className="col border rounded p-4 mx-2 shadow-sm">
              <h1 className="fs-1 text-success">₹0</h1>
              <p className="mb-0">
                Free equity delivery & <br /> direct mutual funds
              </p>
            </div>
            <div className="col border rounded p-4 mx-2 shadow-sm">
              <h1 className="fs-1 text-primary">₹20</h1>
              <p className="mb-0">
                Flat fee for <br /> Intraday & F&O trades
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Pricing
