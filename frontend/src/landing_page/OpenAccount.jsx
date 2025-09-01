import React from 'react'

const OpenAccount = () => {
  return (
    <div className='container p-5 mb-5'>
      <div className="row text-center">
       
        <h1 className="mt-5">Open a StockFlow Account</h1>
        <p className="text-muted">
          Get started with our modern trading platform and mobile apps. 
          Enjoy <strong>₹0 on equity investments</strong> and 
          <strong> flat ₹20 on intraday & F&O trades</strong>.
        </p>

        <button 
          className='p-2 btn btn-primary fs-5 mx-auto d-block' 
          style={{ maxWidth: "250px" }}
        >
          Sign Up Now
        </button>

      </div>
    </div>
  )
}

export default OpenAccount
