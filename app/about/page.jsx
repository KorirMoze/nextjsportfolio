import Banner from '@/components/Banner'
import React from 'react'
import { FaLightbulb, FaBriefcase } from "react-icons/fa";

const AboutSection = () => {
  return (
    <Banner className="px-6 py-16 md:px-20  ">
      <div className=" text-center ">
        <h1 className='text-3xl sm:text-4xl font-bold mb-3 pt-5 text-black-600'>About Me</h1>
        <p className='text-gray-400 '>Introduction</p>
      </div>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 '>
        {/*left side*/}
        <div className="w-full md:w-1/2 space-y-8">
        {/*Image*/}
        </div>

        {/*right side*/}
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12'>
          {/* icons*/}
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6'>
            <div className='px-10  py-5  border-gray-300 border-1 rounded-2xl mt-5 '>
              <FaLightbulb className='mx-auto ' />
              <p className=''>Experience</p>
              <p className='text-gray-500'>2+ Year</p>
            </div>
            <div className='px-10  py-5  border-gray-300 border-1 rounded-2xl mt-5 '>
              <FaBriefcase className='mx-auto'/>
              <p className=''>Completed</p>
              <p className='text-gray-500'>10+ Projects</p>
            </div>
          </div>
          {/* Description */}
          <div className='mt-3 text-gray-400 '>

          </div>
        </div>
      </div>
    </Banner>
  )
}

export default AboutSection