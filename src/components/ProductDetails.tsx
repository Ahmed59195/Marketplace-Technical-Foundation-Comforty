// src/components/ProductDetails.tsx

'use client';

import { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Product = {
  _id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  imageUrl: string;
};



interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { addToCart } = useCart();
  const router = useRouter(); // Used for navigation
  const [cartNotification, setCartNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setCartNotification(true);

    // Redirect to the Cart page after 1 second
    setTimeout(() => {
      setCartNotification(false);
      router.push('/cart'); // Redirect to the cart page
    }, 1000);
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Image src={product.imageUrl} alt={product.title} />

      <button onClick={handleAddToCart}>Add to Cart</button>

      {cartNotification && <p>Item added to cart!</p>}
    </div>
  );
};
