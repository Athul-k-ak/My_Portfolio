import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'HTML', level: '90%', img: './assets/html1.png' },
        { name: 'CSS', level: '85%', img: './assets/css.png' },
        { name: 'JavaScript', level: '80%', img: './assets/js1.png' },
        { name: 'React', level: '75%', img: './assets/react.png' },
        { name: 'Django', level: '70%', img: './assets/django.png' },
        { name: 'Python', level: '85%', img: './assets/python.png' },
        { name: 'SQL', level: '80%', img: './assets/sql.png' },
        { name: 'Golang', level: '65%', img: './assets/golang.png' },
    ];

    return (
        <section className="skills-section" id="skills">
            <h2 className="skills-heading">Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-icon-container">
                            <img src={skill.img} alt={`${skill.name} icon`} className="skill-icon" />
                        </div>
                        <div className="skill-info">
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-bar">
                                <div
                                    className="skill-level"
                                    style={{ width: skill.level }}
                                ></div>
                            </div>
                            <span className="skill-percentage">{skill.level}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
