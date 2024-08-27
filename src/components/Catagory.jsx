import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import multiApiData from '../jsondata/data.json';  // Import the JSON data
import images from '../images.js'; // Import images object

export const Category = () => {
    const [slide, setSlide] = useState(6);  // Initially set to 0
    const api1Data = multiApiData.api1Data;  // Assuming this is the data you want to slide

    const nextSlide = () => {
        if (slide >= api1Data.length - 3
        ) return;  // Check to prevent overflow
        setSlide(slide + 3);
    }

    const preSlide = () => {
        if (slide <= 0) return;  // Check to prevent negative slide
        setSlide(slide - 3);
    }

    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex items-center justify-between my-[20px]'>
                <div>
                    <p className='text-[20px] font-bold '>What's on your mind</p>
                </div>
                <div className='flex'>
                    <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer'
                        onClick={preSlide}>
                        <FaArrowLeft />
                    </div>
                    <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer'
                        onClick={nextSlide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            <div className='flex overflow-hidden'>
                {api1Data.map((item, index) => (
                    <div key={item.id} className='w-[150px] shrink-0 duration-500' style={{
                        transform: `translateX(-${slide * 100}%)`,
                        transition: 'transform 0.5s ease' // Smooth transition
                    }}>
                        <h2 className='flex justify-center font-semibold text-[#fc8019]'>{item.title}</h2>
                        <img src={images[item.image]} alt={item.title} />
                    </div>
                ))}
            </div>

            <hr className='border-[1px] my-6' />
        </div>
    );
}


