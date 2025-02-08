// utils/fetchProduct.ts
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  imageUrl: string;
  category: string;
  // Add any other fields that your product might have
}

export async function fetchProductData(id: string): Promise<Product | null> {
  const product = await client.fetch(
    `*[_type == "products" && _id == $id][0]`,
    { id }
  );
  if (!product) {
    notFound(); // Trigger a 404 if the product isn't found
  }
  return product;
}
