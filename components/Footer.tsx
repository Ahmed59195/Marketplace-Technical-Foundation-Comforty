import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className='bg-white py-8 px-4 md:px-10 text-gray-700'>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Logo and Social Media Section */}
          <div className='flex flex-col items-start'>
            <div className="flex items-center">
              <Image className="" src="/Images/Logo Icon.png" alt="Comforty" height={40} width={40} />
              <h3 className='ml-2 text-2xl font-bold'>Comforty</h3>
            </div>

            <div className='mt-6'>
              <p className='text-sm'>
                Vivamus tristique odio sit amet velit semper,<br />
                eu posuere turpis interdum. <br />
                Cras egestas purus
              </p>
              <div className='flex space-x-4 items-center mt-6'>
                <Link href='https://www.facebook.com'><MdFacebook className="text-2xl cursor-pointer" /></Link>
                <Link href='https://www.twitter.com'><FaTwitter className="text-2xl cursor-pointer" /></Link>
                <Link href='https://www.instagram.com'><FaInstagram className="text-2xl cursor-pointer" /></Link>
                <Link href='https://www.pinterest.com'><FaPinterest className="text-2xl cursor-pointer" /></Link>
                <Link href='https://www.youtube.com'><FaYoutube className="text-2xl cursor-pointer" /></Link>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className='text-gray-500 font-bold text-lg mb-4'>CATEGORY</h3>
            <ul className='text-black text-sm'>
              <li>Sofa</li>
              <li>Armchair</li>
              <li>Wing Chair</li>
              <li><u>Desk Chair</u></li>
              <li>Wooden Chair</li>
              <li>Park Bench</li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className='text-gray-500 font-bold text-lg mb-4'>SUPPORT</h3>
            <ul className='text-black text-sm'>
              <li>Help & Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className='text-gray-500 font-bold text-lg mb-4'>NEWSLETTER</h3>
            <div className='flex flex-col sm:flex-row'>
              <input
                className="rounded-lg h-12 w-full sm:w-60 text-xl p-3 border border-gray-300"
                name="email"
                id="Email"
                placeholder='Your email'
              />
              <button className='mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto px-6 py-3 bg-cyan-600 text-white text-center rounded-lg'>
                Subscribe
              </button>
            </div>
            <p className='text-sm mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Nullam tincidunt erat enim.
            </p>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className='mt-10 flex flex-col sm:flex-row justify-between items-center'>
          <p className='text-sm'>
            @ 2021 - Blogy - Designed & Developed by <b>Zakirsoft</b>
          </p>
          <div className='mt-4 sm:mt-0'>
            <Image src="/Images/footer.png" alt="Footer Logo" height={50} width={50} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
