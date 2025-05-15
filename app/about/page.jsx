import Banner from '@/components/Banner'
import React from 'react'

const AboutSection = () => {
  return (
    <Banner className="px-6 py-16 md:px-20  ">
      <div className=" text-center ">
        <h1 className='text-3xl sm:text-4xl font-bold mb-3 pt-5 text-black-600'>About Me</h1>
        <p className='text-gray-400 '>Introduction</p>
      </div>

    </Banner>
  )
}

export default AboutSection