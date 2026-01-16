import styles from "./TournamentCard.module.scss";

type Tournament = {
  id: string;
  title: string;
  city: "Warsaw" | "Kraków" | "Poznań";
  date: string; // ISO string
  venue: string;
  venueUrl: string;
  image: string;
  hasTicket: boolean;
  ticketsUrl?: string;
  detailsUrl: string;
};
type Props = {
  tournament: Tournament;
};

const TournamentCard = ({ tournament }: Props) => {
  return (
    <div
      className={`${styles.card} ${tournament.hasTicket ? styles.ticket : ""}`}
    >
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${tournament.image})` }}
      >
        {tournament.hasTicket && (
          <span className={styles.ticketBadge}>🎟 QUALIFIER</span>
        )}
      </div>

      <div className={styles.body}>
        <h2>{tournament.title}</h2>
        <div className={styles.separator}>
          <p className={styles.date}>📍 {tournament.date}</p>

          <a
            href={tournament.venueUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.venue}
          >
            {tournament.venue}
          </a>

          <div className={styles.actions}>
            {tournament.ticketsUrl ? (
              <a
                className={`${styles.button} ${styles.primary}`}
                href={tournament.ticketsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Tickets
              </a>
            ) : (
              <button
                className={`${styles.button} ${styles.primary} ${styles.red}`}
              >
                Tickets
              </button>
            )}

            <a
              className={`${styles.button} ${styles.secondary}`}
              href={tournament.detailsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
