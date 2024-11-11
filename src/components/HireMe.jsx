// src/components/HireMe.jsx
import React from 'react';

const HireMe = () => {
    return (
        <section className="hire-me-section" id="hire">
            <h2 className="hire-me-heading">Hire Me</h2>
            <p className="hire-me-description">
                I am open to exciting job opportunities in web development. With expertise in modern frameworks and design, I’m ready to bring your projects to life. Let’s work together to create something amazing!
            </p>
            <div className="hire-buttons">
                <button className="email-btn" onClick={() => window.location = 'mailto:athulk8888@gmail.com'}>
                    Contact via Email
                </button>
                <button className="linkedIn-btn" onClick={() => window.open('https://www.linkedin.com/in/athul-k-595a33276/', '_blank')}>
                    Connect on LinkedIn
                </button>
            </div>
        </section>
    );
};

export default HireMe;
