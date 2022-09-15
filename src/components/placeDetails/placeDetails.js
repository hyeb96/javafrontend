import React from 'react'
import './placeDetails.css';
import StarRatings from 'react-star-ratings';
import { HiLocationMarker, HiOutlinePhone } from "react-icons/hi";


// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

const PlaceDetails = ({ place, selected, refProp }) => {
    // console.log(place)
    if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    return (
        <>
            <div id="card">
                <div id="list-container">
                    <h1>{place.name}</h1>
                    <img src={place.photo ? place.photo.images.large.url : 'https://whetstonefire.org/wp-content/uploads/2020/06/image-not-available.jpg'} alt="restaurant" />
                    <div className='body'>
                        <div className='text'>
                            <p id="price">Price: {place.price_level}</p>
                            <p><StarRatings id="ratings"
                                rating={Number(place.rating)}
                                starRatedColor="orange"
                                numberOfStars={5}
                                name='rating'
                                starDimension="20px"
                                starSpacing="1px"
                            /></p>
                            {/* <span>{place.num_reviews}</span> */}
                        </div>
                    </div>
                    <div className="list-group">
                        {/* {place?.cuisine?.map(({ name }) => (
                            <p id="cuisine">{name}</p>
                        ))} */}
                        <p><HiLocationMarker className='icons' />{place.address}</p>
                        <p><HiOutlinePhone className='icons' />{place.phone}</p>
                        <button>Check in</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaceDetails