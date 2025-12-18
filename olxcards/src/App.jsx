import React from "react";
import "./style.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Footer import kiya

function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar/>

        <section className="cards-section">
          <Card img={"https://i.pinimg.com/736x/f0/fd/95/f0fd959c0f2da26ce2e60413e0d293a5.jpg"}   
            category= {"Ipone 17pro 2025"} 
            description = {"Pta Approved 256gb"} 
            color = {"Orange"} 
            price = {"Rs, 445000"} 
            location = {"Karachi"}
          />     
          <Card img={"https://i.pinimg.com/1200x/65/c3/63/65c3636ca6b81584e53084c105c7a54d.jpg"}  
            category= {"Civic 2021"}  
            description= {"1.5L or 2.0L petrol engines,"}
            color = {"White"} 
            price = {"Rs, 8,250,000"} 
            location = {"Lahore"}
          />
          <Card img={"https://i.pinimg.com/736x/38/65/94/386594135756b1c8572b20991e9dd963.jpg"} 
            category= {"Macbook Air M2 2022"}  
            description= {"Apple MacBook Air M2 laptops any computer or laptop-related project."} 
            color = {"Sleek Silver" }
            price = {"Rs, 324,999" }
            location = {"Quetta"}
          />
          <Card img={"https://i.pinimg.com/736x/4e/a5/c8/4ea5c8c480625906a692bafa65ba7aad.jpg" }
            description= {"JBL Live 770NC 2025"}
            category= {"wireless headphones With up to 65 hours of battery life "} 
            color = {"Black"} 
            price = {"Rs, 20,999"}
            location = {"Sukkur"}
          />
          <Card img={"https://i.pinimg.com/1200x/aa/87/5c/aa875c72c035f4fb5c6d5a8ed43686dd.jpg" } 
            description= {"Nike Sneaker 2025"} 
            category= {"Nike Air Max 1 OG"}
            color = {"Red"}
            price = {"Rs, 3,499"} 
            location = {"Larkana"}
          />
          <Card img={"https://i.pinimg.com/736x/e3/8e/a8/e38ea8ba7fe72266a4dafb446784d96f.jpg"}  
            description = {"Mountain Bicycle 2023"}
            category = {"The perfect mountain bike A mountain bike with aluminum frame"} 
            color = {"Black"}
            price = {"Rs, 29,999"} 
            location = {"Hyderabad"}
          />
          <Card img={"https://i.pinimg.com/736x/95/4c/fc/954cfc3066594dcb1e7f6f2ca2e917aa.jpg"}
            description= {"Honda Cg125 2024"}
            category = {"commuter motorcycle with a 124cc 4-stroke OHV air-cooled engine, a 4-speed"} 
            color = {"Red"} 
            price = {"Rs, 2,50,000"} 
            location = {"Rawalpindi"}
          />
          <Card img={"https://i.pinimg.com/736x/c0/21/ef/c021ef014b1e51778b742a6d932a8ae0.jpg"} 
            description= {"Apple Smart Watch 2025"}  
            category = {"the Series 7 or the newer Ultra 3,such as a trail loop or sport band."}
            color = {"Green"} 
            price = {"Rs, 76,999"} 
            location = "Jaffarabad"
          />
        </section>

          <Footer/>
   

      </div>
      
    </>
  );
}

export default App;
