import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/**
 * LANGUAGE SYSTEM
 * ---------------------------------------------------------------
 * Only English + Japanese are shipped in this prototype.
 * To add a language later (VS Code):
 *   1. Add its code to LOCALES below (e.g. { code: "vi", label: "Tiáº¿ng Viá»‡t" })
 *   2. Add the matching key to every `Localized` object in src/lib/dictionary.ts
 *      and src/data/*.ts. Missing keys fall back to English automatically.
 */

export const LOCALES = [
  { code: "en", label: "English", short: "EN" },
  { code: "ja", label: "日本語", short: "JP" },
  { code: "vi", label: "Tiếng Việt", short: "VN" },
  { code: "zh", label: "中文", short: "CN" },
  { code: "ko", label: "한국어", short: "KR" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "ru", label: "Русский", short: "RU" },

] as const;

export type Lang = (typeof LOCALES)[number]["code"];

/** A translatable value. `en` is required and acts as the fallback. */
export type Localized<T = string> = { en: T } & Partial<Record<Lang, T>>;

export function pick<T>(value: Localized<T>, lang: Lang): T {
  const result = value[lang] ?? value.en;
  
 
  if (typeof result === "string") {
    return result.normalize("NFC") as T;
  }
  
  return result as T;
}
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: <T>(v: Localized<T>) => T };

const LangContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (v) => v.en,
});

const STORAGE_KEY = "nishitama.lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored && LOCALES.some((item) => item.code === stored)) {
    setLangState(stored);
  }
}, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: (v) => pick(v, lang) }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}






