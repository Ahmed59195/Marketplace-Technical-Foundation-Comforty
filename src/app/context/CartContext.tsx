import React, { createContext, useState, useContext, ReactNode } from 'react';

type Product = {
  _id: number;
  title: string;
  price: number;
  image: string;
};

type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  calculateTotal: () => number;
  getCartItemCount: () => number; // Get the total count of items in the cart
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    return storedCart;
  });

  // Add to Cart functionality
  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  // Remove from Cart functionality
  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Get the total count of items in the cart
  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotal, getCartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
