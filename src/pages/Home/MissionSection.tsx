import React from "react";
import styles from "./MissionSection.module.scss";

export const MissionSection: React.FC = () => {
  return (
    <section className={styles.mission}>
      <p className={styles.text}>
        Our mission is to grow Polish cEDH scene by byilding a competitive,
        welcoming community and running tournaments across Warsaw, Kraków and
        Poznań.
      </p>
    </section>
  );
};
