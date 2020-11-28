import React from 'react';
import { Link } from 'react-router-dom';

class Country extends React.Component {
    render() {
        const { country } = this.props;

        return (
            <Link to={`/country/${country.alpha2Code}`}>
                <div className="card content">
                    <span className=""> 
                        <img className="card-img-top country-img" src={country.flag} alt="Flag" />
                        <h6 className="text-block">{country.name} - {country.alpha2Code}</h6>
                    </span>
                </div>
            </Link>
        )
    }
}

export default Country;