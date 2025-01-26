import React from 'react'
import Image from 'next/image'

const Explore = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 bg-gray-50">
      {/* Heading with Rotation */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left sm:rotate-0 flex justify-center sm:justify-start mt-10 sm:mt-20 text-gray-800">
        EXPLORE NEW AND POPULAR STYLES
      </h1>

      {/* Main Image */}
      <div className="flex justify-center mt-10 sm:mt-20">
        <Image 
          src="/Images/item-category 1 (1).png" 
          alt="product" 
          height={648} 
          width={648} 
          className="max-w-full h-auto rounded-lg shadow-xl"
        />
      </div>

      {/* Image Cards */}
      <div className="mt-10 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        <div className="relative w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
          <Image 
            src="/Images/card (4).png" 
            alt="product" 
            height={312} 
            width={312} 
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
        </div>

        <div className="relative w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
          <Image 
            src="/Images/card (3).png" 
            alt="product" 
            height={312} 
            width={312} 
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
        </div>

        <div className="relative w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
          <Image 
            src="/Images/card (1).png" 
            alt="product" 
            height={312} 
            width={312} 
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
        </div>

        <div className="relative w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
          <Image 
            src="/Images/card (2).png" 
            alt="product" 
            height={377} 
            width={312} 
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
