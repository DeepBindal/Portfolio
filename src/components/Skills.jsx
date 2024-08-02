import { skills } from "../constants";
import Card from "./Card";
import React from "react";

function Skills() {
  return (
    <div id="skills" className="text-white flex flex-col items-center mt-10">
      <h4 className="text-4xl mb-10">Skills</h4>
      <section className="grid grid-cols-2 sm:grid-cols-4 sm:gap-24 gap-10">
        {skills.map((item) => (
          <Card imgUrl={item.imgUrl} skill={item.label} />
        ))}
      </section>
    </div>
  );
}

export default Skills;
