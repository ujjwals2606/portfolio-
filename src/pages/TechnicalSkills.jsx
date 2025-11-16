// src/pages/TechnicalSkills.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/technicalskills.css";

const TechnicalSkills = () => {
  const techSkills = {
    "Programming Languages": ["C++", "Java", "Python"],

    "Frontend Development": [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Bootstrap",
      "Tailwind CSS",
    ],

    "Backend Development": ["Node.js", "Express.js"],

    "Database Technologies": ["MongoDB", "MySQL"],

    "Programming Fundamentals": [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms (DSA)",
    ],

    "AI / ML & Data Science": [
      "NumPy",
      "Pandas",
      "TensorFlow",
      "Matplotlib",
      "Scikit-learn",
    ],

    "Version Control & Tools": ["Git", "GitHub", "Postman", "Docker"],

    "Other Technologies": ["REST APIs", "JSON", "JWT Authentication"],
  };

  return (
    <section className="container py-5 technical-section">
      <h2 className="text-center neon-purple mb-5">Technical Skills</h2>

      <div className="row justify-content-center">
        {Object.entries(techSkills).map(([category, skills], index) => (
          <div
            className="col-11 col-md-5 col-lg-4 p-4 m-3 skill-box neon-border"
            key={index}
          >
            <h4 className="text-center mb-3 skill-category">{category}</h4>

            <ul className="list-unstyled text-center">
              {skills.map((skill, i) => (
                <li key={i} className="my-2 skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
