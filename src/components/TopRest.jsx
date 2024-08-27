import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import multiApiData from '../jsondata/data.json';  // Import the JSON data
import { Card } from './Card';

export const TopRest = () => {
  const [slide, setSlide] = useState(0);  // Initially set to 0
  const api2Data = multiApiData.api2Data;  // Data for sliding
  
  const nextSlide = () => {
    if (slide >= api2Data.length - 1) return;  // Check to prevent overflow
    setSlide(slide + 1);
  }

  const preSlide = () => {
    if (slide <= 0) return;  // Check to prevent negative slide
    setSlide(slide - 1);
  }

  return (
    <>
      <div className='max-w-[1200px] mx-auto mb-[20px]'>
        <div className='flex items-center justify-between  my-[20px]'>
          <div>
            <p className='text-[20px] font-bold'>Top Restaurant Chains</p>
          </div>
          <div className='flex'>
            <div
              className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer'
              onClick={preSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer'
              onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className='relative overflow-hidden '>
          <div
            className=' transition-transform duration-500 ease-in-out gap-7 flex'
            style={{
              transform: `translateX(-${slide * 100}%)`,
            }}
          >
            {api2Data.map((curEle, index) => (
              <Card {...curEle} key={index} />
            ))}
          </div>
        </div>
        <hr className='border-[1px] my-6' />
      </div>
    </>
  )
}


