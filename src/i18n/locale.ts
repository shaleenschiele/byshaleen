export const LOCALES = ["en"] as const;
export type Locale = (typeof LOCALES)[number];

/** A value that exists once per language. */
export type L<T> = Record<Locale, T>;

/** Shorthand for writing translations: l("Hello"). More languages go in as extra arguments. */
export const l = <T>(en: T): L<T> => ({ en });

/** The site is English only for now, served at "/". */
export function toLocale(_param?: string): Locale {
	return "en";
}

/** Value for the optional `{-$locale}` route param (always absent for English). */
export function localeParam(_locale: Locale) {
	return undefined;
}
