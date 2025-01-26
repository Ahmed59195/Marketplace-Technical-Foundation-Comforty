"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useSearchParams } from "next/navigation"; // To get query params from the URL

type Product = {
  _id: number;
  title: string;
  price: number;
  image: string;
};

const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]); // Track the cart state
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const router = useRouter(); // Used for navigation to the checkout page

  useEffect(() => {
    const fetchProducts = async () => {
      const data: Product[] = [
        { _id: 1, title: "Library Stool Chair", price: 20, image: "Images/card (1).png" },
        { _id: 2, title: "Vintage Armchair", price: 40, image: "Images/card.png" },
        { _id: 3, title: "Ergonomic Office Chair", price: 50, image: "Images/Frame.png" },
        { _id: 4, title: "Modern Dining Chair", price: 35, image: "Images/Frame (1).png" },
        { _id: 5, title: "Reclining Lounge Chair", price: 60, image: "Images/Category (1).png" },
        { _id: 6, title: "Adjustable Desk Chair", price: 25, image: "Images/Category (2).png" },
        { _id: 7, title: "Classic Bar Stool", price: 30, image: "Images/Frame (1).png" },
        { _id: 8, title: "Sleek High Chair", price: 15, image: "Images/card (3).png" },
        { _id: 9, title: "Foldable Outdoor Chair", price: 10, image: "Images/Category (2).png" },
        { _id: 10, title: "Leather Recliner Chair", price: 150, image: "Images/Products (1).png" },
      ];
      setProducts(data);

      // Filter products based on the search query
      if (query) {
        setFilteredProducts(data.filter((product) => product.title.toLowerCase().includes(query.toLowerCase())));
      } else {
        setFilteredProducts(data);
      }
    };

    fetchProducts();

    // Load cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, [query]);

  // Add to Cart functionality
  const handleAddToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    if (!existingProduct) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      alert("Product added to cart!");
    } else {
      alert("This product is already in your cart!");
    }
  };

  // Remove from Cart functionality
  const handleRemoveFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  // Calculate total price for items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0); // Add up the prices
  };

  // Navigate to checkout page
  const handleCheckout = () => {
    if (cart.length > 0) {
      router.push("/checkout"); // Replace with your actual checkout page path
    } else {
      alert("Your cart is empty. Please add products to your cart before proceeding to checkout.");
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>

      {query && filteredProducts.length === 0 ? (
        <p>No products found for "{query}"</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded shadow-md">
              <div className="h-64 overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <h2 className="font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Cart Display */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <div className="space-y-4">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((product) => (
              <div key={product._id} className="flex justify-between items-center">
                <p>{product.title}</p>
                <p>${product.price}</p>
                <button
                  className="text-red-600"
                  onClick={() => handleRemoveFromCart(product._id)} // Remove item from cart
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <p className="text-xl font-semibold">Total:</p>
          <p className="text-xl font-semibold">${calculateTotal().toFixed(2)}</p>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-6">
        <button
          onClick={handleCheckout}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
