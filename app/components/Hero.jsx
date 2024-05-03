import React from 'react'
import HeroNavbar from './HomeComponents/HeroNavbar'
import PeopleImage from '@/app/assets/people.png'
import MapImage from '@/app/assets/map.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='bg-[#253037] w-full 
    h-auto text-[#F1F8EC]
    '>
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
      <div>
      <div className='relative'>
  <Image src={MapImage} alt="map" height={500} className='w-1/5 absolute 
  inset-0 translate-y-[104%] translate-x-[19px] mx-auto hidden md:flex' />
  <Image src={PeopleImage} alt="people" height={500} className='w-full' />
</div>


    </div>
    </div>
  )
}

export default Hero
