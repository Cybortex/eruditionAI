import React from 'react'
import Image from 'next/image'
import { TypewriterEffect } from './TextSmooth'

const Hero = () => {
  return (
    <div>

      <TypewriterEffect />

      <Image
        src="/App.png"
        width={50}
        height={50}
        alt="Picture of the author"
      />
      
    </div>
  )
}

export default Hero
