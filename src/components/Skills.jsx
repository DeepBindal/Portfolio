import { skills } from "../constants";
import Card from "./Card";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <div id="skills" className="text-white overflow-hidden flex flex-col items-center mt-10">
      <motion.h4
        className="text-4xl mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h4>
      <section
        ref={sectionRef}
        className="grid grid-cols-2 sm:grid-cols-4"
      >
        {skills.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <Card imgUrl={item.imgUrl} skill={item.label} />
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default Skills;
