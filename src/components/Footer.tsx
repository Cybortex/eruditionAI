import React from 'react'
import { FaGithub, FaTwitter, FaInstagram, FaYoutube, FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black flex flex-col w-full bottom-0'>
      <div className='flex justify-between border-y border-white-100 '>
      <div className='border-white flex flex-col px-4 py-10'>
        <div className='text-brand text-xl font-bold uppercase'> 
          Erudition AI
        </div>
        <div className='text-xs w-18'>
          The Future of learning. Improving The way you learn
        </div>
      </div>
      <div className='border-white flex flex-col px-4 py-10'>
        <div className='text-brand text-xl font-bold uppercase'> 
          Important links
        </div>
        <div className='text-xs w-18'>
          The Future of learning. Improving The way you learn
        </div>
      </div><div className='flex flex-col px-4 py-10'>
        <div className='text-brand text-xl font-bold uppercase'> 
          Important Links
        </div>
        <div className='text-xs w-18'>
          The Future of learning. Improving The way you learn
        </div>
      </div>

      </div>
      <div className='flex w-full bg-black-100 p-3 justify-between'>
        <div className='flex gap-10'>
        <FaInstagram />
        <FaGithub />
        <FaYoutube />
        <FaTwitter />
        </div>
        <div className='flex items-center gap-2'>
          Copyright <FaCopyright /> Cybortex Inc
        </div>
      </div>
    </footer>
  )
}

export default Footer
