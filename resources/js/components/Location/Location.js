import React, { Component } from "react";
import './Location.css'
import { Map, GoogleApiWrapper } from 'google-maps-react'

class Location extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '380px',
        };
        return (
            <>
                <div className="map" id="Location">
                    <Map
                        google={this.props.google}
                        style={mapStyles}
                        zoom={10}
                        initialCenter={
                            {
                                lat: 32.022133,
                                lng: 34.862111
                            }
                        }
                    />
                </div>
            </>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyC3mZg6P7r2AzeOdm4XiQTmHora9Zs3fGQ"
})(Location)