import React, { useEffect, useState } from "react";
import styles from "./Store.module.scss";
import { getStoreItems } from "../../services/store";

export const Store: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    getStoreItems().then(setItems);
  }, []);

  return (
    <section className={styles.mission} id="store">
      <h1 className={styles.text}>Pre Order</h1>
      <p className={styles.lead}>
        Want to support the community? Pre-orders help us organize better events
        for everyone.
      </p>
      {items.map((item) => (
        <div className={styles.card}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className={styles.body}>
            <h4>{item.name}</h4>
            <p>do {item.date}</p>
            <p>{item.price}€</p>
            <a
              className={`${styles.button} ${styles.primary}`}
              href="https://discord.gg/P2DSgVGu"
              target="_blank"
              rel="noreferrer"
            >
              Buy
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};
