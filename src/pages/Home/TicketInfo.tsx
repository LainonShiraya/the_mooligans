import React from "react";
import styles from "./TicketInfo.module.scss";

export const TicketInfo: React.FC = () => {
  return (
    <section className={styles.wrapper} id="tickets">
      <div className={styles.container}>
        <h1 className={styles.title}>How to Get a Ticket</h1>

        <p className={styles.lead}>
          Tickets grant entry into{" "}
          <a href="#europeanchampionship">cEDH European Championship </a>. You
          can earn them by performing well in qualifying tournaments across
          Poland.
        </p>

        <div className={styles.content}>
          <div className={styles.left}>
            <h2>How it Works</h2>

            <ul className={styles.list}>
              <li>There will be 10 qualifier tournaments this season.</li>
              <li>
                Each qualifier awards 1 Championship Ticket to the winner.
              </li>
              <li>
                If the winner already owns a ticket, it is passed down the
                bracket (to next highest placement).
              </li>
              <li>
                Ticket holders gain direct entry to the{" "}
                <a href="#europeanchampionship">
                  {" "}
                  European Championship event{" "}
                </a>
                .
              </li>
              <li>
                Winning a ticket also earns an exclusive commemorative token.
              </li>
              <li>Tickets are personal and cannot be transferred or sold.</li>
            </ul>

            <p className={styles.bodyText}>
              Tickets may be given to the smaller tournaments across the Poland
              to support diffrent communities and there might be more than 10
              tournaments this year. All information will be shown at this
              website at the Events panel and the social medias.
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
                Consistency matters, earn your place at the Seasonal
                Championship.
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
