import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from "react";


export class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker 
                    title="bela"
                    onClick={this.onMarkerClick}
                    name={'Current location'}>

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        {/* <h1>{this.state.selectedPlace.name}</h1> */}
                    </div>
                </InfoWindow>
                </Marker>
            </Map>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)