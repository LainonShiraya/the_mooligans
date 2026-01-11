import "./Home.scss";
import Hero from "./Hero";
import { UpcomingEvents } from "./UpcomingEvents";
import { Store } from "./Store";
import { AboutUs } from "./AboutUs";
import { Footer } from "./Footer";
import { TicketInfo } from "./TicketInfo";
import { RulesPage } from "./RulePage";
import { Navbar } from "./Navbar";
import { Leaderboard } from "./Leaderboard";

export default function Home() {
  return (
    <div className="backgroundTexture">
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <Store />
      <AboutUs />
      <TicketInfo />
      <RulesPage />
      <Leaderboard />
      <Footer />
    </div>
  );
}
