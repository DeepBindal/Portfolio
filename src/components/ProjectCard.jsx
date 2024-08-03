import React from "react";
import {
  Card,
  CardBody,
  Image,
} from "@nextui-org/react";
import { projects } from "../constants";

export default function ProjectCard() {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-100/5 mx-auto mb-10 py-4 w-full sm:w-5/6 relative duration-500 hover:[transform:rotate3d(20_,-10,_1,_30deg)]"
        >
          <Card className="bg-transparent border-none shadow-none">
            <CardBody className="flex flex-col sm:flex-row items-center justify-evenly py-2">
              <div className="w-full sm:w-1/2">
                <Image
                  alt="Card background"
                  className="object-cover shadow-sm rounded-xl"
                  src={project.image}
                />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-4 sm:mt-0">
                <h4 className="text-3xl sm:text-5xl my-4 text-gray-800 sedan-sc-regular">
                  {project.title}
                </h4>
                <p className="text-gray-600 montserrat-font text-start px-4">
                  {project.description}
                </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button
                    type="button"
                    className="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black my-5 text-xl font-semibold group"
                  >
                    <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#000000"
                          d="M64 480h640a32 32 0 0 1 0 64H64a32 32 0 0 1 0-64z"
                        ></path>
                        <path
                          fill="#000000"
                          d="M454.752 237.248a32 32 0 0 1 45.312 0l288 288a32 32 0 0 1 0 45.312l-288 288a32 32 0 1 1-45.312-45.312L730.752 512 454.752 282.56a32 32 0 0 1 0-45.312z"
                        ></path>
                      </svg>
                    </div>
                    <p className="translate-x-2 ml-1">Learn More</p>
                  </button>
                </a>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </>
  );
}
