import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { FaSearchLocation } from "react-icons/fa";
import './search.css';


const Search = ({ setCoordinates }) => {
    const [autoComplete, setAutoComplete] = useState(null);
    const onLoad = (autoC) => setAutoComplete(autoC);
    const onPlaceChanged = () => {
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng });
    }

    return (
        <>
            <div>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div id="search-bar">
                        <FaSearchLocation id="search-icon" />
                        <input type="text" placeholder='search...'></input>
                    </div>
                </Autocomplete>
            </div>
        </>
    )
}

export default Search;