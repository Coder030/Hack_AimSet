import React from 'react'

const HeroNavbar = () => {
  return (
    <div className='bg-[#253037] w-full h-[70px] p-4
    flex justify-between items-center'>
      {/* logo */}
      <p className='nunito font-black text-white'>Logo</p>

      {/* links */}
      <div className='flex items-center gap-8 text-white'>
      <button>Success stories</button>
      <button>About</button>
      </div>

      {/* button */}
    </div>
  )
}

export default HeroNavbar
