import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { LocaleProvider } from "#/i18n/context";
import { toLocale } from "#/i18n/locale";

/** Only English is live ("/"). Any language prefix is a 404 until more languages are enabled. */
export const Route = createFileRoute("/{-$locale}")({
	beforeLoad: ({ params }) => {
		if (params.locale !== undefined) throw notFound();
	},
	component: LocaleLayout,
});

function LocaleLayout() {
	const { locale } = Route.useParams();

	return (
		<LocaleProvider locale={toLocale(locale)}>
			<Outlet />
		</LocaleProvider>
	);
}
