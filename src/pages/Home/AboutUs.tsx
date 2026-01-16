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
          <h2 className={styles.title}>Meet tournament organizers</h2>

          <p className={styles.subtitle}>
            We are a group of Magic: The Gathering enthusiasts that have been
            involved in the competitive scene since early 2000'.
          </p>

          <div className={styles.textBlock}>
            <p>
              With raising popularity of Competitive Commander format among
              local playgroups we decided to unify Polish community and create
              inclusive and high-quality tournament scene in Poland.
            </p>
            <p>
              Our events are regularly held in Warsaw, Kraków and Poznań,
              supporting LGS's and increasing awareness of the format in broader
              M:TG community.
            </p>
            <p>
              We believe that competitive play can be social, friendly and
              welcoming.
            </p>
            <p>
              "One's ability to play the game shouldn't be measured by his
              ability to buy the cards, rather the skill and experience they are
              bringing to the table"
            </p>
            <p>Although Foiled out decks shuffle better ;)</p>
          </div>
        </div>
        {/* <div className={styles.right}>
          <div className={`${styles.polaroid} ${styles.one}`}>
            <img src="/assets/photo_1.jpg" alt="Players at tournament" />
          </div>
          <div className={`${styles.polaroid} ${styles.two}`}>
            <img src="/assets/photo_1.jpg" alt="Cards on table" />
          </div>
          <div className={`${styles.polaroid} ${styles.three}`}>
            <img src="/assets/photo_1.jpg" alt="Event room" />
          </div>
        </div> */}
      </div>
      <PhotoGrid />
    </section>
  );
};
