"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductCard from "../../components/productCard/ProductCard";
import { fetchProductsByCategory } from "../../utils/api";

export default function CategoryPage() {
  const params = useParams() as { category?: string };
  const urlCategory = params.category;
  const [products, setProducts] = useState<any[]>([]);

  const categoryMap: Record<string, string> = {
    mens: "men's clothing",
    womens: "women's clothing",
    jewelery: "jewelery",
    electronics: "electronics"
  };

  const apiCategory = urlCategory ? categoryMap[urlCategory] : "";

  useEffect(() => {
    if (apiCategory) {
      fetchProductsByCategory(apiCategory).then(data => setProducts(data));
    }
  }, [apiCategory]);

  const displayTitle = urlCategory
    ? urlCategory === "mens"
      ? "Men's Clothing"
      : urlCategory === "womens"
      ? "Women's Clothing"
      : urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1)
    : "";

  return (
    <main className="container">
      <h1>{displayTitle}</h1>
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
