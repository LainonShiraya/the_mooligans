import React from "react";
import styles from "./UpcomingEvents.module.scss";
import stylesPlaceholder from "./UpcomingEventPlaceholder.module.scss";
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

const UpcomingEventPlaceholder: React.FC = () => {
  return (
    <div className={stylesPlaceholder.card}>
      <div className={stylesPlaceholder.imageArea}>
        <span className={stylesPlaceholder.question}>?</span>
      </div>

      <div className={stylesPlaceholder.body}>
        <h4 className={stylesPlaceholder.title}>
          More tournaments coming soon
        </h4>
        <p className={stylesPlaceholder.subtitle}>To Be Added</p>

        <button className={stylesPlaceholder.button} disabled>
          Tickets Unavailable
        </button>
      </div>

      <div className={stylesPlaceholder.overlay} />
    </div>
  );
};

const CityRow = ({ name, events }: { name: string; events: any[] }) => {
  const normalizedEvents = [
    ...events,
    ...Array(Math.max(0, 4 - events.length)).fill(null),
  ];
  return (
    <div className={styles.city}>
      <h2>{name}</h2>

      <div className={styles.eventsRow}>
        {normalizedEvents.map((e, i) =>
          e ? (
            <div
              className={`${styles.card} ${e.ticket ? styles.ticket : ""}`}
              key={i}
            >
              <div className={styles.image} />
              <div className={styles.body}>
                <h3>{e.title}</h3>
                <p>{e.date}</p>
                <p>
                  <a href="#venuegooglemaps">{e.venue}</a>
                </p>
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
          ) : (
            <UpcomingEventPlaceholder />
          )
        )}
      </div>
    </div>
  );
};

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
