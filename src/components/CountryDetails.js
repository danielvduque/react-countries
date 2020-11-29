import React from 'react';
import Navbar from './Navbar';
import MapComponent from './Map';

class CountryDetails extends React.Component {
    state = {
        country: { borders: [], languages: [], currencies: [], latlng: [] }
    }

    componentDidMount() {
        this.getCountryInformation();
    }

    async getCountryInformation() {
        const code = this.props.match.params.countryId;
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
        const country = await response.json();
        this.setState({ country: country });
    }

    render() {

        return (
            <div>
                <Navbar />
                <div className="container"> 
                    <h1 className="mb-4">{this.state.country.name} - {this.state.country.alpha3Code}</h1>

                    <div className="row mb-4">
                        <div className="map">
                            <MapComponent lat={this.state.country.latlng[0]} lng={this.state.country.latlng[1]} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>Prefijo telefonico</td>
                                        <td>{this.state.country.callingCodes}</td>
                                    </tr>
                                    <tr>
                                        <td>Capital</td>
                                        <td>{this.state.country.capital}</td>
                                    </tr>
                                    <tr>
                                        <td>Región</td>
                                        <td>{this.state.country.subregion}</td>
                                    </tr>
                                    <tr>
                                        <td>Limites</td>
                                        <td>
                                            {this.state.country.borders.map((border) => {
                                                return (<h6>{border}</h6>)
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Lenguaje</td>
                                        <td>
                                            {this.state.country.languages.map((lang) => {
                                                return lang.nativeName
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Moneda</td>
                                        <td>
                                            {this.state.country.currencies.map((curr) => {
                                                return <p>{`${curr.code} - ${curr.symbol}`}</p>
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Población</td>
                                        <td>{this.state.country.population}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountryDetails;