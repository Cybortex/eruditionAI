"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import { navItems } from "@/data";
import { FaBars, FaMixer} from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {

    const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>

        <header className=' absolute top-0 flex z-50 p-5 w-full items-center justify-between md:justify-evenly'>
            <Image 
                src="/Logo.png"
                width={50}
                height={50}
                alt="Picture of the author"
            />
            <nav>
            <ul className='list-none hidden sm:flex flex-row gap-10'>
           {navItems.map((nav) =>  
           (<Link 
            href={nav.link} 
            key={nav.link} 
            className={`${nav.link === pathname && "text-brand border-b-2 border-brand border-w-1"} hover:text-brand`}
            >{nav.name}</Link>)
          )}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          >
              {toggle ?  <FaMixer size={28} /> : <FaBars size={28} />}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-center items-start flex-1 flex-col gap-4'>
            {navItems.map((nav) =>  
           (<Link 
            href={nav.link} 
            key={nav.link} 
            className={`${nav.link === pathname && "text-brand"}`}
            >{nav.name}</Link>)
          )}
            </ul>
          </div>
                </div>

            </nav>
        </header>
      
    </div>
  )
}

export default Navbar
