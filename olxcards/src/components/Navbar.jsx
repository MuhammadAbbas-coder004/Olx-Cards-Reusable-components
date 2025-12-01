import React from 'react'

const Navbar = () => {
  return (
   <>
   <nav className="navbar">
        <div className="logo">OLX</div>

        <div className="nav-links">
          <a href="#">Cars</a>
          <a href="#">Mobiles</a>
          <a href="#">Properties</a>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>

        <button className="sell-btn">  SELL</button>
      </nav>
   </>
  )
}

export default Navbar