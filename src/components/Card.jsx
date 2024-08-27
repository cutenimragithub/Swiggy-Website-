import React from 'react'
import images from '../images.js'; // Import images object


export const Card = ({ images: imageKey, offer, title, rating, minTime, maxTime, name, place }) => {
 
  return (
    <div className='md:w-[273px] shrink-0  group'>
      <div className='  h-[182px] rounded-[15px] overflow-hidden relative  '>
        <img src= {images[imageKey]}className='object-cover  w-full h-full group-hover:scale-110 duration-150'  />
        <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 md:text-[25px] font-bold text-white tracking-tighter'>
          {offer}
        </div>
      </div>
      <div className='mt-3 text-xl font-bold'>
        {title}
      </div>
      <div>
        {rating}
        <span className='ml-2'> {minTime}-{maxTime}</span>
      </div>
      <div>
        <p>{name}</p>
        <p>{place}</p>
      </div>
    </div>
  )
}


