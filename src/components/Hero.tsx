import React from 'react'
import Image from 'next/image'
import { TypewriterEffect } from './TextSmooth'

const Hero = () => {
  return (
    <div className='flex'>

      <TypewriterEffect />

      <Image
        src="/App.png"
        width={1500}
        height={1500}
        alt="Picture of the author"
      />
      
    </div>
  )
}

export default Hero
