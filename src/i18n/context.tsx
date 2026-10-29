import { createContext, type ReactNode, useContext } from "react";
import { DEFAULT_LOCALE, type Locale } from "./locale";
import { UI } from "./ui";

const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export function LocaleProvider({
	locale,
	children,
}: {
	locale: Locale;
	children: ReactNode;
}) {
	return (
		<LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
	);
}

export function useLocale() {
	return useContext(LocaleContext);
}

/** UI strings for the current language. */
export function useUi() {
	return UI[useLocale()];
}
