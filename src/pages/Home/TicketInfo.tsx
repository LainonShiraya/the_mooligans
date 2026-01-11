import React from "react";
import styles from "./TicketInfo.module.scss";

export const TicketInfo: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>How to Get a Ticket</h1>

        <p className={styles.lead}>
          Tickets grant entry into our Seasonal Championship. You can earn them
          by performing well in qualifying tournaments across Poland.
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
                Ticket holders gain direct entry to the Seasonal Championship
                event.
              </li>
              <li>
                Winning a ticket also earns an exclusive commemorative token.
              </li>
              <li>Tickets are personal and cannot be transferred or sold.</li>
            </ul>

            <p className={styles.bodyText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ornare ligula arcu, nec luctus diam facilisis non. Praesent eu
              magna vitae velit hendrerit bibendum. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>

            <div className={styles.buttons}>
              <button className={styles.primary}>Upcoming Events</button>
              <button className={styles.secondary}>Join Discord</button>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.card}>
              <h3>Season Qualifiers</h3>
              <p>Compete in events across Warsaw, Kraków and Poznań.</p>
            </div>

            <div className={styles.card}>
              <h3>Championship Ticket</h3>
              <p>Earn your place at the Seasonal Championship.</p>
            </div>

            <div className={styles.card}>
              <h3>Exclusive Token</h3>
              <p>Winners receive a limited-edition event token.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
