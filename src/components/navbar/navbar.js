import React from 'react'
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <div id='logo'>
                    <img id='logo-image' src='images/logo2.png' alt='logo'></img>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/restaurants">Restaurants</Link>
                    </li>
                    <li>
                        <Link to="/friends">Friends</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;