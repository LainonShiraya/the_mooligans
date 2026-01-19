import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import { MissionSection } from "./MissionSection";
import { getHeroBackground } from "../../services/siteVisuals";
import { useTranslation } from "../../i18n/useTranslation";

const Hero: React.FC = () => {
  const [bg, setBg] = useState<string | null>(null);
  const { t } = useTranslation();
  useEffect(() => {
    getHeroBackground().then(setBg);
  }, []);

  return (
    <div
      className={styles.backgroundImage}
      style={{
        backgroundImage: bg
          ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${bg})`
          : `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`,
      }}
    >
      <div className={styles.hero}>
        <div className={styles.left}>
          <h1 className={styles.title}>{t.hero.title}</h1>
          <span>
            {" "}
            by{" "}
            <img
              src="/assets/logo.png"
              alt="Players at tournament"
              width="168px"
            />{" "}
          </span>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>

          <div className={styles.buttons}>
            <a
              className={`${styles.button} ${styles.primary}`}
              href="https://discord.gg/GVkKr2Tq3j"
              target="_blank"
              rel="noreferrer"
            >
              {t.hero.buttonJoin}
            </a>

            <a
              className={`${styles.button} ${styles.secondary}`}
              href="#events"
            >
              {t.hero.buttonEvents}
            </a>
          </div>
        </div>
      </div>
      <MissionSection />
    </div>
  );
};

export default Hero;
