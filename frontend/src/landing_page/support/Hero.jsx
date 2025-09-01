import React from 'react'

const Hero = () => {
  return (
    <section className="container-fluid " id='supportHero'>
      
      <div className=" p-5 mt-5 mb-5" id='supportWrapper'>
          <h3>Support Portal</h3>
          <a style={{textDecoration :'none'}} href="">Track Tickets</a>
      </div>
      <div className=" row p-5 me-5">
          <div className="col-6 p-5 ">
            <h1 className='fs-3'>Search for an answer or browse help topics to create a Ticket</h1>
            <input className='mb-3' placeholder='Eg. how to do I activate F&O' type="text" /><br />
           

           <a  href='#'> Track account opening</a>
           <a href='#'> Track segment activation</a>
           <a href='#'> Intraday margins</a>
           <a href='#'> Kite user manual </a>
           
          </div>
          <div className="col-6 p-5 ">
            <h1 className='fs-3'>Featured</h1>
            <ol>
              <li>
              

            <a href='#'> Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
           <a href='#'> Track segment activation </a>
           </li>
            </ol>
          </div>
      </div>
    </section>
  )
}

export default Hero