import { useState } from "react";
import styles from "./Navbar.module.scss";
import { useTranslation } from "../../i18n/useTranslation";

type Language = "pl" | "en";

export const Navbar: React.FC = () => {
  const [lang, setLang] = useState<Language>("en");
  const { t } = useTranslation();

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("the_mooligans_lang", newLang);
  };
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
          <img
            src="/assets/logo.png"
            alt="Players at tournament"
            width="164px"
          />
        </div>

        <div className={styles.navLinks}>
          <a href="#events" onClick={() => handleScrollTo("events")}>
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
          <a href="#rules" onClick={() => handleScrollTo("rules")}>
            {t.navbar.rules}
          </a>
          <a
            href="#leaderboard"
            onClick={(e) => handleScrollTo("leaderboard", e)}
          >
            {t.navbar.leaderboard}
          </a>
        </div>

        <div className={styles.supportButtonWrapper}>
          <a href="#patreon" className={styles.supportButton}>
            Support Us
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
      </nav>
    </header>
  );
};
