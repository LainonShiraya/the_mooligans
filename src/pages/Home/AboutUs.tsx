import React from "react";
import styles from "./AboutUs.module.scss";
import { useTranslation } from "../../i18n/useTranslation";

interface Person {
  name: string;
  city: string;
  desc: string;
  photo: string;
  facebook?: string; // optional Facebook link
}

const organizers: Person[] = [
  {
    name: "Tomi Lachowski",
    city: "Warszawa",
    desc: "Deck builder and a turbo fanatic.",
    photo: "/assets/Tos/Tomi.png",
    facebook: "https://www.facebook.com/LachoSkable",
  },
  {
    name: "Grzes Ter",
    city: "Kraków",
    desc: "Deck builder and community organizer.",
    photo: "/assets/Tos/Grzester.png",
    facebook: "https://www.facebook.com/profile.php?id=1004320534",
  },
  {
    name: "Łukasz Faliszewski",
    city: "Poznań",
    desc: "Deck builder and community organizer.",
    photo: "/assets/Tos/Fali.png",
    facebook: "https://www.facebook.com/profile.php?id=100001359906527",
  },
];
const PhotoGrid: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.grid}>
      {organizers.map((o, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.photoWrapper}>
            <img src={o.photo} alt={o.name} className={styles.photo} />
          </div>

          <div className={styles.body}>
            <h3 className={styles.name}>{o.name}</h3>
            <p className={styles.city}>{o.city}</p>
            <p className={styles.desc}>{o.desc}</p>

            <a
              className={styles.link}
              href={o.facebook}
              target="_blank"
              rel="noreferrer"
            >
              {t.tournamentOrganizers.buttonText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.aboutWrapper} id="about">
      <div className={styles.about}>
        <div className={styles.left}>
          <h2 className={styles.title}>{t.tournamentOrganizers.title}</h2>

          <p className={styles.subtitle}>{t.tournamentOrganizers.subtitle}</p>

          <div className={styles.textBlock}>
            <p>{t.tournamentOrganizers.p1}</p>
            <p>{t.tournamentOrganizers.p2}</p>
            <p>{t.tournamentOrganizers.p3}</p>
          </div>
        </div>
      </div>
      <PhotoGrid />
    </section>
  );
};
