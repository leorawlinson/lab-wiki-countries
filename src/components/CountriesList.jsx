import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  render() {
    return (
      <div>
        {this.props.allCountries.map((eachCountry) => {
          return (
            <Link to={`/country/${eachCountry.cca3}`}>
              {eachCountry.name.common}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
