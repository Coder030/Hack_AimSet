import Link from 'next/link'
import React from 'react'

const HeroNavbar = () => {
  return (
    <div className='bg-[#253037] w-11/12 h-[70px] p-4
    flex justify-between items-center mx-auto'>
      {/* logo */}
      <Link href='/'>
      <button className='nunito font-black text-white'>Logo</button>
      </Link>

      {/* links */}
      <div className='flex items-center gap-8 text-white'>
      <button>Success stories</button>
      <button>About</button>
      </div>

      {/* button */}
      <button className='text-white bg-[#282828] w-fit
        py-2 px-4 rounded-md'>
        Sign In
      </button>

    </div>
  )
}

export default HeroNavbar
