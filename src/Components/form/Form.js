import React from 'react';
import './form.css'
const FormCom = () => {
  return (
    <form action="." method="post" className="rent-form">
      <div>
        <label htmlFor="location">Where To Pick Up</label>
        <input type="text" id="location" placeholder="ENTER YOUR ADDRESS" onChange={()=>{}}/>
      </div>
      <div>
        <label htmlFor="pickup-date">Pick Up Date</label>
        <input type="date" id="pickup-date" value="2023-11-07" onChange={()=>{}}/>
      </div>
      <div>
        <label htmlFor="return-date">Return Date</label>
        <input type="date" id="return-date" value="2024-11-07" onChange={()=>{}}/>
      </div>
    </form>
  );
};

export default FormCom;
