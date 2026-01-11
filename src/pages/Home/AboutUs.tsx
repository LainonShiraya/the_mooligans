import React from "react";
import styles from "./AboutUs.module.scss";

interface Person {
  name: string;
  city: string;
  desc: string;
  photo: string;
  facebook?: string; // optional Facebook link
}

const people: Person[] = [
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
    <div className={styles.gridContainer}>
      {people.map((person, index) => (
        <div key={index} className={styles.polaroid}>
          <img src={person.photo} alt={person.name} />
          <div className={styles.caption}>
            <h3>{person.name}</h3>
            <h4>{person.city}</h4>
            <p>{person.desc}</p>
            {person.facebook && (
              <a
                href={person.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Facebook Profile
              </a>
            )}
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
          <h1 className={styles.title}>About The Mooligans League</h1>

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
