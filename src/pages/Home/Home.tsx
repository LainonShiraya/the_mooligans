import "./Home.scss";
import Hero from "./Hero";
import TournamentGrid from "./TournamentGrid";
import { Store } from "./Store";
import { AboutUs } from "./AboutUs";
import { Footer } from "./Footer";
import { TicketInfo } from "./TicketInfo";
import { RulesPage } from "./RulePage";
import { Navbar } from "./Navbar";
import { Leaderboard } from "./Leaderboard";
export type Tournament = {
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
// const mockTournaments: Tournament[] = [
//   {
//     id: "waw-001",
//     title: "cEDH Warsaw Open I",
//     city: "Warsaw",
//     date: "2026-02-08",
//     venue: "Strefa MTG Warsaw",
//     venueUrl: "https://maps.google.com?q=Warsaw+Strefa+MTG",
//     image: "/assets/events/warsaw_1.jpg",
//     hasTicket: true,
//     ticketsUrl: "https://topdeck.gg/event/waw-open-1",
//     detailsUrl: "https://topdeck.gg/event/waw-open-1",
//   },
//   {
//     id: "waw-002",
//     title: "The Mooligans League – Warsaw",
//     city: "Warsaw",
//     date: "2026-03-15",
//     venue: "Black Monk Games",
//     venueUrl: "https://maps.google.com?q=Black+Monk+Warsaw",
//     image: "/assets/events/warsaw_2.jpg",
//     hasTicket: false,
//     detailsUrl: "https://topdeck.gg/event/mooligans-warsaw",
//   },
//   {
//     id: "krk-001",
//     title: "Kraków cEDH Championship",
//     city: "Kraków",
//     date: "2026-04-12",
//     venue: "Hex LGS Kraków",
//     venueUrl: "https://maps.google.com?q=Hex+Krakow",
//     image: "/assets/mata.png",
//     hasTicket: true,
//     ticketsUrl: "https://topdeck.gg/event/krk-championship",
//     detailsUrl: "https://topdeck.gg/event/krk-championship",
//   },
//   {
//     id: "krk-002",
//     title: "cEDH Friday Night Kraków",
//     city: "Kraków",
//     date: "2026-05-09",
//     venue: "Mana Vault Café",
//     venueUrl: "https://maps.google.com?q=Mana+Vault+Krakow",
//     image: "/assets/events/krakow_2.jpg",
//     hasTicket: false,
//     detailsUrl: "https://topdeck.gg/event/krk-fnm",
//   },
//   {
//     id: "poz-001",
//     title: "Poznań Qualifier – Pact of Warsaw",
//     city: "Poznań",
//     date: "2026-06-06",
//     venue: "Centrum Kultury Poznań",
//     venueUrl: "https://maps.google.com?q=Poznan+Centrum+Kultury",
//     image: "/assets/events/poznan_1.jpg",
//     hasTicket: true,
//     ticketsUrl: "https://topdeck.gg/event/poznan-qualifier",
//     detailsUrl: "https://topdeck.gg/event/poznan-qualifier",
//   },
//   {
//     id: "poz-002",
//     title: "cEDH League Night Poznań",
//     city: "Poznań",
//     date: "2026-07-04",
//     venue: "Gildia Graczy",
//     venueUrl: "https://maps.google.com?q=Gildia+Graczy+Poznan",
//     image: "/assets/mata.png",
//     hasTicket: false,
//     detailsUrl: "https://topdeck.gg/event/poznan-league-night",
//   },
// ];
export default function Home() {
  return (
    <div className="backgroundTexture">
      <Navbar />
      <Hero />
      <TournamentGrid />
      <Store />
      <AboutUs />
      <TicketInfo />
      <RulesPage />
      <Leaderboard />
      <Footer />
    </div>
  );
}
