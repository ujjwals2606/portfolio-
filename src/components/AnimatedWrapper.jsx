// src/components/AnimatedWrapper.jsx
import React from "react";
import { motion } from "framer-motion";

const AnimatedWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="animated-wrapper"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
