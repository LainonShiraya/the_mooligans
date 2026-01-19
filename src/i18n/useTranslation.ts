import { useLanguage } from "./LanguageContext";
import { en } from "./translations/en";
import { pl } from "./translations/pl";

export const useTranslation = () => {
  const { lang } = useLanguage();

  const translations = lang === "pl" ? pl : en;

  return { t: translations };
};