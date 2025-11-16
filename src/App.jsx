// App.jsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Introduction from "./pages/Introduction";
import Projects from "./pages/Projects";
import TechnicalSkills from "./pages/TechnicalSkills";
import SoftSkills from "./pages/SoftSkills";
import TrainingCertifications from "./pages/TrainingCertifications";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <div id="introduction">
        <Introduction />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="technicalskills">
        <TechnicalSkills />
      </div>

      <div id="softskills">
        <SoftSkills />
      </div>

      <div id="training">
        <TrainingCertifications />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
