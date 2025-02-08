'use client'; // Ensure this is a client-side component

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // To handle routing (e.g., redirecting back to the home page)
import { useSearchParams } from 'next/navigation'; // Use for getting query params in app directory

type Product = {
  _id: string;
  title: string;
  price: number;
  quantity: number;
};

const OrderConfirmationPage = () => {
  const [cart, setCart] = useState<Product[]>([]); // State for storing cart items
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
  });

  const router = useRouter();
  const searchParams = useSearchParams(); // Hook to get query parameters

  // Load cart and shipping details from query parameters
  useEffect(() => {
    const cartParam = searchParams.get('cart');
    const shippingDetailsParam = searchParams.get('shippingDetails');

    if (cartParam && shippingDetailsParam) {
      // Parse cart and shipping details from query params
      setCart(JSON.parse(cartParam));
      setShippingDetails(JSON.parse(shippingDetailsParam));
    } else {
      // Handle missing query parameters (optional)
      console.warn('Cart or shipping details are missing.');
    }
  }, [searchParams]);

  // Calculate total price of the order
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Order Confirmation</h1>

      {/* Order Summary */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Thank You for Your Order!</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">Shipping Information</h3>
          <p><strong>Name:</strong> {shippingDetails.name || 'N/A'}</p>
          <p><strong>Address:</strong> {shippingDetails.address || 'N/A'}</p>
          <p><strong>City:</strong> {shippingDetails.city || 'N/A'}</p>
          <p><strong>ZIP Code:</strong> {shippingDetails.zip || 'N/A'}</p>
        </div>

        {/* Cart Summary */}
        <h3 className="text-lg font-semibold mb-2">Order Details</h3>
        <ul>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item: Product) => (
              <li key={item._id} className="flex justify-between items-center py-2">
                <p className="text-lg font-medium">{item.title}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Quantity: {item.quantity}</span>
                  <span className="text-sm">Price: ${item.price}</span>
                </div>
              </li>
            ))
          )}
        </ul>

        {/* Total Price */}
        <div className="mt-4 flex justify-between">
          <p className="text-xl font-semibold">Total:</p>
          <p className="text-xl font-semibold">${calculateTotal().toFixed(2)}</p>
        </div>
      </div>

      {/* Order Confirmation Message */}
      <div className="mt-8 text-center">
        <p className="text-xl font-semibold mb-4">Your order has been successfully placed!</p>
        <p>We will send you an email confirmation shortly.</p>
      </div>

      {/* Button to return to Home */}
      <div className="mt-6 text-center">
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
