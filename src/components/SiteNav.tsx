import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLocale, useUi } from "#/i18n/context";
import { localeParam } from "#/i18n/locale";

export const NAV_IDS = [
	"about",
	"services",
	"projects",
	"references",
	"contact",
] as const;

/** Text links at the very top of the page (scrolls away with the hero). */
export function TopLinks() {
	const locale = useLocale();
	const ui = useUi();

	return (
		<nav
			aria-label={ui.nav.sections}
			className="pt-7 pr-20 pl-6 sm:px-28 sm:pt-9"
		>
			<ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 font-body text-[11px] tracking-[0.18em] text-ecru uppercase sm:gap-x-8 sm:text-xs">
				{NAV_IDS.map((id) => (
					<li key={id}>
						<Link
							to="/{-$locale}"
							params={{ locale: localeParam(locale) }}
							hash={id}
							className="underline-offset-4 hover:underline focus-visible:underline"
						>
							{ui.nav[id]}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

/** Hamburger button (top right, always visible) that opens a slide-in menu. */
export function MenuButton() {
	const locale = useLocale();
	const ui = useUi();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = previousOverflow;
		};
	}, [open]);

	const bar =
		"absolute left-1/2 h-px w-5 -translate-x-1/2 bg-current transition-all duration-300";

	return (
		<>
			<button
				type="button"
				aria-label={open ? ui.nav.closeMenu : ui.nav.openMenu}
				aria-expanded={open}
				aria-controls="site-menu"
				onClick={() => setOpen((v) => !v)}
				className="fixed top-5 right-5 z-50 h-12 w-12 rounded-full bg-wine text-ecru shadow-lg ring-1 ring-ecru/30 sm:top-7 sm:right-8"
			>
				<span
					aria-hidden="true"
					className={`${bar} ${open ? "top-1/2 rotate-45" : "top-[18px]"}`}
				/>
				<span
					aria-hidden="true"
					className={`${bar} top-1/2 ${open ? "opacity-0" : ""}`}
				/>
				<span
					aria-hidden="true"
					className={`${bar} ${open ? "top-1/2 -rotate-45" : "top-[30px]"}`}
				/>
			</button>

			<div
				aria-hidden="true"
				onClick={() => setOpen(false)}
				className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
					open ? "opacity-100" : "pointer-events-none opacity-0"
				}`}
			/>

			<nav
				id="site-menu"
				aria-label={ui.nav.mainMenu}
				className={`fixed inset-y-0 right-0 z-40 flex w-full max-w-md flex-col justify-center bg-wine px-10 text-cream transition-[transform,visibility] duration-300 ${
					open ? "visible translate-x-0" : "invisible translate-x-full"
				}`}
			>
				<ul className="space-y-6">
					{NAV_IDS.map((id) => (
						<li key={id}>
							<Link
								to="/{-$locale}"
								params={{ locale: localeParam(locale) }}
								hash={id}
								onClick={() => setOpen(false)}
								className="font-display text-4xl uppercase tracking-wide underline-offset-8 hover:underline focus-visible:underline sm:text-5xl"
							>
								{ui.nav[id]}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
