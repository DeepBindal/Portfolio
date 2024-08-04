import React from "react";
import { FaGithub, FaInstagram, FaRegAddressCard } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const ContactMe = () => {
  return (
    <div id="contact" className="text-white bgay-900 py-12">
      <div className="container mx-auto text-center px-4">
        <div className="flex my-4 items-center">
          <div className="flex-grow h-0.5 bg-yellow-300"></div>
          <h2 className="px-4 text-2xl font-bold">Contact Me</h2>
          <div className="flex-grow h-0.5 bg-yellow-300"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-yellow-300 p-8 rounded-lg flex items-center justify-center">
            <div className="flex items-center">
              <CiMail className="text-3xl" />
              <span className="ml-4 text-2xl">deepbindal36@gmail.com</span>
            </div>
          </div>

          <div className="bg-yellow-300 p-8 rounded-lg flex items-center justify-center">
            <div className="flex items-center">
              <FaRegAddressCard className="text-3xl" />
              <span className="ml-4 text-2xl">Sonipat, Haryana</span>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-20 sm:mb-0">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://github.com/DeepBindal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl hover:text-gray-500 transition duration-300" />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/deepbindal._/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl hover:text-gray-500 transition duration-300" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
