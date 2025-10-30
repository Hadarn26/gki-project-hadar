"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductCard from "../../components/productCard/ProductCard";
import { fetchProductsByCategory } from "../../utils/api";
import { categoryMap } from "./titleMap";
import { Product } from "../../types";

export default function CategoryPage() {
  const params = useParams() as { category?: string };
  const urlCategory = params.category;
  const [products, setProducts] = useState<Array<Product>>([]);
  const apiCategory = categoryMap[urlCategory as keyof typeof categoryMap];

  useEffect(() => { fetchProductsByCategory(apiCategory).then(data => setProducts(data)) }, [apiCategory]);

  const displayCategory = categoryMap[urlCategory as keyof typeof categoryMap];

  return (
    <main className="container">
      <h1>{displayCategory}</h1>
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
