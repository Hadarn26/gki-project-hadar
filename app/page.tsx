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
    <main>
      <div className="hero-section" >
        <img src="/images/Screenshot 2025-10-29 102657.png" alt="Hero Image" />
      </div>

      <div className="container">
        <h2 className="section-title">Latest Products</h2>
        <div className="grid">
          {products.slice(0, 8).map(product => ( 
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
      </div>
    </main>
  );
}