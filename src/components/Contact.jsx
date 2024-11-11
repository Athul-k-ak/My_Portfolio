// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent by ${formData.name}!`);
        // Add logic to handle the form submission (e.g., send the data to an API)
    };

    return (
        <section className="contact-section" id="contact">
            <h2 className="contact-heading">Contact Me</h2>
            <p className="contact-description">Feel free to get in touch with me by filling out the form below:</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        required 
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
