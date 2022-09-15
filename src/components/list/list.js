import React, { useState, useEffect, createRef } from 'react'
import './list.css';
import PlaceDetails from '../placeDetails/placeDetails.js'
// import Search from '../search.js'



const List = ({ places, childClicked, isLoading }) => {
    console.log({ childClicked })
    const [elRefs, setElRefs] = useState([])

    useEffect(() => {
        setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places])

    return (
        <>
            <div>
                {isLoading ? (
                    <div id="loading">
                        Loading
                    </div>
                ) : (
                    <>
                        {places?.map((place, i) => (
                            <div ref={elRefs[i]} item key={i}>
                                <PlaceDetails
                                    place={place}
                                    selected={Number(childClicked) === i}
                                    refProp={elRefs[i]}
                                />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    )
}

export default List;