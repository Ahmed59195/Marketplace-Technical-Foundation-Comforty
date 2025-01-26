import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { TfiCup } from "react-icons/tfi";
import { LuBadgeCheck } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";

const Page = () => {
  return (
    <div>
      <div className="mt-20 mb-10 font-bold text-2xl text-black bg-white h-100 w-100 flex justify-center">
        Get In Touch With Us
      </div>
      <p className="flex justify-center mb-10">
        For More Information About Our Product & Services. Please Feel Free To Drop Us An <br />
        Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <div className="mx-8 sm:mx-20 my-20">
        {/* Address Section */}
        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-16 mb-10">
          <div className="flex items-center">
            <FaLocationDot className="text-2xl mr-3" />
            <div>
              <h1 className="font-bold text-xl">Address</h1>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex flex-col">
            <label>Your Name</label>
            <input className="border border-gray-300 p-2 mt-2" placeholder="Abc" />
          </div>
        </div>

        {/* Phone Section */}
        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-16 mb-10">
          <div className="flex items-center">
            <FaPhoneFlip className="text-2xl mr-3" />
            <div>
              <h1 className="font-bold text-xl">Phone</h1>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className="flex flex-col">
            <label>Email Address</label>
            <input className="border border-gray-300 p-2 mt-2" placeholder="abc@def.com" />
          </div>
        </div>

        {/* Working Time Section */}
        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-16 mb-10">
          <div className="flex items-center">
            <FaClock className="text-2xl mr-3" />
            <div>
              <h1 className="font-bold text-xl">Working Time</h1>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
          <div className="flex flex-col">
            <label>Subject</label>
            <input className="border border-gray-300 p-2 mt-2" placeholder="This is optional" />
          </div>
        </div>

        {/* Message Section */}
        <div className="flex flex-col mb-10">
          <label>Message</label>
          <input className="border border-gray-300 p-2 mt-2" placeholder="Hi! I would like to ask about..." />
        </div>
      </div>

      {/* Footer Section with Features */}
      <div className="h-70 w-full mx-8 sm:mx-20 mt-20 bg-slate-100 flex justify-around p-6 rounded-lg">
        <div className="text-center">
          <TfiCup className="text-3xl mb-2" />
          <h1 className="font-bold text-xl text-black">High Quality</h1>
          <p>Crafted from top materials</p>
        </div>

        <div className="text-center">
          <LuBadgeCheck className="text-3xl mb-2" />
          <h1 className="font-bold text-xl text-black">Warranty Protection</h1>
          <p>Over 2 years</p>
        </div>

        <div className="text-center">
          <MdSupportAgent className="text-3xl mb-2" />
          <h1 className="font-bold text-xl text-black">24/7 Support</h1>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
