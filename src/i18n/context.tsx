import { createContext, type ReactNode, useContext } from "react";
import type { Locale } from "./locale";
import { UI } from "./ui";

const LocaleContext = createContext<Locale>("en");

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
