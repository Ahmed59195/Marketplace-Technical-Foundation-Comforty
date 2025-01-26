"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const Products = () => {
  // Sample data for products (name, price, stock status)
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$29.99",
      imageUrl: "/Images/Products.png",
      inStock: true,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$39.99",
      imageUrl: "/Images/Products (1).png",
      inStock: false,
    },
    {
      id: 3,
      name: "Product 3",
      price: "$49.99",
      imageUrl: "/Images/Products (2).png",
      inStock: true,
    },
    {
      id: 4,
      name: "Product 4",
      price: "$59.99",
      imageUrl: "/Images/Products (3).png",
      inStock: true,
    },
    {
      id: 5,
      name: "Product 5",
      price: "$24.99",
      imageUrl: "/Images/Product Image.png",
      inStock: false,
    },
    {
      id: 6,
      name: "Product 6",
      price: "$19.99",
      imageUrl: "/Images/Category.png",
      inStock: true,
    },
    {
      id: 7,
      name: "Product 7",
      price: "$89.99",
      imageUrl: "/Images/Category (2).png",
      inStock: true,
    },
    {
      id: 8,
      name: "Product 8",
      price: "$99.99",
      imageUrl: "/Images/card (3).png",
      inStock: false,
    },
  ];

  const [cart, setCart] = useState<any[]>([]); // Cart state to store the added products

  // Function to add product to the cart
  const addToCart = (product: any) => {
    if (!product.inStock) {
      alert('Sorry, this product is out of stock.');
      return;
    }

    setCart((prevCart) => {
      // Check if the product is already in the cart
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // If product is already in the cart, increase the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If not in cart, add the product with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="px-4 sm:px-10 md:px-20 bg-gray-50">
      {/* Heading */}
      <h1 className="font-bold text-2xl sm:text-3xl my-10 text-center text-gray-800">
        Our Products
      </h1>

      {/* Product Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            {/* Product Image */}
            <div className="relative">
              <Image
                src={product.imageUrl}
                alt={product.name}
                height={312}
                width={312}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
              <p className="text-xl font-bold text-green-500 mt-2">{product.price}</p>

              {/* Stock Status */}
              <p className={`mt-2 text-sm ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product)}
                className={`mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-400 focus:outline-none ${
                  product.inStock ? '' : 'cursor-not-allowed opacity-50'
                }`}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Details (Optional) */}
      <div className="mt-10">
        <h2 className="font-semibold text-xl text-gray-800">Your Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="mt-2 text-gray-700">
              {product.name} - {product.quantity} x {product.price}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-semibold text-gray-800">
          Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}
        </p>
      </div>
    </div>
  );
};

export default Products;
