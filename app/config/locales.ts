// app/config/locales.ts
export const locales = ["en-US", "pl-PL"] as const;
export const defaultLocale = "en-US";

export type Locale = (typeof locales)[number];

// ✅ Dodaj funkcję validateLocale
export function validateLocale(input: string | undefined): Locale {
  if (locales.includes(input as Locale)) {
    return input as Locale;
  }
  return defaultLocale;
}
