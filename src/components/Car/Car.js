import React from "react";
import "./Car.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Car = (props) => {
  const { cars, handleAddToCart } = props;
  const { name, img, price } = cars;
  return (
    <div className="col-12 col-md-6 col-lg-4  d-flex justify-content-center">
      <div className="car-container">
        <div className="car-img">
          <img src={img} alt="" />
        </div>
        <div className="details">
          <h4>{name}</h4>
          <p>Price: {price}</p>
        </div>
        <button
          className="btn btn-dark rounded-0 border-0 cart-btn"
          onClick={() => handleAddToCart(cars)}
        >
          Add to Cart <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

export default Car;
