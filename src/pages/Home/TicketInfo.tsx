import React from "react";
import styles from "./TicketInfo.module.scss";

export const TicketInfo: React.FC = () => {
  return (
    <section className={styles.wrapper} id="tickets">
      <div className={styles.container}>
        <h1 className={styles.title}>cEDH European Championship Tickets</h1>

        <p className={styles.lead}>
          Tickets earned during the regular cEDH Poland season grant entry into{" "}
          <a href="#europeanchampionship">cEDH European Championship </a>.
        </p>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>How it Works</h2>

            <ul className={styles.list}>
              <li>
                2026/2027 season will have minimum of 10 qualifier tournaments*
              </li>
              <li>
                Each tournament awards a minimum of 1 Championship ticket to the
                winner.
              </li>
              <li>
                If the winner is already an owner of the ticket, a chance to buy
                it from the winner is passed down to the next person with the
                highest standing.
              </li>
              <li>
                Winners on top of receiving the ticket, earn an exclusive
                commemorative token.
              </li>
              <li>
                Winning a ticket also earns an exclusive commemorative token.
              </li>
              <li>
                Tickets are personal and <b>cannot be transferred or sold.</b>
              </li>
            </ul>

            <p className={styles.bodyText}>
              *As the season progresses there might be tickets distributed for
              smaller tournaments across Poland to support local communities.
              This means that the final number of tournaments this season might
              change. All information will be shown on official website at the
              events section as well as official communication channels
              (Discord, Facebook)
            </p>

            <div className={styles.buttons}>
              <button className={styles.primary}>Upcoming Events</button>
              <button className={styles.secondary}>Join Discord</button>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.card}>
              <h3>Monthly Tournaments</h3>
              <p>Compete in events across Warsaw, Kraków and Poznań.</p>
            </div>

            <div className={styles.card}>
              <h3>Leaderboard</h3>
              <p>
                Consistency matters, earn a ticket by staying on top of the
                official cEDH Poland Leaderboard by the end of the season.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Every win counts</h3>
              <p>
                {" "}
                The chance to buy a ticket is passed down to first player at the
                standing without a ticket.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
