// components/CheckoutForm.tsx
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";

// Load your Stripe public key here
const stripePromise = loadStripe("pk_test_51QpCyjPJe3mYu1TUFmHf0We3roWqblfd8p5MVPEfmsXeFnL9rG6CPtxn9McHWtCekgO0iClSyHD3lNZPUKygitYP00enj1gkCt");

const CheckoutForm: React.FC = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  useEffect(() => {
    // Fetch the PaymentIntent client secret from your backend
    const fetchClientSecret = async () => {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
      });
      const data = await res.json();
      setClientSecret(data.clientSecret);
    };
    fetchClientSecret();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return; // Ensure that stripe.js has loaded
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return; // Ensure the CardElement exists
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
      },
    });

    if (error) {
      console.error("Payment failed", error);
    } else if (paymentIntent.status === "succeeded") {
      router.push("/success");
    }
  };

  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div id="card-element">
        {/* CardElement will be rendered here */}
        <CardElement />
      </div>
      <button type="submit">Pay</button>
    </form>
  );
};

// Wrap CheckoutForm in Elements component with stripePromise
const CheckoutFormWrapper: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default CheckoutFormWrapper;
