import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Hero() {
  const containerRef = useRef(null);
  const containerInView = useInView(containerRef);

  return (
    <motion.div
      className="mx-10 px-10 sm:mb-40 mb-10 sedan-sc-regular text-4xl lg:text-8xl text-white sm:mt-10 "
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <span className="text-2xl lg:text-3xl text-gray-700">I'm a</span>
      <motion.p
        className="text-5xl lg:text-8xl"
        initial={{ opacity: 0, y: 50 }}
        animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Full Stack
      </motion.p>
      <motion.p
        className="text-5xl lg:text-8xl"
        initial={{ opacity: 0, y: 50 }}
        animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Developer
      </motion.p>
    </motion.div>
  );
}

export default Hero;
