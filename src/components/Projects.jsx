import React from 'react';
import './Projects.css';

const Projects = () => {
    const projectList = [
        {
            title: "Travel Website",
            description: "A Kerala travel website showcases the scenic beauty, cultural richness, and unique experiences of Kerala, offering travelers essential guides, itineraries, and booking options to explore God’s Own Country.",
            image: "./assets/Kerala.jpg",
            link: "https://athul-k-ak.github.io/Travel/",
            code: "https://github.com/Athul-k-ak/Travel"
        },
        {
            title: "Weather Dashboard",
            description: "A weather dashboard app provides real-time weather updates with detailed information on temperature, humidity, wind speed, displayed in an easy-to-read, card-based layout for quick insights.",
            image: "./assets/weather.jpg",
            link: "https://athul-k-ak.github.io/weather/",
            code: "https://github.com/Athul-k-ak/weather"
        },
        {
            title: "Budjet Tracker",
            description: "A budget tracker app that helps users efficiently manage and monitor income, expenses, and financial goals through a streamlined, tabular display and intuitive features.",
            image: "./assets/budjet.jpeg",
            link: "https://athul-k-ak.github.io/Budget_tracker/",
            code: "https://github.com/Athul-k-ak/Budget_tracker"
        }
    ];

    return (
        <section className="projects-section" id="projects">
            <h2 className="projects-heading">Projects</h2>
            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-links">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
                                <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn">View Code</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
