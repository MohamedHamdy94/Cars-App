import React from 'react';
import './OurVehicles.css';

const OurVehicles = () => {
  return (
    <div className="our-vehicles">
      <h1 className="heading">our vehicles</h1>
      <div className="content">
        <div className="left">
          <h1>BMW</h1>
          <div className="stars">
            <i className="fa-solid fa-star"/>
            <i className="fa-solid fa-star"/>
            <i className="fa-solid fa-star"/>
            <i className="fa-solid fa-star"/>
          </div>
          <p>8-Speed Automation</p>
          <p>2.5-Liter, 4-Cylinder, 203Hp</p>
          <p>Model: 2532</p>
          <p>Stock: KU680564</p>
          <div className="icon">
            <i className="fa-regular fa-user"/> 4
            <i className="fa-solid fa-bag-shopping"/> 4
          </div>
          <button>$90/DAY</button>
        </div>
        <div className="right">
          <img src="/Cars-App/images/car-2.png" alt="car-img" />
        </div>
      </div>
    </div>
  );
};

export default OurVehicles;
