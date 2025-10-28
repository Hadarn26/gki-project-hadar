"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductCard from "../../components/productCard/ProductCard";
import { fetchProductsByCategory } from "../../utils/api";

export default function CategoryPage() {
  const params = useParams() as { category?: string };
  const category = params.category;
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (category) {
      fetchProductsByCategory(category).then(data => setProducts(data));
    }
  }, [category]);

  return (
    <main className="container">
      <h1>{category?.toUpperCase()}</h1>
      <div className="grid">
        {products.map(product => (
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
