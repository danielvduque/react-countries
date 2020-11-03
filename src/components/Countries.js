import React from 'react';
import './styles/Countries.css';
import Navbar from './Navbar';
import Country from './Country';

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
                                        <Country country={country} />
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