'use client'; // Make this a client component

import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

type Product = {
  _id: string;
  title: string;
  price: number;
  image: any;
  description: string;
  quantity: number;
  priceWithoutDiscount?: number;
  isNew?: boolean;
  isSale?: boolean;
  averageRating?: number;
  ratings?: number[];
};

export default function ProductDetailPage({ product }: { product: Product }) {
  const [cart, setCart] = useState<Product[]>([]); // Cart state
  const [wishlist, setWishlist] = useState<Product[]>([]); // Wishlist state
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0); // Current user rating
  const [userRating, setUserRating] = useState<number | null>(null); // User's rating state
  const [averageRating, setAverageRating] = useState<number>(product.averageRating || 0); // Average rating

  // Load cart, wishlist, and user rating from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const storedRating = JSON.parse(localStorage.getItem("ratings") || "{}");

    setCart(storedCart);
    setWishlist(storedWishlist);

    // Check if the product is in the wishlist
    const isProductInWishlist = storedWishlist.some((item: Product) => item._id === product._id);
    setIsInWishlist(isProductInWishlist);

    // If the user has already rated the product, set their previous rating
    setUserRating(storedRating[product._id] || null);
  }, [product._id]);

  // Handle Add to Cart
  const addToCart = (product: Product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = storedCart.findIndex((item: Product) => item._id === product._id);

    if (existingProductIndex === -1) {
      // If the product doesn't exist in the cart, add it with quantity 1
      storedCart.push({ ...product, quantity: 1 });
    } else {
      // If the product exists, increase the quantity by 1
      storedCart[existingProductIndex].quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(storedCart));
    setCart(storedCart);
  };

  // Handle Remove from Cart
  const removeFromCart = (product: Product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = storedCart.findIndex((item: Product) => item._id === product._id);

    if (existingProductIndex !== -1) {
      const productInCart = storedCart[existingProductIndex];
      
      // If quantity is more than 1, decrease the quantity
      if (productInCart.quantity > 1) {
        storedCart[existingProductIndex].quantity -= 1;
      } else {
        // If quantity is 1, remove the product from the cart
        storedCart.splice(existingProductIndex, 1);
      }

      localStorage.setItem("cart", JSON.stringify(storedCart));
      setCart(storedCart);
    }
  };

  // Handle Add/Remove to Wishlist
  const toggleWishlist = (product: Product) => {
    let updatedWishlist = [...wishlist];
    if (isInWishlist) {
      updatedWishlist = updatedWishlist.filter((item) => item._id !== product._id);
    } else {
      updatedWishlist.push(product);
    }
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
    setIsInWishlist(!isInWishlist);
  };

  // Handle Rating
  const handleRating = (ratingValue: number) => {
    setRating(ratingValue);
    // Save the user's rating to localStorage
    const storedRating = JSON.parse(localStorage.getItem("ratings") || "{}");
    storedRating[product._id] = ratingValue;
    localStorage.setItem("ratings", JSON.stringify(storedRating));

    // Update average rating (you can also send this data to your backend to save)
    let totalRating = 0;
    let ratingCount = 0;

    Object.keys(storedRating).forEach((key) => {
      totalRating += storedRating[key];
      ratingCount++;
    });

    const newAverageRating = totalRating / ratingCount;
    setAverageRating(newAverageRating);
    setUserRating(ratingValue); // Store the user's rating locally
  };

  // Render stars
  const renderStars = (currentRating: number) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRating(i)}
          style={{ cursor: "pointer", color: i <= currentRating ? "#FFD700" : "#D3D3D3" }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  // Calculate total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">{product.title}</h1>
      <div className="flex gap-8">
        <div className="w-1/2">
          <Image
            src={urlFor(product.image).url()}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2">
          <p className="text-lg font-semibold">${product.price}</p>
          {product.priceWithoutDiscount && (
            <p className="text-gray-500 line-through text-sm">${product.priceWithoutDiscount}</p>
          )}
          <p className="mt-4">{product.description}</p>

          {/* Display average rating */}
          <div className="mt-4">
            <span className="font-semibold">Average Rating: </span>
            <span>{averageRating.toFixed(1)} / 5</span>
            <div>{renderStars(averageRating)}</div>
          </div>

          {/* User rating */}
          <div className="mt-4">
            <span className="font-semibold">Your Rating: </span>
            {userRating ? (
              <div>{renderStars(userRating)}</div>
            ) : (
              <div>{renderStars(rating)}</div>
            )}
          </div>

          {/* Sale and New Arrival badges */}
          {product.isSale && (
            <span className="inline-block bg-red-500 text-white px-2 py-1 text-xs rounded mt-2">
              On Sale
            </span>
          )}
          {product.isNew && (
            <span className="inline-block bg-blue-500 text-white px-2 py-1 text-xs rounded mt-2 ml-2">
              New Arrival
            </span>
          )}

          {/* Add to Cart Button */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => removeFromCart(product)}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Remove from Cart
            </button>
          </div>

          {/* Add to Wishlist Button */}
          <button
            onClick={() => toggleWishlist(product)}
            className={`mt-4 px-6 py-3 rounded-lg ${
              isInWishlist ? "bg-gray-500" : "bg-yellow-500"
            } text-white hover:bg-${isInWishlist ? "gray-600" : "yellow-600"} transition`}
          >
            {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <ul>
          {cart.map((item: Product) => (
            <li key={item._id} className="flex justify-between items-center py-2">
              <p className="text-lg font-medium">{item.title}</p>
              <div className="flex items-center space-x-2">
                <span className="text-sm">Quantity: {item.quantity}</span>
                <button
                  onClick={() => removeFromCart(item)}
                  className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between">
          <p className="text-xl font-semibold">Total:</p>
          <p className="text-xl font-semibold">${calculateTotal().toFixed(2)}</p>
        </div>
        
        {/* Checkout Button */}
        <div className="mt-6">
        <Link href="/checkout">
  <button
    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
  >
    Proceed to Checkout
  </button>
</Link>
        </div>
      </div>
    </div>
  );
}
