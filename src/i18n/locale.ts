export const LOCALES = ["en", "de"] as const;
export type Locale = (typeof LOCALES)[number];

/**
 * Languages that are live on the site. German is fully translated but switched
 * off for now: add "de" here to bring back the /de pages and the EN | DE button.
 */
export const ENABLED_LOCALES: readonly Locale[] = ["en"];

/** True when visitors can choose between languages. */
export const MULTILINGUAL = ENABLED_LOCALES.length > 1;

/** A value that exists once per language. */
export type L<T> = Record<Locale, T>;

/** Shorthand for writing translations side by side: l("Hello", "Hallo"). */
export const l = <T>(en: T, de: T): L<T> => ({ en, de });

/** English lives at "/", German at "/de". */
export function toLocale(param: string | undefined): Locale {
	return param === "de" && ENABLED_LOCALES.includes("de") ? "de" : "en";
}

/** Value for the optional `{-$locale}` route param. */
export function localeParam(locale: Locale) {
	return locale === "en" ? undefined : locale;
}
