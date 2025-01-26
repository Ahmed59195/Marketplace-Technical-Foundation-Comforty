import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className='bg-gray-200 md:mx-40 px-4 py-10 md:px-20 md:py-20'>
      <div className='text-xl mb-10'>
        <p className='text-center md:text-left'>WELCOME TO CHAIRY</p>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
          <h1 className='pt-10 md:pt-0 text-left font-bold text-4xl md:text-7xl'>
            Best Furniture <br />
            Collection for Your <br />
            Interior.
          </h1>

          {/* Image */}
          <div className='w-full md:w-[434px] flex justify-center md:justify-end'>
            <Image className="w-full" src="/Images/Product Image.png" alt='Product' height={584} width={434} />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className='md:flex justify-start'>
        <button className='flex items-center space-x-3 bg-teal-600 text-white text-xl rounded-lg h-12 px-6 py-2 hover:bg-black'>
          <Link href="/shop">Shop Now</Link>
          <HiOutlineArrowLongRight />
        </button>
      </div>
    </div>
  )
}

export default Hero;
