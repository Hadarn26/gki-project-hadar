// /src/utils/api.ts
export const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export const fetchProductById = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};

export const fetchProductsByCategory = async (category: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  return res.json();
};
