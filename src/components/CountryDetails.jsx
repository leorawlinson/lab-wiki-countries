import React, { Component } from 'react';
import countries from '../countries.json';

class CountryDetails extends Component {
  state = {
    countries: countries,
    country: null,
  };

  getCountry = (cca3) => {
    const country = this.state.countries.filter((eachCountry) => {
      return eachCountry.cca3 === cca3;
    })[0];
    this.setState({ country: country });
  };

  componentDidMount() {
    this.getCountry(this.props.match.params.cca3);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.cca3 !== prevProps.match.params.cca3) {
      this.getCountry(this.props.match.params.cca3);
    }
  }

  render() {
    const { country } = this.state;
    return (
      <div>
        {!country && <h1>LOADING</h1>}
        {country && (
          <h2 className="p-5">
            {this.props.match.params.cca3} | {country.name.common}
          </h2>
        )}
      </div>
    );
  }
}

export default CountryDetails;
