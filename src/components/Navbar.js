import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return (
            <div className="Navbar mb-2">
                <Link to="/"><h2>Listado de países</h2></Link>
            </div>
        )
    }
}

export default Navbar;