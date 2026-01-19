import { useEffect, useState } from "react";
import TournamentCard from "./TournamentCard";
import styles from "./TournamentGrid.module.scss";
import { getTournaments } from "../../services/tournaments";
import { useTranslation } from "../../i18n/useTranslation";
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
  defaultCity: string;
  buttonText: string;
};

export const TournamentFilters = ({
  city,
  cities,
  ticketOnly,
  onCityChange,
  onTicketToggle,
  defaultCity,
  buttonText,
}: Props2) => {
  return (
    <div className={styles.filters}>
      <select
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        className={styles.citySelect}
      >
        <option value="all">{defaultCity}</option>
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
        🎟 &nbsp; {buttonText}
      </button>
    </div>
  );
};
const TournamentGrid = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

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
    <section className={styles.wrapper} id="events">
      <h1 className={styles.title}>{t.tournaments.title}</h1>
      <p className={styles.lead}>{t.tournaments.subtitle}</p>
      <div className={styles.filters}>
        <TournamentFilters
          city={city}
          cities={cities}
          ticketOnly={ticketOnly}
          onCityChange={setCity}
          onTicketToggle={() => setTicketOnly((v) => !v)}
          buttonText={t.tournaments.ticketEvents}
          defaultCity={t.tournaments.cities}
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
