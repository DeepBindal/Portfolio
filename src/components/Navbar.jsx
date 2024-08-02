import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="flex items-center montserrat-font justify-between w-full py-5 px-6 mb-10">
      <div className="logo w-10 h-10">
        <img src="/logo.png" alt="" />
      </div>

      <div className="list">
        <ul className="sm:flex hidden text-white items-center">
          <li className="mx-4 hover:text-blue-400 cursor-pointer">Home</li>
          <li className="mx-4 hover:text-blue-400 cursor-pointer"><a href="#about">About</a></li>
          <li className="mx-4 hover:text-blue-400 cursor-pointer"><a href="#skills">Skills</a></li>
          <li className="mx-4 hover:text-blue-400 cursor-pointer"><a href="#portfolio">Portfolio</a></li>
        </ul>
      </div>

      <div className="">
      <Link to="#contact" smooth={true} duration={500}>
        <Button
          radius="full"
          className="bg-gradient-to-r from-cyan-500 to-blue-500  text-white shadow-lg"
        >
          Contact Me
        </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
