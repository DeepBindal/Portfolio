import { skills } from "../constants";
import Card from "./Card";
import React from "react";

function Skills() {
  return (
    <div id="skills" className="text-white flex flex-col items-center mt-10 mb-10">
      <h4 className="text-4xl mb-10">Skills</h4>
      <section className="grid  grid-cols-2 sm:grid-cols-4 sm:gap-20 gap-4">
        {skills.map((item) => (
          <Card key={item.label} imgUrl={item.imgUrl} skill={item.label} />
        ))}
      </section>
    </div>
  );
}

export default Skills;
