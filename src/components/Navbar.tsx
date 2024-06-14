"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { navItems } from "@/data";
import { FaBars, FaMixer} from "react-icons/fa";

const Navbar = () => {

    const [active, setActive] = useState("");
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
           {navItems.map((nav) => (
            <li
              key={nav.link}
              className={`${
                active === nav.name ? "text-blue" : "text-white"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.name)}
            >
              <a href={`${nav.link}`}>{nav.name}</a>
            </li>
          ))}
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
              {navItems.map((nav) => (
                <li
                  key={nav.link}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.name ? "text-blue" : "text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.name);
                  }}
                >
                  <a href={`${nav.link}`}>{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>
                </div>

            </nav>
        </header>
      
    </div>
  )
}

export default Navbar