'use client'; // Make this a client component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For navigation (e.g., redirect after checkout)

type Product = {
  _id: string;
  title: string;
  price: number;
  quantity: number;
};

const CheckoutPage = () => {
  const [cart, setCart] = useState<Product[]>([]); // State for the cart items
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const router = useRouter();

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Calculate total price for the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle checkout
  const handleCheckout = () => {
    // Here you can integrate payment gateways, save the order, etc.
    alert("Order placed successfully!");
    
    // After the checkout, clear the cart (if you want)
    localStorage.setItem("cart", JSON.stringify([])); // Clear cart
    setCart([]); // Update cart state

    // Redirect to the order confirmation page
    router.push("/order-confirmation");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {/* Cart Summary */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item: Product) => (
              <li key={item._id} className="flex justify-between items-center py-2">
                <p className="text-lg font-medium">{item.title}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Quantity: {item.quantity}</span>
                  <span className="text-sm">Price: ${item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Total Price */}
        <div className="mt-4 flex justify-between">
          <p className="text-xl font-semibold">Total:</p>
          <p className="text-xl font-semibold">${calculateTotal().toFixed(2)}</p>
        </div>
      </div>

      {/* Shipping Details Form */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            type="text"
            name="name"
            value={shippingDetails.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="address"
            value={shippingDetails.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="city"
            value={shippingDetails.city}
            onChange={handleInputChange}
            placeholder="City"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="zip"
            value={shippingDetails.zip}
            onChange={handleInputChange}
            placeholder="ZIP Code"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </form>
      </div>

      {/* Checkout Button */}
      <div className="mt-6">
        <button
          onClick={handleCheckout}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Complete Purchase
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
