import { useState } from "react";
import styles from "./Navbar.module.scss";
import { useTranslation } from "../../i18n/useTranslation";

type Language = "pl" | "en";

export const Navbar: React.FC = () => {
  const [lang, setLang] = useState<Language>(
    (localStorage.getItem("the_mooligans_lang") as Language) || "pl",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("the_mooligans_lang", newLang);
  };

  const handleScrollTo = (
    id: string,
    e?: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e?.preventDefault();
    setMenuOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    const offsetTop = el.getBoundingClientRect().top + window.scrollY;
    const elementHeight = el.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollTo = offsetTop - (viewportHeight / 2 - elementHeight / 2);

    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  };

  return (
    <header className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div
          className={styles.leftLogo}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          <h4>cEDH Poland</h4>
        </div>

        {/* Desktop nav */}
        <div className={styles.desktopOnly}>
          <div className={styles.navLinks}>
            <a href="#events" onClick={(e) => handleScrollTo("events", e)}>
              {t.navbar.events}
            </a>
            <a href="#store" onClick={(e) => handleScrollTo("store", e)}>
              {t.navbar.store}
            </a>
            <a href="#about" onClick={(e) => handleScrollTo("about", e)}>
              {t.navbar.about}
            </a>
            <a href="#tickets" onClick={(e) => handleScrollTo("tickets", e)}>
              {t.navbar.tickets}
            </a>
            <a href="#rules" onClick={(e) => handleScrollTo("rules", e)}>
              {t.navbar.rules}
            </a>
            <a
              href="#leaderboard"
              onClick={(e) => handleScrollTo("leaderboard", e)}
            >
              {t.navbar.leaderboard}
            </a>
          </div>

          <div className={styles.ButtonWrapper}>
            <a href="#patreon" className={styles.supportButton}>
              {t.navbar.support}
            </a>
            <a
              href="https://www.cedheurope.com"
              className={styles.europeanChampionshipButton}
              target="_blank"
              rel="noreferrer"
            >
              cEDH European Championship
            </a>
          </div>

          <div className={styles.langSwitch}>
            <button
              className={lang === "pl" ? styles.active : ""}
              onClick={() => handleLanguageChange("pl")}
            >
              PL
            </button>
            <span className={styles.separator}>/</span>
            <button
              className={lang === "en" ? styles.active : ""}
              onClick={() => handleLanguageChange("en")}
            >
              ENG
            </button>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a onClick={(e) => handleScrollTo("events", e)}>{t.navbar.events}</a>
          <a onClick={(e) => handleScrollTo("store", e)}>{t.navbar.store}</a>
          <a onClick={(e) => handleScrollTo("about", e)}>{t.navbar.about}</a>
          <a onClick={(e) => handleScrollTo("tickets", e)}>
            {t.navbar.tickets}
          </a>
          <a onClick={(e) => handleScrollTo("rules", e)}>{t.navbar.rules}</a>
          <a onClick={(e) => handleScrollTo("leaderboard", e)}>
            {t.navbar.leaderboard}
          </a>

          <div className={styles.mobileButtons}>
            <a href="#patreon" className={styles.supportButton}>
              {t.navbar.support}
            </a>
            <a
              href="https://www.cedheurope.com"
              className={styles.europeanChampionshipButton}
              target="_blank"
              rel="noreferrer"
            >
              cEDH European Championship
            </a>
          </div>

          <div className={styles.langSwitch}>
            <button
              className={lang === "pl" ? styles.active : ""}
              onClick={() => handleLanguageChange("pl")}
            >
              PL
            </button>
            <span className={styles.separator}>/</span>
            <button
              className={lang === "en" ? styles.active : ""}
              onClick={() => handleLanguageChange("en")}
            >
              ENG
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
