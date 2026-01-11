import React from "react";
import styles from "./MissionSection.module.scss";

export const MissionSection: React.FC = () => {
  return (
    <section className={styles.mission}>
      <p className={styles.text}>
        Our mission is to grow the cEDH community in Poland — building a
        competitive, welcoming environment and delivering high-quality
        tournaments across Warsaw, Kraków and Poznań.
      </p>
    </section>
  );
};
