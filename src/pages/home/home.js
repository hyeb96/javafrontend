import React from 'react'
import Slideshow from '../../components/slideshow/slideshow.js';
import './home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div id="hero">
            </div>
            <section id="caption">
                <p>A place to connect</p>
                <Link to="/restaurants">Find restaurants</Link>
                <Link to="/friends">Find friends</Link>
            </section>
            <div className='slideshow'>
                <section id="carousel">
                    <h1>Feeling hungry? here's some ideas</h1>
                    <Slideshow />
                </section>
            </div>
        </>
    )
}

export default Home;