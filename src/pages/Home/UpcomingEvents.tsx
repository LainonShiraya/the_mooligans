import React from "react";
import styles from "./UpcomingEvents.module.scss";

const mockEvents = {
  warsaw: [
    {
      title: "cEDH Monthly #12",
      date: "02/03/2026",
      venue: "centrum mtg",
      ticket: true,
    },
    { title: "Capital Commander Cup", date: "15/03/2026", venue: "TBA" },
  ],
  krakow: [{ title: "Smok Wawelski Open", date: "10/03/2026", venue: "TBA" }],
  poznan: [
    { title: "Poznań Power Tournament", date: "22/03/2026", venue: "TBA" },
  ],
};

const CityRow = ({ name, events }: { name: string; events: any[] }) => (
  <div className={styles.city}>
    <h2>{name}</h2>

    <div className={styles.eventsRow}>
      {events.map((e, i) => (
        <div
          className={`${styles.card} ${e.ticket ? styles.ticket : ""}`}
          key={i}
        >
          <div className={styles.image} />
          <div className={styles.body}>
            <h4>{e.title}</h4>
            <p>{e.date}</p>
            <p>{e.venue}</p>
            <a
              className={`${styles.button} ${styles.primary}`}
              href="https://discord.gg/P2DSgVGu"
              target="_blank"
              rel="noreferrer"
            >
              Tickets
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const UpcomingEvents: React.FC = () => {
  return (
    <section className={styles.wrapper} id="events">
      <h1>Upcoming Events</h1>

      <div className={styles.grid}>
        <CityRow name="Warsaw" events={mockEvents.warsaw} />
        <CityRow name="Kraków" events={mockEvents.krakow} />
        <CityRow name="Poznań" events={mockEvents.poznan} />
      </div>
    </section>
  );
};
