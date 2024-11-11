import React, { useEffect, useRef, useState } from 'react';
import './SectionAnimations.css'; // Include the animations
import './About.css';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
    }, []);

    return (
        <section className={`about-section ${isVisible ? 'visible' : ''}`} ref={sectionRef} id="about">
            <h2 className="about-heading">About Me</h2>
            <div className="about-content">
                <div className="about-image">
                    <img src="./assets/Athul1.jpg" alt="Athul" />
                </div>
                <div className="description">
                    <p>
                        Hi! I’m Athul, a passionate web developer with a solid foundation in mathematics and a knack for creating
                        visually appealing, functional, and responsive web applications. With expertise in HTML, CSS, JavaScript,
                        and frameworks like React and Django, I bring projects to life with a focus on user experience, seamless
                        performance, and innovative design.
                    </p>
                    <p>
                        I thrive on tackling complex problems and crafting elegant solutions. My journey in tech is driven by the
                        belief that a well-designed website can make a difference. I’m always eager to learn new technologies and
                        improve my skills.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
