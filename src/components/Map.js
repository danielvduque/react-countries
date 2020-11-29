import React from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapComponent extends React.Component {
    render() {
        const lat = this.props.lat;
        const lng = this.props.lng;

        return (
            <Map
                initialCenter={{ lat: lat, lng: lng }}
                zoom={6}
                google={this.props.google}
            >
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.API_KEY
})(MapComponent);