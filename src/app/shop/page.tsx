import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="mx-4 sm:mx-20 my-20">
      <h1 className="font-bold text-2xl flex justify-start mb-10">Bag</h1>
      
      {/* First Product */}
      <div className="flex items-center mb-10">
        <Image className="mr-10" src={"/Images/Frame (1).png"} alt="Library Stool Chair" height={150} width={150}/>
        <div>
          <p className="font-medium mb-2">Library Stool Chair</p>
          <p className="text-gray-600 mb-2">Ashen Slate/Cobalt Bliss</p>
          <p className="mb-1">Size L</p>
          <p>Quantity: 1</p>
        </div>
      </div>

      {/* Second Product */}
      <div className="flex items-center mb-10 border-t pt-5">
        <Image className="mr-10" src={"/Images/Frame.png"} alt="Library Stool Chair" height={150} width={150}/>
        <div>
          <p className="font-medium mb-2">Library Stool Chair</p>
          <p className="text-gray-600 mb-2">Ashen Slate/Cobalt Bliss</p>
          <p className="mb-1">Size L</p>
          <p>Quantity: 1</p>
        </div>
      </div>
    </div>
  )
}

export default Page;
