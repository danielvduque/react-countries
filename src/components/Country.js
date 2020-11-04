import React from 'react';
import { Link } from 'react-router-dom';

class Country extends React.Component {
    render() {
        const { country } = this.props;

        return (
            <Link to={`/country/${country.alpha2Code}`}>
                <div className="card">
                    <img className="card-img-top country-img" src={country.flag} alt="Flag" />
                    <div className="card-body country-body">
                        <h6 className="card-title">{country.name} - {country.alpha2Code}</h6>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Country;