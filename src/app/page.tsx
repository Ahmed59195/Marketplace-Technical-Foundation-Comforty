import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Top from "@/components/Top";
import Explore from "@/components/Explore";
import Products from "@/components/Products";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const getProducts = async () => {
  const products = await client.fetch(
    `*[_type == "products"][0..15] {
      _id,
      title,
      price,
      priceWithoutDiscount,
      badge,
      "imageUrl": image.asset->url,
      category-> {
        _id,
        title
      },
      description,
      inventory,
      tags
    }`
  );

  return products;
};

export default async function Home() {
  const products = await getProducts();
  console.log(products);

  return (
    <div>
      <Hero />
      <Featured />
      <Top />
      <Explore />
      <Products />
      

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

        {/* Product Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: any) => {
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative">
                  <Image
                    src={urlFor(product.imageUrl).url()}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h2>
                  <p className="text-xl font-bold text-green-500 mt-2">${product.price}</p>
                  <button
                    className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
                  ><Link href='/shop'>Add to Cart</Link>
                    
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
