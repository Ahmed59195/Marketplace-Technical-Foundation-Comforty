import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20">
      {/* Heading */}
      <h1 className='font-bold text-2xl sm:text-3xl my-10 text-center sm:text-left'>
        Featured Products
      </h1>

      {/* Image Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'>
        <Image 
          src="/Images/Products.png" 
          alt="product" 
          height={377} 
          width={312} 
          className="w-full h-auto"
        />
        <Image 
          src="/Images/Products (1).png" 
          alt="product" 
          height={377} 
          width={312} 
          className="w-full h-auto"
        />
        <Image 
          src="/Images/Products (2).png" 
          alt="product" 
          height={377} 
          width={312} 
          className="w-full h-auto"
        />
        <Image 
          src="/Images/Products (3).png" 
          alt="product" 
          height={377} 
          width={312} 
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

export default Featured
