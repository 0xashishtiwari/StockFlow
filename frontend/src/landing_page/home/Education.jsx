import React from 'react'

const Education = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        {/* Left Image Section */}
        <div className="col-6 text-center">
          <img 
            src="media/education.svg" 
            alt="Education resources illustration" 
            style={{ maxWidth: "80%" }} 
          />
        </div>

        {/* Right Content Section */}
        <div className="col-6">
          <h1 className="mb-4">Free and Open Market Education</h1>
          <p className="text-muted">
            <strong>Varsity</strong> is the largest online stock market 
            education resource in the world, covering everything from 
            the basics of investing to advanced trading strategies.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            Explore Varsity <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>

          <p className="mt-5 text-muted">
            <strong>Trading Q&amp;A</strong> is India’s most active trading 
            and investment community where you can get answers to all 
            your market-related queries.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            Visit Trading Q&amp;A <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Education
