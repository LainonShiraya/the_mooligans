import styles from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
  const handleScrollTo = (
    id: string,
    e?: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e?.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    const offsetTop = el.getBoundingClientRect().top + window.scrollY;
    const elementHeight = el.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollTo = offsetTop - (viewportHeight / 2 - elementHeight / 2);

    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.leftLogo}>
          <div className={styles.logoMark}></div>
          <span className={styles.logoText}>The Mooligans</span>
        </div>

        <div className={styles.navLinks}>
          <a href="#events" onClick={() => handleScrollTo("events")}>
            Events
          </a>
          <a href="#store" onClick={(e) => handleScrollTo("store", e)}>
            Store
          </a>
          <a href="#about" onClick={(e) => handleScrollTo("about", e)}>
            About Us
          </a>
          <a href="#tickets" onClick={(e) => handleScrollTo("tickets", e)}>
            Tickets
          </a>
          <a href="#rules" onClick={() => handleScrollTo("rules")}>
            Rules
          </a>
          <a
            href="#leaderboard"
            onClick={(e) => handleScrollTo("leaderboard", e)}
          >
            Leaderboard
          </a>
        </div>

        <div className={styles.supportButtonWrapper}>
          <a href="#patreon" className={styles.supportButton}>
            Support Us
          </a>
        </div>
      </nav>
    </header>
  );
};
