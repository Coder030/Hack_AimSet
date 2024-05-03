import React from 'react'
import HeroNavbar from './HomeComponents/HeroNavbar'

const Hero = () => {
  return (
    <div className='bg-[#253037] w-full h-auto text-[#F1F8EC]
    p-4'>
      <HeroNavbar />
      <div className='flex justify-center flex-col gap-5'>
      <h1 className='text-[50px] text-center leading-[50px] 
      font-bold text-[#F1F8EC] nunito mt-20'>
      Resonate with the <br />
      visitor's problem
      </h1>
      <p className='text-base text-center'>
      Describe exactly what your product or service does to solve this problem. 
      <br />Avoid using verbose words or phrases.
      </p>
      <button className='text-[#253037] bg-[#F1F8FC] p-2 rounded-sm
      w-1/5 mx-auto hover:bg-[#e0e6e9] ease-out duration-200 '>
      Join your local community
      </button>
      </div>
    </div>
  )
}

export default Hero
