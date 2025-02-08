import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key (use environment variables)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',  // Use the appropriate version here
});

export async function POST() {  // Removed the unused 'req' parameter
  try {
    // You can customize the payment amount and currency as needed
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000,  // Amount in cents ($50.00)
      currency: 'usd',
    });

    // Return the client secret to the frontend
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    // Handle any errors
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
