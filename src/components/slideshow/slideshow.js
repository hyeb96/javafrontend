import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'

const Slideshow = () => {
    return (
        <div className='carousel'>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="images/vietnamese.png"
                        alt="Asian"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="images/food6.png"
                        alt="Burger"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="images/kbbq.png"
                        alt="Korean BBQ"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="images/vegan.png"
                        alt="Vegan"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="images/food5.jpeg"
                        alt="Chinese"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slideshow;