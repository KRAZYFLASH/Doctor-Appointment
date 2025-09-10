import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        
        <img src={assets.contact_image} alt="" className='w-full md:max-w-[360px]' />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>54709 Willem Station <br /> Suite 540, Jakarta, Indonesia</p>
          <p className='text-gray-500'>Tel: (+63) 505-4020 <br /> Email: Fulan@Dokctor@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Career Search</p>
          <p className='text-gray-500'>Learn more about our Teams and Job Openings</p>

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>

      </div>
    </div>
  )
}

export default Contact
