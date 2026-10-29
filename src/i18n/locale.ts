export const LOCALES = ["de", "en"] as const;
export type Locale = (typeof LOCALES)[number];

/** German is the default and lives at "/"; English lives at "/en". */
export const DEFAULT_LOCALE: Locale = "de";

/** Languages that are live on the site, in the order the switcher shows them. */
export const ENABLED_LOCALES: readonly Locale[] = ["de", "en"];

/** True when visitors can choose between languages. */
export const MULTILINGUAL = ENABLED_LOCALES.length > 1;

/** A value that exists once per language. */
export type L<T> = Record<Locale, T>;

/** Shorthand for writing translations side by side: l("Hello", "Hallo"). */
export const l = <T>(en: T, de: T): L<T> => ({ en, de });

export function toLocale(param: string | undefined): Locale {
	return param === "en" && ENABLED_LOCALES.includes("en")
		? "en"
		: DEFAULT_LOCALE;
}

/** Value for the optional `{-$locale}` route param. */
export function localeParam(locale: Locale) {
	return locale === DEFAULT_LOCALE ? undefined : locale;
}
