import React from "react";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h2>Our Partners & Sponsors</h2>

      <div className={styles.logoGrid}>
        <img src="/assets/sponsor_1.jpg" alt="Sponsor 1" />
        <img src="/assets/sponsor_1.jpg" alt="Sponsor 2" />
        <img src="/assets/sponsor_1.jpg" alt="Sponsor 3" />
        <img
          src="/assets/logo.png"
          alt="Players at tournament"
          width="168px"
        />{" "}
      </div>

      <p className={styles.copy}>© 2026 The Mooligans League — cEDH Poland</p>
    </footer>
  );
};
