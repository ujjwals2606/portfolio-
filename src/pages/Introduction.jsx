import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export default function Introduction() {
  return (
    <div className="container py-5 mt-5"> {/* Added mt-5 */}

      <div className="row align-items-center">

        {/* LEFT SIDE — PROFILE IMAGE */}
        <div className="col-md-5 text-center">
          <motion.img
            src={profileImg}
            alt="Profile"
            className="rounded-circle shadow-lg mb-4"
            width="220"
            height="220"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              border: "4px solid #b300ff",
            }}
          />
        </div>

        {/* RIGHT SIDE — ALL TEXT CONTENT */}
        <div className="col-md-7 text-start text-light mt-4"> {/* Added mt-4 */}

          {/* Name */}
          <motion.h1
            className="fw-bold text-uppercase neon-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ujjwal Singh
          </motion.h1>

          {/* Subtitle */}
          <motion.h4
            className="mt-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MERN Stack Developer | Passionate About Web Development & AI Enthusiast
          </motion.h4>

          {/* Description */}
          <motion.p
            className="mt-3"
            style={{ maxWidth: "95%", opacity: 0.9 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I am a dedicated web developer focused on creating clean,
            responsive, and interactive user experiences. I specialize in the
            MERN stack and enjoy building real-world projects that solve
            meaningful problems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-4 d-flex gap-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="btn fw-bold text-light"
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px #b300ff" }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "#b300ff",
                border: "none",
                borderRadius: "10px",
              }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="/src/assets/Resume.pdf"
              className="btn fw-bold"
              download
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px #b300ff" }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "transparent",
                border: "2px solid #b300ff",
                color: "#b300ff",
                borderRadius: "10px",
              }}
            >
              Download Resume
            </motion.a>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
