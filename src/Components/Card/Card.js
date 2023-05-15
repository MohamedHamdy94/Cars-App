import React from 'react';

const Card = ({ car }) => {
  return (
    <div className="card">
      <h2>{car.name}</h2>
      <div className="image">
        <img src={car.image} alt="car-img" />
      </div>
      <h2>{car.model}</h2>
      <div className="icon">
        <i className="fa-solid fa-gauge-simple-high"/> {car.gaugeSimpleHigh}
        <i className="fa-regular fa-circle-pause"/> {car.circlePause}
        <i className="fa-solid fa-plug-circle-bolt"/>{' '}
        {car.plugCircleBolt}
      </div>
      <h2>{car.price}$</h2>
      <button>Rent</button>
    </div>
  );
};

export default Card;
