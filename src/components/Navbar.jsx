import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top px-3">
      <a className="navbar-brand fw-bold text-light" href="#">
        My Portfolio
      </a>

      <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-2">
          <Link to="introduction" smooth={true} duration={500} className="nav-link">
            Introduction
          </Link>
        </li>

        <li className="nav-item mx-2">
          <Link to="projects" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
        </li>

        <li className="nav-item mx-2">
          <Link to="technicalskills" smooth={true} duration={500} className="nav-link">
            Technical Skills
          </Link>
        </li>

        <li className="nav-item mx-2">
          <Link to="softskills" smooth={true} duration={500} className="nav-link">
            Soft Skills
          </Link>
        </li>

        <li className="nav-item mx-2">
          <Link to="training" smooth={true} duration={500} className="nav-link">
            Training & Certifications
          </Link>
        </li>

        <li className="nav-item mx-2">
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
