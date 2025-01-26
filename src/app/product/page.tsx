import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Product = {
  _id: number;
  title: string;
  price: number;
  imageUrl: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

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
    }`,
  );

  return products;
};

export default async function Home() {
  const products = await getProducts();
  console.log(products);


// const products: Product[] = [
//   { id: 1, title: "Library Stool Chair", price: 20, image: "/Images/Category (2).png" },
//   {
//     id: 2,
//     title: "Vintage Armchair",
//     price: 40,
//     image: "/Images/card (1).png",
//     originalPrice: 60,
//   },
//   { id: 3, title: "Ergonomic Office Chair", price: 50, image: "/Images/Frame (1).png" },
//   { id: 4, title: "Modern Dining Chair", price: 35, image: "/Images/Category (1).png" },
//   {
//     id: 5,
//     title: "Reclining Lounge Chair",
//     price: 60,
//     image: "/Images/card (3).png",
//     isSale: true,
//   },
//   {
//     id: 6,
//     title: "Adjustable Desk Chair",
//     price: 25,
//     image: "/Images/card (4).png",
//     isNew: true,
//   },
//   { id: 7, title: "Classic Bar Stool", price: 30, image: "/Images/Category.png" },
//   {
//     id: 8,
//     title: "Sleek High Chair",
//     price: 15,
//     image: "/Images/category (1).png",
//     isSale: true,
//   },
//   { id: 9, title: "Foldable Outdoor Chair", price: 10, image: "/Images/item-category 1 (1).png" },
//   {
//     id: 10,
//     title: "Leather Recliner Chair",
//     price: 150,
//     image: "/Images/Frame.png",
//     isSale: true,
//     originalPrice: 200,
//   },
// ];

// export default function ProductList() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <Link href={`/product/${product._id}`}>
              
                <Image
                  src={urlFor(product.imageUrl).url()}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <p className="text-green-600 text-lg font-bold">
                    ${product.price}
                  </p>
                  {product.originalPrice && (
                    <p className="text-gray-500 line-through text-sm">
                      ${product.originalPrice}
                    </p>
                  )}
                </div>
                {product.isSale && (
                  <span className="inline-block bg-red-500 text-white px-2 py-1 text-xs rounded mt-2">
                    On Sale
                  </span>
                )}
                {product.isNew && (
                  <span className="inline-block bg-blue-500 text-white px-2 py-1 text-xs rounded mt-2 ml-2">
                    New Arrival
                  </span>
                )}
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


// import React from 'react'
// import Image from 'next/image'

// const Page = () => {
//   return (
//     <div>
//       {/* Title */}
//       <h1 className='font-bold text-2xl my-10 text-center'>All Products</h1>

//       {/* Product Images Section */}
//       <div className="mx-4 sm:mx-20">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
//           <div className="flex justify-center">
//             <Image src="/Images/Products.png" alt="Ergonomic Office Chair" height={377} width={312} />
//           </div>
//           <div className="flex justify-center">
//             <Image src="/Images/Products (1).png" alt="Modern Lounge Chair" height={377} width={312} />
//           </div>
//           <div className="flex justify-center">
//             <Image src="/Images/Products (2).png" alt="Executive Desk Chair" height={377} width={312} />
//           </div>
//           <div className="flex justify-center">
//             <Image src="/Images/Products (3).png" alt="Comfy Recliner Chair" height={377} width={312} />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 mt-10">
//           <div className="flex justify-center">
//             <Image src="/Images/Product Image.png" alt="Stylish Office Chair" height={377} width={312} />
//           </div>
//           <div className="flex justify-center">
//             <Image src="/Images/Category.png" alt="Adjustable Chair" height={377} width={312} />
//           </div>
//           <div className="flex justify-center">
//             <Image src="/Images/Category (2).png" alt="Ergonomic Gaming Chair" height={377} width={312} />
//           </div>
//           <div className="flex justify-center">
//             <Image src="/Images/card (3).png" alt="Reclining Leather Chair" height={377} width={312} />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Page;