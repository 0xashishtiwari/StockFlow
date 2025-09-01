import React from 'react'

const Team = () => {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row p-5 border-top mt-5">
        <h1 className="text-center mt-5 fw-bold">
          People
        </h1>
      </div>

      {/* About Section */}
      <div className="row p-5">
        {/* Left Column */}
        <div className="col-12 col-md-6 mb-4 text-center">
          <img
            style={{ borderRadius: '100%', width: '60%' }}
            src="\media\AshishTiwari.jpeg"
            alt="Founder image"
          />
          <h4 className="mt-5">Ashish Tiwari</h4>
          <h5>Founder & CEO</h5>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 text-muted">
          <p>
            Ashish Tiwari is the visionary behind <b>StockFlow</b>. With a passion
            for technology and finance, he set out to simplify investing for the
            next generation of traders and long-term investors. His journey began
            with a simple belief — that financial growth should not be limited by
            high costs, outdated tools, or lack of access.
          </p>
          <p>
            Under his leadership, StockFlow has grown into a platform that puts
            <b> transparency, trust, and innovation</b> at the core. Ashish has
            always emphasized building technology in-house, ensuring users get a
            fast, reliable, and seamless experience while making financial
            decisions. His vision is to create an ecosystem where learning and
            investing go hand in hand.
          </p>
          <p>
            Beyond building a company, Ashish is deeply committed to
            <b> empowering the community</b>. From educational initiatives that
            help new investors gain confidence, to collaborations that strengthen
            India’s fintech space, he continues to shape the future of investing
            with a long-term perspective. His leadership is guided by one
            principle — making wealth creation simple and accessible for everyone.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team
