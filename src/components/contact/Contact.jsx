import React from 'react';
import './contact.css';

export default function Contact() {

    function ContactForm() {
        let form1 = document.getElementById("contactForm"); 
        let writeMessage = document.getElementById("contact-write-message");
      
        if (form1.style.display === "none" || form1.style.display === "") {
          form1.style.display = "flex";
          writeMessage.textContent = "Submit";
        } else {
          form1.style.display = "none";
          writeMessage.textContent = "Write Message";
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
                <form id="contactForm"> 
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
        
                <span onClick={ContactForm} className="write-messege-button-style">
                    <a href="#contact" id="contact-write-message">Write Message</a>
                </span>
            </div>
            
            <p>Newton</p>
        </div>
    );
}
