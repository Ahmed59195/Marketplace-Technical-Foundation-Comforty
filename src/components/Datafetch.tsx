import { client } from '@/sanity/lib/client';
import React from 'react'

    const getProducts = async () => {
        const products = await client.fetch(`*[_type == "products"] {
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
      }
      `
        )
      
        return products
      }
      
      export default async function Home() {
      
      const products = await getProducts()
      console.log(products)

  return (
    <div>Datafetch</div>
  )
}
