import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <h1>lab-wiki-countries</h1>
          <NavLink to="/">Countries List</NavLink>
          <NavLink to="/country-details">Country Details</NavLink>
        </ul>
      </div>
    );
  }
}

export default Navbar;
