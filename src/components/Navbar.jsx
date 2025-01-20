import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="flex items-center z-10 montserrat-font justify-between w-full py-5 px-6 mb-20">
      <div className="logo w-10 h-10">
        <img src="/logo.png" alt="" />
      </div>

      <div className="list">
        <ul className="sm:flex hidden text-white items-center">
          <li className="mx-4 hover:text-blue-400 cursor-pointer">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="mx-4 hover:text-blue-400 cursor-pointer">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="mx-4 hover:text-blue-400 cursor-pointer">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="mx-4 hover:text-blue-400 cursor-pointer">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>

      <div className="cursor-pointer">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="px-4 py-3 cursor-pointer rounded-full bg-gradient-to-r from-cyan-500 to-blue-500  text-white shadow-lg"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
