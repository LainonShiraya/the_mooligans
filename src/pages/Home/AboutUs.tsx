import React from "react";
import styles from "./AboutUs.module.scss";

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
    desc: "Deck builder and community organizer",
    photo: "/assets/Tos/Tomi.png",
    facebook: "#facebook",
  },
  {
    name: "Grzes Ter",
    city: "Kraków",
    desc: "Deck builder and community organizer",
    photo: "/assets/Tos/Grzester.png",
    facebook: "#facebook",
  },
  {
    name: "Łukasz Faliszewski",
    city: "Poznań",
    desc: "Deck builder and community organizer",
    photo: "/assets/Tos/Fali.png",
    facebook: "#facebook",
  },
];
const PhotoGrid: React.FC = () => {
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
              Contact on Facebook
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutWrapper} id="about">
      <div className={styles.about}>
        <div className={styles.left}>
          <h1 className={styles.title}>Meet tournament organizators</h1>

          <p className={styles.subtitle}>
            Organizing competitive EDH tournaments across Poland.
          </p>

          <div className={styles.textBlock}>
            <p>
              We are a group of cEDH enthusiasts dedicated to building a
              competitive, inclusive and high-quality tournament scene in
              Poland.
            </p>
            <p>
              Our events are regularly held in Warsaw, Kraków and Poznań,
              supporting both local stores and the broader Commander community.
            </p>
            <p>
              We believe competitive play can still be social, friendly and
              welcoming — and we aim to showcase cEDH as the deepest multiplayer
              format Magic has to offer.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={`${styles.polaroid} ${styles.one}`}>
            <img src="/assets/photo_1.jpg" alt="Players at tournament" />
          </div>
          <div className={`${styles.polaroid} ${styles.two}`}>
            <img src="/assets/photo_1.jpg" alt="Cards on table" />
          </div>
          <div className={`${styles.polaroid} ${styles.three}`}>
            <img src="/assets/photo_1.jpg" alt="Event room" />
          </div>
        </div>
      </div>
      <PhotoGrid />
    </section>
  );
};
