import React, { useEffect, useState } from "react";
import styles from "./Store.module.scss";
import { getStoreItems } from "../../services/store";
import { useTranslation } from "../../i18n/useTranslation";

export const Store: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    getStoreItems().then(setItems);
  }, []);

  return (
    <section className={styles.mission} id="store">
      <h1 className={styles.text}>{t.store.title}</h1>
      <p className={styles.lead}>{t.store.subtitle}</p>
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
              {t.store.button}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};
