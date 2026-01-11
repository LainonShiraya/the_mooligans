import React from "react";
import styles from "./AboutUs.module.scss";

export const AboutUs: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.left}>
        <h1 className={styles.title}>About The Mooligans League</h1>

        <p className={styles.subtitle}>
          Organizing competitive EDH tournaments across Poland.
        </p>

        <div className={styles.textBlock}>
          <p>
            We are a group of cEDH enthusiasts dedicated to building a
            competitive, inclusive and high-quality tournament scene in Poland.
          </p>
          <p>
            Our events are regularly held in Warsaw, Kraków and Poznań,
            supporting both local stores and the broader Commander community.
          </p>
          <p>
            We believe competitive play can still be social, friendly and
            welcoming — and we aim to showcase cEDH as the deepest multiplayer
            format Magic has to offer.
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <div className={`${styles.polaroid} ${styles.one}`}>
          <img src="/assets/photo_1.jpg" alt="Players at tournament" />
        </div>
        <div className={`${styles.polaroid} ${styles.two}`}>
          <img src="/assets/photo_1.jpg" alt="Cards on table" />
        </div>
        <div className={`${styles.polaroid} ${styles.three}`}>
          <img src="/assets/photo_1.jpg" alt="Event room" />
        </div>
      </div>
    </section>
  );
};
