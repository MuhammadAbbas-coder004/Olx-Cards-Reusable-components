import React from "react";
import "./style.css";
import Card from "./components/Card";


function App() {
  return (
    <div className="wrapper">

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

        <button className="sell-btn">SELL</button>
      </nav>
      <section className="cards-section">
        <Card/>
         <Card/>
          <Card/>
           <Card/>
      </section>
    </div>
  );
}

export default App;
