"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa' // Hamburger and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false) // State to manage the menu toggle

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
        <nav className='w-full h-16 bg-white text-gray-800 font-inter text-base py-2 px-6 md:px-40'>
            <div className='flex justify-between items-center'>
              
              {/* Left Side: Logo or Brand Name */}
              <div className='text-xl font-bold hidden'>
                <Link href="/">Comforty</Link>
              </div>

              {/* Hamburger Icon (visible on small screens) */}
              <div className='sm:hidden'>
                <button onClick={toggleMenu}>
                  {isOpen ? (
                    <FaTimes className='text-2xl' />
                  ) : (
                    <FaBars className='text-2xl' />
                  )}
                </button>
              </div>

              {/* Left Side: Links */}
              <ul className={`flex space-x-4 md:space-x-10 ${isOpen ? 'block' : 'hidden'} sm:flex sm:space-x-10`}>
                <li><Link href="/" className='hover:text-blue-600'>Home</Link></li>
                <li><Link href="/shop" className='hover:text-blue-600'>Shop</Link></li>
                <li><Link href="/product" className='hover:text-blue-600'>Product</Link></li>
                <li><Link href="/pages" className='hover:text-blue-600'>Pages</Link></li>
                <li><Link href="/about" className='hover:text-blue-600'>About</Link></li>
              </ul>
              
              {/* Right Side: Contact Info (visible on medium screens and above) */}
              <p className='hidden md:block text-sm'>Contact: (808) 555-0111</p>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
