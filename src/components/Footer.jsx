// src/components/Footer.jsx
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer neon-border-top py-3 mt-5">
      <div className="container text-center">

        <p className="footer-text mb-1">
          © {year} Ujjwal Singh — All Rights Reserved
        </p>

        <p className="footer-links">
          <a href="https://github.com/ujjwals2606" target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://www.linkedin.com/in/ujjwal-singh-5495a1265/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="mailto:ujjwalsingh7412@gmail.com">
            Email
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
