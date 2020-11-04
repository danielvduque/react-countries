import './App.css';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Countries} />
        <Route exact path="/country/:countryId" component={CountryDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
