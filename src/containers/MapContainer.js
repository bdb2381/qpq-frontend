import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from "react";


export class MapContainer extends React.Component {
    render() {
        return (
            <div className="map-container" >
                <Map google={this.props.google} zoom={14} className="map-container">

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
            </div >
        );
    }
}


export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)