export const fetchProducts = async () => {
    const response = await fetch('https://giaic-hackathon-template-08.vercel.app/api/products'); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  };