// src/pages/TrainingCertifications.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/trainingcertifications.css";

const TrainingCertifications = () => {
  const certifications = [
    {
      title: "DBMS Certification",
      platform: "Udemy",
      year: "2025",
      description:
        "Successfully completed a course covering SQL, normalization, transactions, and relational database concepts.",
    },
    {
      title: "Frontend Web Development",
      platform: "YouTube / Self Learning",
      year: "2024",
      description:
        "Gained hands-on experience with HTML, CSS, JavaScript, and responsive UI development.",
    },
    {
      title: "MERN Stack Basics",
      platform: "Self Learning",
      year: "2024",
      description:
        "Learned the fundamentals of MongoDB, Express.js, React.js, and Node.js for full-stack app development.",
    },
    {
      title: "Fundamental Python & AI",
      platform: "YBI Foundation",
      year: "2024",
      description:
        "Completed training in Python basics, data handling, visualization, and introductory AI concepts.",
    },
    {
      title: "160 Days of DSA",
      platform: "GeeksforGeeks",
      year: "2024",
      description:
        "Practiced data structures and algorithms including arrays, strings, recursion, DP, and advanced problem-solving.",
    },
  ];

  return (
    <section className="container py-5 training-section">
      <h2 className="text-center neon-purple mb-4">Training & Certifications</h2>

      <div className="row justify-content-center">
        {certifications.map((item, index) => (
          <div
            key={index}
            className="col-11 col-md-5 col-lg-4 m-3 p-4 training-card neon-border"
          >
            <h4 className="text-center">{item.title}</h4>
            <p className="text-center text-secondary mb-1">
              <strong>Platform:</strong> {item.platform}
            </p>
            <p className="text-center text-secondary mb-3">
              <strong>Year:</strong> {item.year}
            </p>
            <p className="text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainingCertifications;
