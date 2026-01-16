import React from "react";
import styles from "./Store.module.scss";

export const Store: React.FC = () => {
  return (
    <section className={styles.mission} id="store">
      <h1 className={styles.text}>Pre Order</h1>
      <p className={styles.lead}>
        Want to support the community? Pre-orders help us organize better events
        for everyone.
      </p>
      <div className={styles.card}>
        <div className={styles.image} />
        <div className={styles.body}>
          <h4>Pakt Warszawski Playmat</h4>
          <p>do 10/10/2026</p>
          <p>20.00€</p>
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
    </section>
  );
};
