"use client";
import { useWishList } from "../contexts/WishListContext";
import styles from "./page.module.css";

export default function WishListPage() {
  const { wishList, removeFromWishList } = useWishList();

  return (
    <main className={styles.container}>
      <h1>Wish List</h1>
      {wishList.length === 0 ? (
        <p>Your wish list is empty</p>
      ) : (
        <div className={styles.grid}>
          {wishList.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button onClick={() => removeFromWishList(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
