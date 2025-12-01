import React from 'react'
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
   <>
   <nav className="navbar">
        <div className="logo">
        <img id='logo-img' src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png" alt="" />
          </div>

        <div className="nav-links">
          <a href="#">Cars</a>
          <a href="#">Mobiles</a>
          <a href="#">Properties</a>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>

         <button className="olx-sell-btn" aria-label="Sell">
      <span className="olx-sell-btn__inner">
        <Plus className="olx-sell-btn__icon" />
        <span className="olx-sell-btn__label">Sell</span>
      </span>
    </button>
      </nav>
   </>
  )
}

export default Navbar