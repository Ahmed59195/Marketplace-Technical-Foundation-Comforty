"use client"

import Link from 'next/link'; 
import React, { useState } from 'react'
import Image from 'next/image'
import { FaCheck } from "react-icons/fa6";
import { BsCartDash } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";
import { FaSearch } from 'react-icons/fa'; // Add search icon
import { useRouter } from 'next/navigation';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Redirect to the search results page with the query in the URL
    if (searchQuery.trim()) {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div>
      <header>
        {/* Top Bar: Free shipping, language, FAQ, and Help */}
        <div className="bg-[#272343] text-white p-2 flex justify-between items-center">
          <div className="md:px-40 flex items-center gap-2">
            <FaCheck />
            <p className="text-xs font-inter opacity-70">Free shipping on all orders over $50</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-xs font-inter opacity-70 cursor-pointer">
              ENG <RiArrowDropDownLine />
            </p>
            <Link href="/faq" className="text-xs font-inter opacity-70">Faq</Link>
            <div className="flex items-center gap-2">
              <BsExclamationCircle />
              <Link href="/faq" className="text-xs font-inter opacity-70">Need Help</Link>
            </div>
          </div>
        </div>

        {/* Main Header Section */}
        <div className="bg-gray-200 p-5 md:flex justify-between items-center">
          {/* Logo and Name */}
          <div className="md:px-40 flex items-center gap-1">
            <Image src="/Images/Vector.png" alt="Comforty" height={40} width={40} />
            <h1 className="text-3xl font-bold">Comforty</h1>
          </div>

          {/* Search Bar */}
          <div className="flex items-center w-full max-w-xl mx-4 md:mx-0">
            <form onSubmit={handleSearchSubmit} className="flex w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for products..."
                className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
                <FaSearch />
              </button>
            </form>
          </div>

          {/* Cart Button */}
          <div className="md:flex items-center gap-2">
            <button className="flex items-center mx-40 px-4 py-2 space-x-1 bg-white text-black rounded-lg hover:bg-blue-400">
              <BsCartDash />
              <Link href="/shop" className="ml-2">Cart</Link>
              <p className="bg-teal-600 text-white text-sm rounded-full px-2">2</p>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
