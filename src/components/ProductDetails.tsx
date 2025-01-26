// src/components/ProductDetails.tsx

'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';
import { useRouter } from 'next/navigation';

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
      <img src={product.imageUrl} alt={product.title} />

      <button onClick={handleAddToCart}>Add to Cart</button>

      {cartNotification && <p>Item added to cart!</p>}
    </div>
  );
};
