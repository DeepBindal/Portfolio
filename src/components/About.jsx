import { Button } from "@nextui-org/react";
import React from "react";

function About() {
  return (
    <div
      id="about"
      className="mx-4 sm:mx-10 px-4 sm:px-40 my-10 flex flex-col sm:flex-row justify-between items-center"
    >
      <div className="img mb-8 sm:mb-0">
        <img
          src="/pp.png"
          height={390}
          width={290}
          alt="profile pic"
          className="rounded-xl"
        />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center">
        <h4 className="text-3xl text-white my-4">About</h4>
        <p className="text-gray-400 text-center mb-4">
          Hey there! I'm Deep Bindal, a passionate full-stack developer with a
          knack for turning ideas into reality through code. With a strong
          foundation in both front-end and back-end technologies, I thrive in
          crafting seamless, user-centric web experiences.
        </p>
        <p className="text-gray-400 text-center mb-4">
          My journey in software development began with a curiosity-driven
          exploration of web technologies, and since then, I've been on a
          relentless quest for growth and innovation. From building responsive
          and intuitive user interfaces using modern front-end frameworks like
          React.js, to architecting robust and scalable server-side solutions
          with technologies like Node.js and Express.js.
        </p>
        <div className="flex justify-center items-center w-full sm:w-3/5">
        <a href="/skills.svg" download>
          <button class="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]">
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5 animate-bounce"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              ></path>
            </svg>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
