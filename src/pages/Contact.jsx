import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/xqawyaaa", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: new FormData(e.target),
    });

    if (response.ok) {
      setStatus("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong. Try again!");
    }
  };

  return (
    <div className="container py-5">
      <motion.h2
        className="text-center fw-bold neon-text mb-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="row justify-content-center">
        <div className="col-md-6">

          <motion.form
            className="p-4 shadow-lg rounded-4 contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "rgba(20, 20, 40, 0.7)",
              border: "1px solid rgba(180, 0, 255, 0.4)"
            }}
          >
            {/* Name */}
            <motion.div
              className="mb-3"
              whileHover={{ scale: 1.02 }}
            >
              <label className="form-label text-light">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div
              className="mb-3"
              whileHover={{ scale: 1.02 }}
            >
              <label className="form-label text-light">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            {/* Message */}
            <motion.div
              className="mb-3"
              whileHover={{ scale: 1.02 }}
            >
              <label className="form-label text-light">Message</label>
              <textarea
                className="form-control"
                name="message"
                rows="4"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="btn w-100 fw-bold text-light"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #b300ff" }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "#b300ff",
                border: "none",
                borderRadius: "10px"
              }}
            >
              Send Message
            </motion.button>

            {/* Status Text */}
            <p className="text-center mt-3 text-light">{status}</p>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
