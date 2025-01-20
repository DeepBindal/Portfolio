import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundLines } from "./ui/background-lines";

function Hero() {
  const controls = useAnimation();

  // Typewriter words
  const [text] = useTypewriter({
    words: ["Web Developer", "React Developer", "Node Developer", "Java Developer"],
    loop: {},
  });

  // Run the animation on component mount
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <div id="home" className="mx-10 px-10 sedan-sc-regular text-4xl lg:text-8xl text-white sm:mt-10">
      <BackgroundLines >
      <motion.span
        className="text-2xl lg:text-5xl text-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        I'm a
      </motion.span>

      <motion.p
        className="text-5xl text-white lg:text-8xl"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <span>{text}</span>
        <span>
          <Cursor />
        </span>
      </motion.p>
      </BackgroundLines>
    </div>
  );
}

export default Hero;
