import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
        <div className="row text-center">
            
      <img src='media/homeHero.png' alt='Home Image' className='mb-5'/>
             <h1 className="mt-5">Your Gateway to Smart Investing</h1>
        <p>
          Trade stocks, explore mutual funds, and grow your portfolio — all in one seamless platform.
        </p>
        
            <button className='p-2 btn btn-primary fs-5' style={{width : "20%", margin :  "0 auto" }}>Get Started</button>

        </div>

    </div>
  )
}

export default Hero