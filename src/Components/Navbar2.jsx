"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {  AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar2 = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    
    {
      id: 3,
      link: "contact",
    },
 
  ];

  return (
    <div className="flex justify-between items-center w-full sm:h-25 md:h-25 h-20 px-4 text-white bg-light fixed  nav top-0 z-10">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="no-underline"
            href=""
            target="_blank"
            rel="noreferrer"
          >
          <Image src="/logo-2.jpeg" height={500} width={200}/>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 no-underline"
          >
            <Link href={link} className="no-underline text-dark">{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
         

        <div className="flex justify-between">
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent no-underline to-gray-800 text-gray-500">
     


          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl no-underline"
            >
              <Link onClick={() => setNav(!nav)} href={link} className="no-underline">
                {link}
              </Link>
              
            </li>
          
          ))}
      
        </ul>
<div>

<div className="flex gap-6 text-[26px]">
            <div className="relative cursor-pointer">
                <AiOutlineShoppingCart/>
                <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center ">0</div>
            </div>
            <AiOutlineSearch/>
            <CgProfile/>
          </div>
  
</div>


        </div>
      )}
         <div className="flex gap-6 text-[26px]">
            <div className="relative cursor-pointer">
                <AiOutlineShoppingCart className="text-dark" />
                <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center ">0</div>
            </div>
            <AiOutlineSearch className="text-dark"/>
            <CgProfile className="text-dark"/>
          </div>
    </div>
  );
};

export default Navbar2;