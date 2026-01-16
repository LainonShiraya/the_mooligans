import { useEffect, useState } from "react";
import TournamentCard from "./TournamentCard";
import styles from "./TournamentGrid.module.scss";
import { getTournaments } from "../../services/tournaments";
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

type Props2 = {
  city: string;
  cities: string[];
  ticketOnly: boolean;
  onCityChange: (city: string) => void;
  onTicketToggle: () => void;
};

export const TournamentFilters = ({
  city,
  cities,
  ticketOnly,
  onCityChange,
  onTicketToggle,
}: Props2) => {
  return (
    <div className={styles.filters}>
      <select
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        className={styles.citySelect}
      >
        <option value="all">All Cities</option>
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button
        onClick={onTicketToggle}
        className={`${styles.ticketButton} ${ticketOnly ? styles.active : ""}`}
      >
        🎟 &nbsp;Ticket Events
      </button>
    </div>
  );
};
const TournamentGrid = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTournaments()
      .then(setTournaments)
      .finally(() => setLoading(false));
  }, []);
  const [city, setCity] = useState("all");
  const [ticketOnly, setTicketOnly] = useState(false);

  const cities = Array.from(new Set(tournaments.map((t) => t.city)));

  const filteredTournaments = tournaments.filter((t) => {
    if (city !== "all" && t.city !== city) return false;
    if (ticketOnly && !t.hasTicket) return false;
    return true;
  });

  if (loading) return <p>Loading tournaments...</p>;
  return (
    <section className={styles.wrapper} id="#events">
      <h1 className={styles.title}>Upcoming Tournaments</h1>
      <p className={styles.lead}>
        Competitive EDH events across Poland. Battle for tickets, prizes, and
        leaderboard glory.
      </p>
      <div className={styles.filters}>
        <TournamentFilters
          city={city}
          cities={cities}
          ticketOnly={ticketOnly}
          onCityChange={setCity}
          onTicketToggle={() => setTicketOnly((v) => !v)}
        />
      </div>
      <div className={styles.grid}>
        {filteredTournaments.map((t) => (
          <TournamentCard key={t.id} tournament={t} />
        ))}
      </div>
    </section>
  );
};

export default TournamentGrid;
