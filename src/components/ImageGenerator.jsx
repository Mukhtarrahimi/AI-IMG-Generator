import React from 'react'
import default_img from '../assets/person-playing-3d-video-games-device.jpg'

export const ImageGenerator = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-Poetsen text-2xl md:text-3xl lg:text-4xl text-white'>AI Image <span className='text-yellow-500'>Generator</span></h1>
      <div className="img w-72 rounded-md overflow-hidden mt-8 mb-4">
        <img className='w-full object-cover' src={default_img} alt="" />
      </div>
    </div>
  )
}
