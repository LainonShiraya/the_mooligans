import React from "react";
import styles from "./Footer.module.scss";
import { useTranslation } from "../../i18n/useTranslation";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <h2>{t.footer.title}</h2>

      <div className={styles.logoGrid}>
        <img src="/assets/sponsor_1.jpg" alt="Sponsor 1" />
        <img src="/assets/gra_magic.svg" alt="Sponsor 3" />
        <img
          src="/assets/logo.png"
          alt="Players at tournament"
          width="168px"
        />{" "}
      </div>

      <p className={styles.copy}>{t.footer.copyright}</p>
    </footer>
  );
};
