import React, { useState, useEffect } from 'react'
import './restaurant.css';
import List from '../../components/list/list.js';
import Map from '../../components/map/map.js';
import { getPlacesData } from '../../api'
// import PlaceDetails from '../../components/placeDetails/placeDetails';
import Search from '../../components/search/search'

const Restaurants = () => {
    const [places, setPlaces] = useState([]);
    const [childClicked, setChildClicked] = useState(null)
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({})

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude })
            // console.log(coordinates)
        })
    }, []);

    useEffect(() => {
        if (bounds) {
            setIsLoading(true);
            getPlacesData(bounds.sw, bounds.ne)
                .then((data) => {
                    console.log(data)
                    setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                    setIsLoading(false)
                })
        }
    }, [coordinates, bounds])

    return (
        <>
            <div className='anchor'>
            </div>
            {/* <Search setCoordinates={setCoordinates} /> */}
            <section id="restaurant-container">
                <div id="list" className="map-container">
                    <Search setCoordinates={setCoordinates} />
                    <List
                        places={places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                    />
                </div>
                <div id="map" className="map-container">
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClicked={setChildClicked}
                    />
                </div>
            </section >
        </>
    )
}

export default Restaurants;
