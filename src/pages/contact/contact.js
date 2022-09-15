import React, { useRef, useState } from 'react'
import './contact.css';
//import emailjs library 
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [submit, setSubmit] = useState(false);

    //send email through emailjs
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSubmit(true);
                // console.log(setSubmit);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <>
            <section id="contact">
                <div>

                </div>
                <div className="container">
                    <form ref={form} onSubmit={sendEmail} autoComplete="off" >
                        <h1>Contact us</h1>
                        <label>Name</label>
                        <input type="text" name="name" required />
                        <label>Subject</label>
                        <input type="text" name="subject" required />
                        <label>Email</label>
                        <input type="email" name="email" required />
                        <label>Message</label>
                        <textarea name="message" rows="6" />
                        <input type="submit" value="Send" />

                        {submit ? (
                            <div className="submit-message">Message sent!</div>
                        ) : (
                            <div className='submit-message'></div>
                        )}
                    </form>
                    {/* <div id="info">
                        <img id="contact-logo" src="images/logo.png" />
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Contact;