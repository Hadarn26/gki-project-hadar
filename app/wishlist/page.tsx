"use client";
import { useWishList } from "../contexts/WishListContext";
import { useCart } from "../contexts/CartContext";
import styles from "./page.module.css";

export default function WishListPage() {
  const { wishList, removeFromWishList } = useWishList();
  const { addToCart } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart(item);
    removeFromWishList(item.id);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        My <span className={styles.highlight}>Wishlist</span>
      </h1>

      {wishList.length === 0 ? (
        <p className={styles.empty}>Your wishlist is empty ❤️</p>
      ) : (
        <div className={styles.grid}>
          {wishList.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.price}>${item.price}</p>

              <div className={styles.actions}>
                <button
                  className={styles.addBtn}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart 🛒
                </button>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromWishList(item.id)}
                >
                  Remove ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
