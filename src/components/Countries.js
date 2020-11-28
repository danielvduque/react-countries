import React from 'react';
import './styles/Countries.css';
import Navbar from './Navbar';
import Country from './Country';

class Countries extends React.Component {
    state = {
        filter: '',
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

    handleChange = (event) =>{
        this.setState({filter: event.target.value});
    }

    render() {
        const { filter, data } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = data.filter((country) => {
            return country.name.toLowerCase().includes(lowercasedFilter);
        })

        return (
            <React.Fragment>
                <Navbar />
                <div className="mt-2">
                    <div className="container">
                        <p className="form-group">
                            <input type="text" className="form-control" placeholder="Filtrar país por nombre" onChange={this.handleChange}/>
                        </p>
                        <div className="row">
                            {filteredData.map(country => {
                                return (
                                    <div className="col-lg-3 col-md-3 col-sm-6 mb-2" key={country.alpha2Code}>
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