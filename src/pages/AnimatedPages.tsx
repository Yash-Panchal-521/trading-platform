import React from "react";
import { motion } from "framer-motion";

const animation = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const AnimatedPages = ({ children }) => {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPages;
