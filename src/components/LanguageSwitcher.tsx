import { Link, useLocation, useParams } from "@tanstack/react-router";
import { useLocale, useUi } from "#/i18n/context";
import {
	ENABLED_LOCALES,
	type Locale,
	localeParam,
	MULTILINGUAL,
} from "#/i18n/locale";

const LABELS: Record<Locale, string> = { en: "EN", de: "DE" };

/** Fixed pill in the top left corner: switches language on the same page. */
export function LanguageSwitcher() {
	const current = useLocale();
	const ui = useUi();
	const slug = useParams({ strict: false, select: (p) => p.slug });
	const hash = useLocation({ select: (location) => location.hash });

	if (!MULTILINGUAL) return null;

	return (
		<nav
			aria-label={ui.nav.language}
			className="fixed top-5 left-5 z-50 flex h-12 items-center gap-1 rounded-full bg-wine px-2 font-body text-xs font-semibold tracking-[0.18em] text-ecru shadow-lg ring-1 ring-ecru/30 sm:top-7 sm:left-8"
		>
			{ENABLED_LOCALES.map((locale) => {
				const className = `rounded-full px-3 py-2 ${
					locale === current
						? "bg-ecru text-wine"
						: "opacity-80 hover:opacity-100"
				}`;

				if (locale === current) {
					return (
						<span key={locale} aria-current="true" className={className}>
							{LABELS[locale]}
						</span>
					);
				}

				const linkProps = {
					hash,
					resetScroll: false,
					className,
					lang: locale,
					hrefLang: locale,
					"aria-label": locale === "de" ? "Deutsch" : "English",
				};

				return slug ? (
					<Link
						key={locale}
						to="/{-$locale}/projects/$slug"
						params={{ locale: localeParam(locale), slug }}
						{...linkProps}
					>
						{LABELS[locale]}
					</Link>
				) : (
					<Link
						key={locale}
						to="/{-$locale}"
						params={{ locale: localeParam(locale) }}
						{...linkProps}
					>
						{LABELS[locale]}
					</Link>
				);
			})}
		</nav>
	);
}
