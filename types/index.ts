// types/index.ts

export interface Product {
    _id: string;
    title: string;
    price: number;
    priceWithoutDiscount: number;
    badge: string | null;
    imageUrl: string;
    category: {
      _id: string;
      title: string;
    };
    description: string;
    inventory: number;
    tags: string[] | null;
    slug: {
      current: string;
    };
  }
  