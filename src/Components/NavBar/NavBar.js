import React from 'react';
import './NavBar.css';
function NavBar() {
  return (
    <>
      <header>
        <div className="h1-container">
          <h1>Best Car Rental</h1>
        </div>
        <span></span>
        <form action="." method="post">
          <label htmlFor="search">
            <i className="fa-solid fa-magnifying-glass"/>
          </label>
          <input type="search" id="search" placeholder="Search cars..." />
        </form>
        <i className="fa-solid fa-bars bars"/>
        <ul>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Vehicle</a>
          </li>
          <li>
            <a href="#">Our Benefits</a>
          </li>
          <li>
            <a href="#">Station</a>
          </li>
        </ul>
        <button>Sign In</button>
      </header>
    </>
  );
}
export default NavBar;
