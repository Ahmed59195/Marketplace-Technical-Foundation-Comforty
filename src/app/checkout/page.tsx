'use client'; // Make this a client component

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStripe, useElements, CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'; // Import loadStripe

// Load Stripe public key
const stripePromise = loadStripe('pk_test_51QpCyjPJe3mYu1TUFmHf0We3roWqblfd8p5MVPEfmsXeFnL9rG6CPtxn9McHWtCekgO0iClSyHD3lNZPUKygitYP00enj1gkCt'); // Use your Stripe public key here

type Product = {
  _id: string;
  title: string;
  price: number;
  quantity: number;
};

const CheckoutPage = () => {
  const [cart, setCart] = useState<Product[]>([]); // State for the cart items
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
  });
  const [clientSecret, setClientSecret] = useState<string | null>(null); // For payment intent secret
  const [isProcessing, setIsProcessing] = useState<boolean>(false); // Loading state for checkout button

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);

    // Create payment intent on mount
    const fetchClientSecret = async () => {
      try {
        const res = await fetch('/api/create-payment-intent', { method: 'POST' });
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error('Error fetching client secret:', error);
      }
    };

    fetchClientSecret();
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

  // Handle checkout process
  const handleCheckout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements || !clientSecret) {
      return; // Stripe.js not loaded or missing clientSecret
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      console.error('CardElement not found');
      return;
    }

    setIsProcessing(true); // Set processing state

    // Confirm the payment using Stripe's confirmCardPayment method
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: shippingDetails.name,
          address: {
            line1: shippingDetails.address,
            city: shippingDetails.city,
            postal_code: shippingDetails.zip,
          },
        },
      },
    });

    setIsProcessing(false); // Reset processing state after payment attempt

    if (error) {
      console.error('Payment failed', error);
      alert(`Payment failed: ${error.message}`); // Display error message to user
    } else if (paymentIntent?.status === 'succeeded') {
      console.log('Payment successful!');
      localStorage.setItem('cart', JSON.stringify([])); // Clear the cart
      setCart([]); // Update the cart state

      router.push('/order-confirmation'); // Redirect to the order confirmation page
    }
  };

  if (!clientSecret) {
    return <div>Loading...</div>; // Show loading if clientSecret is not available
  }

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
        <form onSubmit={handleCheckout} className="space-y-4">
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

      {/* Stripe Card Element */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        <div className="p-4 border rounded-lg shadow-lg">
          <CardElement className="w-full" />
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-6">
        <button
          type="submit" // Change to type="submit" to trigger form submission
          form="checkoutForm" // Bind the button to the form
          disabled={isProcessing}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50"
        >
          {isProcessing ? 'Processing...' : 'Complete Purchase'}
        </button>
      </div>
    </div>
  );
};

// Wrap the CheckoutPage component with Elements provider
export default function WrappedCheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}
