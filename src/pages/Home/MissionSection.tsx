import React from "react";
import styles from "./MissionSection.module.scss";
import { useTranslation } from "../../i18n/useTranslation";

export const MissionSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.mission}>
      <p className={styles.text}>{t.hero.mission}</p>
    </section>
  );
};
