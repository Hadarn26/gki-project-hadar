"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProductById } from "../../utils/api";
import { useCart } from "../../contexts/CartContext";
import { useWishList } from "../../contexts/WishListContext";
import styles from "./page.module.css"; 

export default function ProductPage() {
  const params = useParams();
  const idParam = params?.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam;

  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useCart();
  const { addToWishList } = useWishList(); 

  useEffect(() => {
    if (id) {
      fetchProductById(id).then(setProduct);
    }
  }, [id]);

  if (!product) return <p className="container text-center p-8">Loading...</p>;

  const description = product.description || "No description available for this product.";

  return (
    <main className={styles.container}>
      <div className={styles['product-wrapper']}>
        <div className={styles['image-area']}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
        </div>

        <div className={styles.details}>
          <h1>{product.title}</h1>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          
          <p className={styles.description}>{description}</p>
          
          <div className={styles['button-group']}>
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                  quantity: 1,
                })
              }
              className={styles['add-to-cart']}
            >
              ADD TO CART
            </button>
            
            <button 
                onClick={() => addToWishList({ 
                    id: product.id, 
                    title: product.title, 
                    price: product.price, 
                    image: product.image 
                })}
                className={styles['wishlist-btn']}
            >
                <span style={{color: 'red'}}>♥</span> WishList
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}