import React from 'react'

const Banner = ({children}) => {
  return (
    <div className="bg-[url('/assets/images/Banner.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-[200vh] w-full relative">
    {children}
  </div>
  )
}

export default Banner