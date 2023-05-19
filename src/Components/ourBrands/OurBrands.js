import React from 'react';
import './ourBrands.css';
import data from '../../data';
const OurBrands = () => { 
  const brands = data.brands;
  
  return (
    <div className="our-brands">
      <h1 className="heading">Our luxury brands</h1>
      <ul>
        {brands.map((brand, i) => {
          return (
            <li key={i}>
              <img src={brand.image} alt="car-img" /> {brand.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurBrands;
