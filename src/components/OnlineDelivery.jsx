
import React, { useState } from 'react';
 import multiApiData from '../jsondata/data.json';  // Import the JSON data
 import { Card } from './Card';

const OnlineDelivery = () => {

     const api2Data = multiApiData.api2Data;  // Data for sliding
  return (
    <>
          <div className='max-w-[1200px] mx-auto '>
        <div className='flex items-center justify-between my-4'>
          <div>
            <p className='text-[20px] font-bold'>Top Restaurant Chains</p>
          </div>
        
        </div>

        <div className='grid md:grid-cols-4 grid-cols-2 gap-1 md:gap-3'>
            
                 {api2Data.map((curEle, index) => (
                    <Card {...curEle} key={index} />
                  ))}
            
        </div>
       
      </div>
      
    </>
  )
}

export default OnlineDelivery
