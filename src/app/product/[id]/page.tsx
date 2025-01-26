// app/product/[id]/page.tsx
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import ProductDetailPage from "./ProductDetailPage"; // Import the client component

// Fetching product data from Sanity based on ID
export async function fetchProductData(id: string) {
  const product = await client.fetch(
    `*[_type == "products" && _id == $id][0]`,
    { id }
  );
  if (!product) {
    notFound(); // Trigger a 404 if the product isn't found
  }
  return product;
}

// Server Component to fetch data and pass it to the client-side component
export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await fetchProductData(id); // Fetch product data from Sanity
  return <ProductDetailPage product={product} />;
}
