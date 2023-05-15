import React from 'react';
import './services.css';
const Services = () => {
  return (
    <div className="services">
      <div className="left">
        <h1>Our Services</h1>
        <p>
          Good Draw Knew Bred Ham Busy His Hour. Ask Agreed Answer Rather Joy
          Nature Admire Wisdom. Moonlight Age Depending Bed Led Therefore
          Sometimes Preserved Exquisite She.
        </p>
        <img src="/images/car-6.png" alt="car-img" />
      </div>
      <div className="right">
        <div className="box">
          <div className="circle">
            <i className="fa-regular fa-user"/>
          </div>
          <h3>Personal Driver</h3>
          <p>Choose your favorite driver</p>
        </div>
        <div className="box">
          <div className="circle">
            <i className="fa-solid fa-dolly"/>
          </div>
          <h3>Pickup & Delivery</h3>
          <p>Track Your pickup&Delivery In Real Time</p>
        </div>
        <div className="box">
          <div className="circle">
            <i className="fa-solid fa-temperature-three-quarters"/>
          </div>
          <h3>Fuel Plans</h3>
          <p>See the nearest gas stations on your way</p>
        </div>
        <div className="box">
          <div className="circle">
            <i className="fa-solid fa-temperature-three-quarters"/>
          </div>
          <h3>Car navigation</h3>
          <p>select only the shortest & best route</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
