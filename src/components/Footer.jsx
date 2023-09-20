import React from 'react'

const Footer = () => {
  return (
    <footer className='relative py-8 w-full px-32 text-sm font-light lg:px-16 z-1 md:px-12 sm:px-8 '>
        <span className='absolute top-0 left-0 w-full h-[1px] bg-dark'>&nbsp;</span>
        {new Date().getFullYear()} © All Rights Reserved
        
    </footer>
  )
}

export default Footer