// app/product/[id]/ProductDetailPage.tsx
import Image from "next/image";
import React from "react";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  imageUrl: string;
  category: string;
  // Add other product fields here
}

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Image src={product.imageUrl} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Badge: {product.badge}</p>
      {/* Render other product fields */}
    </div>
  );
};

export default ProductDetailPage;
