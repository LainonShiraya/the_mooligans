import { en } from "./translations/en";
import { pl } from "./translations/pl";

type Language = "pl" | "en";

export const useTranslation = () => {
  const stored = (localStorage.getItem("the_mooligans_lang") as Language) || "pl";

  const dict = stored === "pl" ? pl : en;

  return { t: dict, lang: stored };
};
