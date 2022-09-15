import React from 'react'
import './footer.css';
import { BsInstagram, BsTwitter, BsYoutube, BsFacebook, BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer>
                <div id="footer-container">
                    <div id="footer-info">
                        <p>Let's chat!</p>
                        <p>contact@goodtaste.com</p>
                        <p><BsFillTelephoneFill className='social-icons' />(123)-456-7890</p>
                    </div>
                    <div id="footer-logo">
                        <img src="images/logo.png" alt="logo"></img>
                    </div>
                    <div id="socials">
                        <p><BsInstagram className='social-icons' />@goodtaste</p>
                        <p><BsTwitter className='social-icons' />@goodtaste</p>
                        <p><BsYoutube className='social-icons' />Good Taste</p>
                        <p><BsFacebook className='social-icons' />Good Taste</p>
                    </div>
                </div>
                <p>&copy; Hdit Eban 2022</p>
            </footer>
        </>
    )
}

export default Footer;