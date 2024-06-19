'use client';

import { navItems } from '@/data';
import React from 'react'
import { FaGithub, FaTwitter, FaInstagram, FaYoutube, FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black flex flex-col w-full h-full bottom-0'>
      <div className='hidden md:flex justify-between border-y border-white-100 '>
      <div className='border-white flex flex-col px-4 py-10'>
        <div className='text-brand text-xl font-bold uppercase'> 
          Erudition AI
        </div>
        <div className='text-xs w-18 pt-3'>
          The Future of learning. Improving The way you learn
        </div>
      </div>
      <div className='border-white flex flex-col px-4 py-10'>
        <div className='text-brand text-xl font-bold uppercase'> 
          Important links
        </div>
        <div>

        <ul className='list-none flex justify-center items-start flex-1 flex-col gap-2 pt-3'>
              {navItems.map((nav) => (
                <li
                  key={nav.link}
                  className={`font-poppins font-medium cursor-pointer text-[14px]`}
                >
                  <a href={`${nav.link}`}>{nav.name}</a>
                </li>
              ))}
            </ul>
          
        </div>
      </div><div className='flex flex-col px-4 py-10'>
        <div className='text-brand text-xl font-bold uppercase'> 
          Upcoming
        </div>
        <div className='text-xs pt-3 w-18'>
          The Future of learning. Improving The way you learn
        </div>
      </div>

      </div>
      <div className='flex-col md:hidden justify-between border-y border-white-100 '>
      <div className='border-white flex flex-col px-4 py-10'>
        <div className='text-brand text-xl font-bold uppercase'> 
          Erudition AI
        </div>
        <div className='text-xs w-18 pt-3'>
          The Future of learning. Improving The way you learn
        </div>
      </div>
      <div className='border-white flex flex-col px-4 py-10'>
        <div className='text-brand text-xl font-bold uppercase'> 
          Important links
        </div>
        <div>

        <ul className='list-none flex justify-center items-start flex-1 flex-col gap-2 pt-3'>
              {navItems.map((nav) => (
                <li
                  key={nav.link}
                  className={`font-poppins font-medium cursor-pointer text-[14px]`}
                >
                  <a href={`${nav.link}`}>{nav.name}</a>
                </li>
              ))}
            </ul>
          
        </div>
      </div><div className='flex flex-col px-4 py-10'>
        <div className='text-brand text-xl font-bold uppercase'> 
          Upcoming
        </div>
        <div className='text-xs pt-3 w-18'>
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
