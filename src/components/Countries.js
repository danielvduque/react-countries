import React from 'react';
import './styles/Countries.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

class Countries extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.getCountries();
    }

    async getCountries() {
        const response = await fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag');
        const countries = await response.json();
        console.log(countries);

        this.setState({
            data: countries,
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />

                <div className="mt-2">
                    <div className="container">
                        <div className="row">
                            {this.state.data.map(country => {
                                return (
                                    <div className="col-3 mb-2" key={country.alpha2Code}>
                                        <Link to={`/customers/${country.alpha2Code}`}>
                                            <div className="card">
                                                <img className="card-img-top country-img" src={country.flag} alt="Flag" />
                                                <div className="card-body country-body">
                                                    <h6 className="card-title">{country.name} - {country.alpha2Code}</h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                </div>
                </div>
            </React.Fragment >
        )
    }
}

export default Countries;