import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.css';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const [showForm, setShowForm] = useState(false);

    function toggleFormVisibility() {
        setShowForm(prevState => !prevState);
    }

    return (
        <div id="contact" className="contact-style">
            <div>
                <h1>Contact</h1>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, error,
                corrupti sapiente voluptatem provident doloribus rerum voluptatibus, ad
                quia quidem unde et id tempora aspernatur! Totam commodi obcaecati atque
                suscipit.
            </p>

            <div style={{ marginTop: '80px', marginBottom: '70px' }}>
                {showForm && (
                    <form id='contactForm'> 
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" />
                        <br />
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" />
                        <br />
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input type="tel" id="contactNumber" name="contactNumber" />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                        <br />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" cols="50" />
                        <br />
                    </form>
                )}

                <span onClick={toggleFormVisibility} className="write-messege-button-style">
                    {showForm ? "Submit" :   <a href="#contact" id="contact-write-message">Write Message</a> }
                    
                </span>
            </div>
            <div  className="online-platform">
            <FontAwesomeIcon icon={faGithub} /> <tap/>
            <FontAwesomeIcon icon={faLinkedin} />
             </div>
            <p>Newton</p>
        </div>
    );
}
