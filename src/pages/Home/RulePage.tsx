import React, { useState } from "react";
import styles from "./RulesPage.module.scss";
import { useTranslation } from "../../i18n/useTranslation";

interface RuleCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const RuleCard: React.FC<RuleCardProps> = ({ title, subtitle, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.card} ${open ? styles.open : ""}`}>
      <div className={styles.cardHeader} onClick={() => setOpen(!open)}>
        <div>
          <h3>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <span className={styles.icon}>{open ? "−" : "+"}</span>
      </div>

      {open && <div className={styles.cardBody}>{children}</div>}
    </div>
  );
};

export const RulesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapper} id="rules">
      <div className={styles.container}>
        <h1 className={styles.title}>{t.rules.title}</h1>
        <p className={styles.lead}>{t.rules.subtitle}</p>

        <div className={styles.warning}>
          <strong>⚠ Warning:</strong> {t.rules.warning}
        </div>

        <div className={styles.cards}>
          <RuleCard
            title={t.rules.rule1.title}
            subtitle={t.rules.rule1.subtitle}
          >
            <p>{t.rules.rule1.text1}</p>

            <ul>
              <li>{t.rules.rule1.p1}</li>
              <li>{t.rules.rule1.p2}</li>
              <li>{t.rules.rule1.p3}</li>
              <li>{t.rules.rule1.p4}</li>
              <li>{t.rules.rule1.p5}</li>
            </ul>

            <p>{t.rules.rule1.text2}</p>
          </RuleCard>

          <RuleCard
            title={t.rules.rule2.title}
            subtitle={t.rules.rule2.subtitle}
          >
            <p>{t.rules.rule2.text2}</p>

            <ul>
              <li>{t.rules.rule2.p1}</li>
              <li>{t.rules.rule2.p2}</li>
              <li>{t.rules.rule2.p3}</li>
              <li>{t.rules.rule2.p4}</li>
            </ul>

            <p>{t.rules.rule2.text2}</p>
          </RuleCard>

          <RuleCard
            title={t.rules.rule3.title}
            subtitle={t.rules.rule3.subtitle}
          >
            <a href=" https://juizes-mtg-portugal.github.io/">
              Rules: {t.rules.rule3.text1}
            </a>
          </RuleCard>
        </div>
      </div>
    </section>
  );
};
