import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    function toggleFormVisibility() {
        if (showForm) {
            handleSubmit();
        } else {
            setShowForm(true);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    async function handleSubmit() {
        try {
            const response = await axios.post('http://localhost:3000/contact', formData);
            console.log('Form submitted successfully:', response.data);
            setShowForm(false);
            setFormData({
                firstName: '',
                lastName: '',
                contactNumber: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
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
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                        <br />
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                        <br />
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                        <br />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" cols="50" value={formData.message} onChange={handleChange} />
                        <br />
                    </form>
                )}

                <span onClick={toggleFormVisibility} className="write-messege-button-style">
                    {showForm ? "Submit" : <a href="#contact" id="contact-write-message">Write Message</a>}
                </span>
            </div>
            <div className="online-platform">
                <FontAwesomeIcon icon={faGithub} /> <tap />
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <p>Newton</p>
        </div>
    );
}
