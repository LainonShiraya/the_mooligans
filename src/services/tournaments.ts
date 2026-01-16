import { fetchHygraph } from "../lib/hygraph";
import { GET_TOURNAMENTS } from "../queries/getTournaments";

type HygraphTournament = {
  id: string;
  title: string;
  city: string;
  date: string;
  venue: string;
  venueUrl: string;
  hasTicket: boolean;
  ticketsUrl?: string | null;
  detailsUrl: string;
  image: {
    url: string;
  };
};

export async function getTournaments(): Promise<any[]> {
  const data = await fetchHygraph<{
    tournaments: HygraphTournament[];
  }>(GET_TOURNAMENTS);

  return data.tournaments.map((t) => ({
    id: t.id,
    title: t.title,
    city: t.city,
    date: t.date,
    venue: t.venue,
    venueUrl: t.venueUrl,
    image: t.image.url,
    hasTicket: t.hasTicket,
    ticketsUrl: t.ticketsUrl ?? undefined,
    detailsUrl: t.detailsUrl,
  }));
}