import React from 'react'
import Image from 'next/image'

const Top = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20">
      {/* Heading */}
      <h1 className='font-bold text-2xl sm:text-3xl my-10 text-start'>
        Top Categories
      </h1>

      {/* Image Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
        <Image 
          src="/Images/Category.png" 
          alt="product" 
          height={424} 
          width={424} 
          className="w-full h-auto"
        />
        <Image 
          src="/Images/Category (1).png" 
          alt="product" 
          height={424} 
          width={424} 
          className="w-full h-auto"
        />
        <Image 
          src="/Images/Category (2).png" 
          alt="product" 
          height={424} 
          width={424} 
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

export default Top
