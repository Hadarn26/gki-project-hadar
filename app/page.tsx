"use client";
// app/page.tsx
import { useEffect, useState } from "react";
import ProductCard from "./components/productCard/ProductCard";
import { fetchProducts } from "./utils/api";

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <main className="container">
      <h1>Latest Products</h1>
      <div className="grid">
        {products.slice(-8).map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </main>
  );
}
