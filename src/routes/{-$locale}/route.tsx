import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { LanguageSwitcher } from "#/components/LanguageSwitcher";
import { LocaleProvider } from "#/i18n/context";
import { ENABLED_LOCALES, type Locale, toLocale } from "#/i18n/locale";

/** German lives at "/", English at "/en". Anything else, or a disabled language, is a 404. */
export const Route = createFileRoute("/{-$locale}")({
	beforeLoad: ({ params }) => {
		if (params.locale === undefined) return;
		if (
			params.locale !== "en" ||
			!ENABLED_LOCALES.includes(params.locale as Locale)
		) {
			throw notFound();
		}
	},
	component: LocaleLayout,
});

function LocaleLayout() {
	const { locale } = Route.useParams();

	return (
		<LocaleProvider locale={toLocale(locale)}>
			<LanguageSwitcher />
			<Outlet />
		</LocaleProvider>
	);
}
