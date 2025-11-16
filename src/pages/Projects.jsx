import { motion } from "framer-motion";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="container py-5" id="projects">
      <motion.h2
        className="text-center fw-bold neon-text mb-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="row g-4">
        {projects.map((proj, i) => (
          <div className="col-md-4" key={i}>
            <motion.div
              className="p-4 shadow-lg rounded-4 project-card h-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px #b300ff",
              }}
              style={{
                border: "1px solid rgba(179, 0, 255, 0.5)",
                background: "rgba(20, 20, 40, 0.7)",
              }}
            >
              <h4 className="fw-bold neon-text">{proj.title}</h4>
              <p className="text-light mt-2">{proj.description}</p>

              {proj.tech && (
                <p className="mt-3">
                  <strong className="text-light">Tech Used:</strong>{" "}
                  <span className="text-secondary">{proj.tech}</span>
                </p>
              )}

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-auto fw-bold text-light"
                style={{
                  background: "#b300ff",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                Visit Project
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
