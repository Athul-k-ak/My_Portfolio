import React, { useState } from 'react';
import CollapsibleNavbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import HireMe from './components/HireMe';
import './index.css';
import CVModal from './components/CVModal';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="app-container">
            <CollapsibleNavbar />
            <div className="main-content">
                <div className="hero-section">
                    <div className="hero-text">
                        <h1 className="hero-heading">
                            I am <span className="highlighted-name">Athul</span>
                        </h1>
                        <p className="hero-subheading">Web Developer | Problem Solver | Tech Enthusiast</p>
                        <div className="buttons">
                            <button className="cv-btn" onClick={openModal}>
                                <i className="fa fa-download"></i> Download CV
                            </button>
                            <button className="hire-btn" onClick={() => alert('Contact me for hiring!')}>
                                <i className="fa fa-briefcase"></i> Hire Me
                            </button>
                        </div>
                    </div>
                    {/* <div className="hero-image">
                        <img src="./src/assets/hero.jpg" alt="Hero Image" />
                    </div> */}
                </div>
                <About />
                <Skills />
                <Projects />
                <Contact />
                <HireMe />
            </div>
            {isModalOpen && <CVModal onClose={closeModal} />}
        </div>
    );
};

export default App;
