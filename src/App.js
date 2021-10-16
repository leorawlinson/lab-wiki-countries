import { Route, Switch } from 'react-router';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from './countries.json';
import './App.css';

function App() {
  let countriesCopy = [...countries];

  return (
    <div className="App">
      <Navbar />
      <CountriesList allCountries={countriesCopy} />
      <Switch>
        <Route path="/country/:cca3" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
