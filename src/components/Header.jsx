import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { PiCaretDownThin } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { FaHandsHelping } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  }

  const hideSideMenu = () => {
    setToggle(false);
  }

  const toggleNavMenu = () => {
    setNavOpen(!navOpen);
  }

  const links = [
    {
      icon: <IoIosSearch />,
      name: "Search"
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      offer: "New"
    },
    {
      icon: <FaHandsHelping />,
      name: "Help"
    },
    {
      icon: <CiUser />,
      name: "Sign In"
    },
    {
      icon: <CiShoppingCart />,
      name: "Cart"
    },
  ];

  return (
    <>
      {/* Sidebar */}
      <div className='black-overlay bg-red w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? 'visible' : "hidden",
        zIndex: 99999999999
      }}>
        <div onClick={(e) => {
          e.stopPropagation();
        }} className='w-[500px] h-full bg-white absolute duration-[400ms] p-4'
          style={{
            left: toggle ? '0%' : '-100%'
          }}>
          <h2 className='mb-4'>Sidebar</h2>
          <input
            type='text'
            placeholder='Enter text here'
            className='w-full p-2 rounded'
          />
        </div>
      </div>

      {/* Header */}
      <header className='p-3 shadow-xl text-[#686b78] bg-white fixed w-full top-0 z-[9999]'>
        <div className='max-w-[1200px] m-auto flex items-center justify-between'>
          {/* Logo and Dropdown Always Visible */}
          <div className='flex items-center'>
            <div className='w-[80px]'>
              <img src={logo} alt='logo' className='w-full' />
            </div>
            <div className='ml-2'>
              <span className='border-b-[3px] border-[black]'>Swiggy</span> Best Meal
              <PiCaretDownThin
                onClick={showSideMenu}
                fontSize={20}
                fontWeight={600}
                className='inline cursor-pointer text-[#fc8019] font-bold'
              />
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <AiOutlineMenu 
            className="text-2xl cursor-pointer block lg:hidden"
            onClick={toggleNavMenu} 
          />

          {/* Navigation Links (Right Side) */}
          <nav className={`${
              navOpen ? "block" : "hidden"
            } absolute lg:static bg-white top-[60px] right-0 lg:flex list-none p-4 lg:p-0 lg:space-x-8   w-full lg:w-auto shadow-lg lg:shadow-none z-[9999]`}>
            {links.map((curEle, index) => (
              <li key={index} className='flex items-center gap-2  font-bold hover:text-[#fc8019] cursor-pointer'>
                {curEle.icon}
                {curEle.name}
                <sup className='text-[#fc8019]'>{curEle.offer}</sup>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
