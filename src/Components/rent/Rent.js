import React from 'react';
import Card from '../Card/Card';
import './Rent.css';
import data from '../../data';
const Rent = () => {
  const cars = data.rent;
  return (
    <div className="rent">
      <h1 className="heading">We have everything you need</h1>
      <div className="content">
        {cars.map((car, i) => {
          return <Card key={i} car={car} />;
        })}
      </div>
    </div>
  );
};

export default Rent;
