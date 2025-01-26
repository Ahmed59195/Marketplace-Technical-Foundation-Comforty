import React from 'react'
import Image from 'next/image'
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { PiPlantLight } from "react-icons/pi";

const Page = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20">

      {/* About Us Section */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-5">
        <div className="bg-teal-600 w-full md:w-1/2 flex flex-col gap-10 p-5 md:ml-20">
          <h1 className="font-bold text-4xl text-white">About Us - Comforty</h1>
          <p className="text-lg text-white">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
          </p>
          <button className="flex justify-center items-center bg-teal-500 text-white text-lg rounded-md h-12 w-40 mx-10 my-10 hover:bg-teal-600">
            View Collection
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <Image src={"/Images/Image Block.png"} alt="Comforty" height={478} width={619} className="w-full h-auto" />
        </div>
      </div>

      {/* What Makes Our Brand Different */}
      <div className="my-10 text-center">
        <h1 className="text-2xl font-bold">What Makes Our Brand Different</h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-100 text-teal-500 p-6 text-center rounded-lg">
            <TbTruckDelivery className="text-4xl mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Next Day as Standard</h3>
            <p>Order before 3pm and get your order the next day as standard.</p>
          </div>

          <div className="bg-slate-100 text-teal-500 p-6 text-center rounded-lg">
            <CiCircleCheck className="text-4xl mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Made by True Artisans</h3>
            <p>Handmade crafted goods made with real passion and craftsmanship.</p>
          </div>

          <div className="bg-slate-100 text-teal-500 p-6 text-center rounded-lg">
            <MdOutlinePayment className="text-4xl mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Unbeatable Prices</h3>
            <p>For our materials and quality, you won’t find better prices anywhere.</p>
          </div>

          <div className="bg-slate-100 text-teal-500 p-6 text-center rounded-lg">
            <PiPlantLight className="text-4xl mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Recycled Packaging</h3>
            <p>We use 100% recycled materials to ensure our footprint is more manageable.</p>
          </div>
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="mx-10 sm:mx-20">
        <h1 className="font-bold text-2xl mb-10">Our Popular Products</h1>
        <div className="flex justify-center flex-wrap gap-5">
          <Image src={"/Images/Product Card.png"} alt="Product 1" height={462} width={630} className="w-full sm:w-1/3" />
          <Image src={"/Images/Product Card (1).png"} alt="Product 2" height={462} width={305} className="w-full sm:w-1/3" />
          <Image src={"/Images/Product Card (2).png"} alt="Product 3" height={462} width={305} className="w-full sm:w-1/3" />
        </div>
      </div>
    </div>
  );
}

export default Page;
