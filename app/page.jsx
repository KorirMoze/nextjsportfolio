"use client";
import Banner from "@/components/Banner";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const page = () => {
  return (
    <Banner className=" flex justify-center px-4 ">
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl w-full items-center justify-center text-center pt-60 mx-auto">
        {/* Left Icons */}
        <div className="flex flex-row space-x-6 md:flex-col md:space-x-0 md:space-y-6 mb-0 md:items-center">
          <a
            href="https://github.com/KorirMoze"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24}  className="hover:-translate-y-1 transition-transform duration-300" /> 
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24}  className="hover:-translate-y-1 transition-transform duration-300" />
          </a>
          <a href="https://X.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24}  className="hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Right Content */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-serif font-semibold text-gray-900">
            Korir Moses
          </h1>
          <p className="text-gray-600 border-t border-gray-400 pt-2 inline-block">
            Tech Enthusiast | Software Developer
          </p>
        </div>
      </div>
    </Banner>
  );
};

export default page;
