import React from "react";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h3>Our Partners & Sponsors</h3>

      <div className={styles.logoGrid}>
        <img src="/assets/sponsor_1.png" alt="Sponsor 1" />
        <img src="/assets/sponsor_1.png" alt="Sponsor 2" />
        <img src="/assets/sponsor_1.png" alt="Sponsor 3" />
        <img src="/assets/sponsor_1.png" alt="Sponsor 4" />
      </div>

      <p className={styles.copy}>© 2026 The Mooligans League — cEDH Poland</p>
    </footer>
  );
};
