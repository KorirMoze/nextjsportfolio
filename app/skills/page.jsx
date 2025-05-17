import Banner from "@/components/Banner";
import React from "react";

const page = () => {
  return (
    <Banner classname="px-6 py-16 md:px-20">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 pt-5 text-black">
          Skills
        </h1>
        <p className="text-gray-700">My Technical Aspects</p>
        <div className="max-w-xl mx-auto flex flex-col md:flex-row justify-between items-start mt-10">
         
          <div className="border-1 border-gray-300 rounded-2xl px-15 py-10 ">
            <h1 className="text-2xl font-bold mb-2">BACKEND</h1>
           <div className="text-left">
              <ul className="text-gray-500 list-disc list-inside space-y-1">
                <li>C#</li>
                <li>.NET</li>
                <li>Python</li>
                <li>Django</li>
                <li>RESTful APIs</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
             <div className="border-1 border-gray-300 rounded-2xl px-15 py-10 mt-3 md:mt-0">
            <h1 className="text-2xl font-bold mb-2">TECHNOLOGIES</h1>
            <div className="text-left">
              <ul className="text-gray-500 list-disc list-inside space-y-1">
                <li>Object Oriented Design</li>
                <li>.NET Architecture</li>
                <li>Microsoft Azure</li>
                <li>Elastic Search</li>
                <li>Spatial Analysis</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-xl mx-auto flex flex-col md:flex-row justify-between items-start mt-10">
           <div className="border-1 border-gray-300 rounded-2xl px-15 py-10">
            <h1 className="text-2xl font-bold mb-2">FRONTEND</h1>
            <div className="text-left">
              <ul className="text-gray-500 list-disc list-inside space-y-1">
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>Vue JS</li>
              </ul>
            </div>
          </div> 
          <div className="border-1 border-gray-300 rounded-2xl px-15 py-10 mt-3 md:mt-0">
            <h1 className="text-2xl font-bold mb-2">TOOLS</h1>
           <div className="text-left">
              <ul className="text-gray-500 list-disc list-inside space-y-1">
                <li>Visual Studio</li>
                <li>Git</li>
                <li>Github</li>
                <li>Gitlab</li>
              </ul>
            </div>
          </div>
        </div>
      
      </div>
    </Banner>
  );
};

export default page;
