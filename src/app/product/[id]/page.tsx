// app/product/[id]/page.tsx
import { fetchProductData } from "@/utils/fetchProduct";  // Import the function
import ProductDetailPage from "./ProductDetailPage"; // Import the client component

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = await fetchProductData(id); // Fetch product data from the utility function
  
  if (!product) {
    return null; // Handle case where product is not found
  }

  return <ProductDetailPage product={product} />;
}
