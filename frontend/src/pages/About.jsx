import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet repellendus doloribus, et velit, eius in atque, quisquam delectus eveniet aliquid officia autem ducimus suscipit sed reiciendis earum labore iste vel voluptate nam? Cumque ab similique minima natus at expedita reprehenderit ipsum nisi maiores.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod consequuntur ex saepe nesciunt maiores excepturi velit omnis, tenetur expedita, ut corrupti quam possimus perferendis enim architecto repudiandae reprehenderit suscipit voluptate, minima totam vitae? Iusto vel expedita odit iure praesentium obcaecati ut quia impedit optio facere. Eos ut totam optio.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, maiores adipisci! Dolorem cum natus ad? Laborum ipsam provident nulla maiores ullam corporis sapiente.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid nemo quisquam, laborum in voluptate itaque deserunt deleniti!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolor nobis dolorum quae ex illo debitis adipisci.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perspiciatis consectetur hic accusantium quo!</p>
        </div>
      </div>
    </div>
  )
}

export default About
