import React from 'react'
import './map.css';
import { HiLocationMarker } from "react-icons/hi";
import GoogleMapReact from 'google-map-react';

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {


    // const coordinates = { lat: 0, lng: 0 };

    return (
        <>
            <div id="map-container">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={''}
                    onChange={(e) => {
                        console.log(e);
                        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                    }}
                    onChildClick={(child) => setChildClicked(child)}
                >
                    {places?.map((place, i) => {
                        return (
                            <div
                                lat={Number(place.latitude)}
                                lng={Number(place.longitude)}
                                key={i}
                            >
                                <HiLocationMarker id="location-marker" />
                            </div>
                        )
                    })}
                </GoogleMapReact>
            </div>
        </>
    )
}

export default Map;