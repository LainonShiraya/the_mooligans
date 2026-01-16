import React, { useState } from "react";
import styles from "./RulesPage.module.scss";

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
  return (
    <section className={styles.wrapper} id="rules">
      <div className={styles.container}>
        <h1 className={styles.title}>Rules</h1>
        <p className={styles.lead}>
          Official tournament rules and guidelines for cEDH events in Poland.
          These rules are applicable to all cEDH European Championship Qualifier
          events across Europe.
        </p>

        <div className={styles.warning}>
          <strong>⚠ Warning:</strong> This is an unofficial rules document
          written by independent judges. This is not official Wizards of the
          Coast documentation.
        </div>

        <div className={styles.cards}>
          <RuleCard
            title="Tournament Structure & Time Rules"
            subtitle="Number of rounds, time limits and play policy"
          >
            <p>
              Events are typically run using Swiss rounds followed by a top cut
              (4/8/10/16), depending on event size. Round pairings are random
              and based on points earned during the event.
            </p>

            <ul>
              <li>Standard round time: 75 minutes</li>
              <li>Chess clocks may be used at organizer discretion</li>
              <li>Intentional draws may be restricted depending on format</li>
              <li>
                Slow play is penalized — players must maintain reasonable pace
              </li>
              <li>
                Judge calls may result in time extensions or warnings as needed
              </li>
            </ul>

            <p>
              Additional rules on turn order, extra turns and end-of-round
              procedures follow Competitive REL guidance with the Multiplayer
              Addendum guidance which can be found here.
            </p>
          </RuleCard>

          <RuleCard
            title="Proxy Policy"
            subtitle="Use of printed or altered cards in tournaments"
          >
            <p>
              Proxies are allowed at most cEDH Poland events unless otherwise
              specified. Card representations must be clear, legible and
              unambiguous to all players and judges.
            </p>

            <ul>
              <li>High-quality printed proxies are strongly preferred</li>
              <li>
                All proxies must represent a single, specific tournament-legal
                card
              </li>
              <li>Deck lists must still be submitted accurately</li>
              <li>
                Proxies cannot be used to intentionally mark cards or gain
                mechanical advantage
              </li>
            </ul>

            <p>
              If a player is unsure about the legality of their deck, please
              reach out to one of the judges or TOs before the tournament for a
              quick deck check.
            </p>
          </RuleCard>

          <RuleCard
            title="Additional Tournament Policies"
            subtitle="Code of conduct, penalties and appeals"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              condimentum, erat at interdum feugiat, ipsum nibh tristique arcu,
              vitae tempor libero magna vitae augue.
            </p>

            <p>
              Donec aliquet, augue in vehicula cursus, lorem sem fermentum leo,
              eget vulputate dui dui eu nibh. In hac habitasse platea dictumst.
            </p>
          </RuleCard>
        </div>
      </div>
    </section>
  );
};
