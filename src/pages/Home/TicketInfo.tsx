import React from "react";
import styles from "./TicketInfo.module.scss";
import { useTranslation } from "../../i18n/useTranslation";

export const TicketInfo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapper} id="tickets">
      <div className={styles.container}>
        <h1 className={styles.title}>{t.tickets.title}</h1>

        <p className={styles.lead}>
          {t.tickets.subtitle}{" "}
          <a href="https://www.cedheurope.com" target="_blank">
            cEDH European Championship{" "}
          </a>
          .
        </p>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>{t.tickets.ticketInfo.title}</h2>

            <ul className={styles.list}>
              <li>{t.tickets.ticketInfo.rule1}</li>
              <li>{t.tickets.ticketInfo.rule2}</li>
              <li>{t.tickets.ticketInfo.rule3}</li>
              <li>{t.tickets.ticketInfo.rule4}</li>
              <li>{t.tickets.ticketInfo.rule5}</li>
              <li>
                {t.tickets.ticketInfo.rule6}{" "}
                <b>{t.tickets.ticketInfo.rule6Bold}</b>
              </li>
            </ul>

            <p className={styles.bodyText}>{t.tickets.ticketInfo.desc}</p>

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

          <div className={styles.right}>
            <div className={styles.card}>
              <h3>{t.tickets.cards.card1.title}</h3>
              <p>{t.tickets.cards.card1.subtitle}</p>
            </div>

            <div className={styles.card}>
              <h3>{t.tickets.cards.card2.title}</h3>
              <p>{t.tickets.cards.card2.subtitle}</p>
            </div>

            <div className={styles.card}>
              <h3>{t.tickets.cards.card3.title}</h3>
              <p> {t.tickets.cards.card3.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
