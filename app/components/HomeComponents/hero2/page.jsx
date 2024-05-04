import React from 'react'
import Image from 'next/image'
import Why_Participate from '@/app/assets/Why_Participate.png'



function Hero2() {
  return (
    <div>
      <Image src={Why_Participate} alt="people" height={500} className='w-full' />
    </div>
  )
}

export default Hero2
