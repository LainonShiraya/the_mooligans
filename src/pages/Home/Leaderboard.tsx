import React from "react";
import styles from "./Leaderboard.module.scss";
import { useTranslation } from "../../i18n/useTranslation";

interface PlayerRow {
  nickname: string;
  commander: string;
  tournaments: number;
  pointsPerTournament: number;
  overall: number;
  top4: number;
  wins: number;
}

const mockPlayers: PlayerRow[] = [
  {
    nickname: "ShadowMage",
    commander: "Najeela",
    tournaments: 7,
    pointsPerTournament: 9.1,
    overall: 64,
    top4: 4,
    wins: 2,
  },
  {
    nickname: "LotusLion",
    commander: "Kinnan",
    tournaments: 5,
    pointsPerTournament: 8.4,
    overall: 42,
    top4: 3,
    wins: 1,
  },
  {
    nickname: "GrimTutor",
    commander: "Rograkh & Silas",
    tournaments: 6,
    pointsPerTournament: 7.8,
    overall: 47,
    top4: 2,
    wins: 1,
  },
  {
    nickname: "ManaDork",
    commander: "Zur",
    tournaments: 3,
    pointsPerTournament: 10.0,
    overall: 30,
    top4: 2,
    wins: 1,
  },
  {
    nickname: "PolishPirate",
    commander: "Malcolm/Tana",
    tournaments: 4,
    pointsPerTournament: 7.5,
    overall: 30,
    top4: 1,
    wins: 0,
  },
  {
    nickname: "CracowCrusher",
    commander: "Korvold",
    tournaments: 8,
    pointsPerTournament: 6.4,
    overall: 51,
    top4: 3,
    wins: 0,
  },
  {
    nickname: "WarsawWizard",
    commander: "Tivit",
    tournaments: 9,
    pointsPerTournament: 5.9,
    overall: 53,
    top4: 2,
    wins: 0,
  },
  {
    nickname: "PoznanPioneer",
    commander: "Tevesh/Thrasios",
    tournaments: 2,
    pointsPerTournament: 11.5,
    overall: 23,
    top4: 1,
    wins: 1,
  },
  {
    nickname: "TokenLord",
    commander: "Chatterfang",
    tournaments: 4,
    pointsPerTournament: 6.8,
    overall: 27,
    top4: 1,
    wins: 0,
  },
  {
    nickname: "DocksideDave",
    commander: "Niv-Mizzet",
    tournaments: 3,
    pointsPerTournament: 9.3,
    overall: 28,
    top4: 1,
    wins: 1,
  },
];

export const Leaderboard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="leaderboard" className={styles.leaderboardSection}>
      <h1>{t.leaderboard.title}</h1>
      <p className={styles.lead}>{t.leaderboard.subtitle}</p>

      <div className={styles.tableWrapper}>
        <div className={styles.tableInner}>
          <table className={styles.leaderboardTable}>
            <thead>
              <tr>
                <th>Nickname</th>
                <th>Commander</th>
                <th>Tournaments Played</th>
                <th>Points/Tournament</th>
                <th>Overall Points</th>
                <th>Top 4</th>
                <th>Wins</th>
              </tr>
            </thead>
            <tbody>
              {mockPlayers.map((p, i) => (
                <tr key={i}>
                  <td>{p.nickname}</td>
                  <td>{p.commander}</td>
                  <td>{p.tournaments}</td>
                  <td>{p.pointsPerTournament}</td>
                  <td>{p.overall}</td>
                  <td>{p.top4}</td>
                  <td>{p.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.underDevOverlay}>
          {t.leaderboard.development}
        </div>
      </div>
      <div className={styles.explaination}>
        <h2>{t.leaderboard.rules.title}</h2>
        <ul className={styles.list}>
          <li>{t.leaderboard.rules.p1}</li>
          <li>{t.leaderboard.rules.p2}</li>
          <li>{t.leaderboard.rules.p3}</li>
          <li>{t.leaderboard.rules.p4}</li>{" "}
          <li>
            {" "}
            <b>
              {" "}
              <li>{t.leaderboard.rules.p5}</li>
            </b>
          </li>
        </ul>
      </div>
    </section>
  );
};
