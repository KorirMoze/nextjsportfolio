import Banner from "@/components/Banner";
import React from "react";
import { FaLightbulb, FaBriefcase } from "react-icons/fa";

const AboutSection = () => {
  return (
    
    <Banner className="px-6 py-16 md:px-20">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 pt-5 text-black">
          About Me
        </h1>
        <p className="text-gray-700">Introduction</p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mt-10">
        {/* Left Side (Image) */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Image */}
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {/* Icons */}
          <div className="flex flex-col sm:flex-row justify-start gap-6">
            <div className="flex flex-col items-center px-15 py-5 border border-gray-300 rounded-2xl">
              <FaLightbulb className="text-3xl text-gray-700 mb-2" />
              <p className="font-semibold">Experience</p>
              <p className="text-gray-500">2+ Years</p>
            </div>

            <div className="flex flex-col items-center px-15 py-5 border border-gray-300 rounded-2xl">
              <FaBriefcase className="text-3xl text-gray-700 mb-2" />
              <p className="font-semibold">Completed</p>
              <p className="text-gray-500">10+ Projects</p>
            </div>
          </div>

          {/* Description */}
          <div className="text-gray-600 leading-relaxed">
            I am an experienced Software Developer with a dual expertise in
            backend <strong> (.NET Framework, C#, Django)</strong> and frontend 
            <strong> (Vue.js) </strong>
            development, specializing in fintech solutions. I architect and
            build secure, scalable payment processing systems and banking
            applications with a focus on data integrity, regulatory compliance,
            and exceptional performance. My technical expertise includes
            <strong> developing RESTful APIs with robust authentication mechanisms,
            implementing complex financial transaction logic, and integrating
            geospatial intelligence into banking solutions.</strong> 
            I excel at
            translating intricate financial requirements into elegant code while
            maintaining the highest standards of security and reliability.
            Committed to delivering financial technology that enhances
            operational efficiency and provides seamless customer experiences in
            the digital banking ecosystem.
          </div>
           <div className="px-10  py-10">
            <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-5  rounded-3xl hover:bg-gray-400 transition duration-300"
          >
            My Resume
          </a>
           </div>
        </div>
       
      </div>
    </Banner>
  );
};

export default AboutSection;
