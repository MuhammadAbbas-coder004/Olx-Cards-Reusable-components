import React from 'react'

const Card = () => {
  return (
    
        <div className="card">
          <img
            src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
            alt="Civic"
            className="product-img"
          />

          <h1 className="card-title">Honda Civic 2020</h1>
          <p className="card-desc">Total Genuine • Family Used</p>
          <h3 className="card-color">Color: Black</h3>
          <h2 className="card-price">Rs 5,200,000</h2>
          <h6 className="card-location">Lahore</h6>
        </div>
  )
}

export default Card