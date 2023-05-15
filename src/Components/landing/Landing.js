import React from 'react';
import './Landing.css';
const Landing = () => {
  return (
    <div className="landing">
      <div className="info">
        <h1>FAST AND EASY WAY TO RENT A BRANDED CARS</h1>
        <p>
          Good Draw Knew Bred Ham Busy His Hour. Ask Agreed Answer Rather Joy
          Nature Admire Wisdom. Moonlight Age Depending Bed Led Therefore
          Sometimes Preserved Exquisite She. An Fail Up So Shot Leaf Wise
        </p>
        <div>
          <i className="fa-solid fa-car-side"/>
          <p>Car</p>
        </div>
        <div>
          <i className="fa-solid fa-truck"/>
          <p>Cargo</p>
        </div>
        <div>
          <i className="fa-solid fa-van-shuttle"/>
          <p>Van</p>
        </div>
      </div>
      <div className="image">
        <img src="/images/car-1.png" alt="car-img" />
      </div>
    </div>
  );
};

export default Landing;
