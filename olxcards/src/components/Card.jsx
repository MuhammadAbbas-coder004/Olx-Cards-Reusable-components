import React from 'react'

const Card = (props) => {
  console.log(props);
  
  return (
    
        <div className="card">
          <img
            src={props.img}
            alt="Civic"
            className="product-img"
          />

          <h1 className="card-title"> {props.productname} </h1>
          <p className="card-desc">  {props.category} </p>
          <h3 className="card-color"> {props.color} </h3>
          <h2 className="card-price">{props.price}</h2>
          <h6 className="card-location"> {props.location}  </h6>
        </div>
  )
}

export default Card