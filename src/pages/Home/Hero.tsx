import React from "react";
import styles from "./Hero.module.scss";
import { MissionSection } from "./MissionSection";

const Hero: React.FC = () => {
  return (
    <div className={styles.backgroundImage}>
      <div className={styles.hero}>
        <div className={styles.left}>
          <h1 className={styles.title}>Polish cEDH Championship</h1>
          <span>
            {" "}
            by{" "}
            <img
              src="/assets/logo.png"
              alt="Players at tournament"
              width="168px"
            />{" "}
          </span>
          <p className={styles.subtitle}>
            Competitive EDH tournaments across Poland
          </p>

          <div className={styles.buttons}>
            <a
              className={`${styles.button} ${styles.primary}`}
              href="https://discord.gg/P2DSgVGu"
              target="_blank"
              rel="noreferrer"
            >
              Join Discord
            </a>

            <a
              className={`${styles.button} ${styles.secondary}`}
              href="#events"
            >
              Upcoming Events
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={`${styles.polaroid} ${styles.one}`}>
            <img src="/assets/photo_1.jpg" alt="polaroid 1" />
          </div>

          <div className={`${styles.polaroid} ${styles.two}`}>
            <img src="/assets/photo_2.jpg" alt="polaroid 2" />
          </div>

          <div className={`${styles.polaroid} ${styles.three}`}>
            <img src="/assets/photo_3.jpg" alt="polaroid 3" />
          </div>
        </div>
      </div>
      <MissionSection />
    </div>
  );
};

export default Hero;
