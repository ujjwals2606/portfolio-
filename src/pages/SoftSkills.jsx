// src/pages/SoftSkills.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/softskills.css";

const SoftSkills = () => {
  const skills = [
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Critical Thinking",
    "Adaptability",
    "Creativity",
    "Leadership",
  ];

  return (
    <section className="container py-5 softskills-section">
      <h2 className="text-center neon-purple mb-4">Soft Skills</h2>

      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="col-10 col-md-4 col-lg-3 m-2 p-3 skill-card neon-border"
          >
            <h5 className="text-center">{skill}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
