import { createFileRoute } from "@tanstack/react-router";
import type { SVGProps } from "react";
import { ProjectsSection } from "#/components/ProjectsSection";
import { Services } from "#/components/Services";
import { MenuButton, TopLinks } from "#/components/SiteNav";
import { TESTIMONIALS, type Testimonial } from "#/data/testimonials";
import { useLocale, useUi } from "#/i18n/context";
import { type Locale, toLocale } from "#/i18n/locale";
import { UI } from "#/i18n/ui";

export const Route = createFileRoute("/{-$locale}/")({
	head: ({ params }) => {
		const { meta } = UI[toLocale(params.locale)];
		return {
			meta: [
				{ title: meta.title },
				{ name: "description", content: meta.description },
			],
		};
	},
	component: Home,
});

function Home() {
	return (
		<main className="bg-cream font-body text-ink">
			<MenuButton />
			<Hero />
			<About />
			<Services />
			<ProjectsSection />
			<Testimonials />
			<ContactFooter />
		</main>
	);
}

function Hero() {
	const ui = useUi();

	return (
		<section
			id="top"
			className="group relative min-h-[max(100svh,36rem)] overflow-hidden bg-ink text-warm [--hero-fs:clamp(3rem,15vw,4.5rem)] sm:[--hero-fs:clamp(2rem,8.4vw,8.5rem)]"
		>
			<img
				src="/images/hero-sofa.webp"
				alt={ui.hero.alt}
				className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out motion-safe:group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/45" />

			<header className="absolute inset-x-0 top-0 z-20">
				<TopLinks />
				<div className="mx-6 mt-8 hidden items-center justify-between gap-4 border-y border-warm/40 py-2 font-body text-[10px] tracking-[0.25em] uppercase sm:mx-10 sm:flex lg:mx-16">
					<span className="font-semibold">by.shaleen</span>
					<span className="hidden sm:inline">{ui.hero.masthead.center}</span>
					<span>{ui.hero.masthead.right}</span>
				</div>
			</header>

			<div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
				<p className="mb-5 font-display text-sm tracking-[0.16em] text-warm/90 sm:hidden">
					{ui.hero.kicker}
				</p>
				<h1 className="text-center font-display text-[length:var(--hero-fs)] leading-[0.86]">
					{ui.hero.lines.map((line) => (
						<span
							key={line}
							className="block font-light tracking-[-0.01em] uppercase sm:whitespace-nowrap"
						>
							{line}
						</span>
					))}
					<span className="mt-[0.02em] -translate-y-[0.05em] block text-[0.85em] font-normal leading-none text-cream italic">
						{ui.hero.accent}
					</span>
				</h1>
			</div>

			<aside className="absolute right-6 bottom-10 z-10 hidden max-w-[15rem] sm:block border border-warm/12 bg-warm/10 px-4 py-3 text-warm/80 backdrop-blur-sm sm:right-10 sm:bottom-14 lg:right-16">
				<p className="font-body text-[9px] font-medium tracking-[0.22em] uppercase opacity-80">
					{ui.hero.kicker}
				</p>
				<p className="mt-1.5 font-display text-base leading-snug italic">
					{ui.hero.blurb}
				</p>
			</aside>
		</section>
	);
}

function About() {
	const ui = useUi();

	return (
		<section
			id="about"
			className="bg-olive px-6 py-20 sm:px-10 md:py-28 lg:px-16"
		>
			<div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
				<div className="group aspect-[5/6] w-full overflow-hidden">
					<img
						src="/images/about-portrait.webp"
						alt={ui.about.alt}
						className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
					/>
				</div>

				<div className="text-wine">
					<h2 className="font-display text-5xl uppercase tracking-wide sm:text-6xl">
						{ui.about.heading}
					</h2>

					<div className="body-copy mt-8 space-y-6">
						{ui.about.paragraphs.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

/** Opening quotation mark per language (English “…”). */
const OPENING_QUOTE: Record<Locale, string> = { en: "“" };

function Testimonials() {
	const ui = useUi();
	const featured = TESTIMONIALS.find((testimonial) => testimonial.featured);
	const rest = TESTIMONIALS.filter((testimonial) => !testimonial.featured);

	return (
		<section
			id="references"
			className="bg-warm px-6 py-24 text-wine sm:px-10 md:py-32 lg:px-16"
		>
			<div className="mx-auto max-w-6xl">
				<h2 className="font-display text-5xl tracking-wide uppercase sm:text-6xl">
					{ui.references.heading}
				</h2>

				<div className="mt-14 border-t border-wine/30 pt-12 md:pt-16">
					{featured && <FeaturedQuote testimonial={featured} />}
				</div>

				<div className="mt-12 grid gap-12 border-t border-wine/30 pt-12 max-md:[&>figure:not(:first-child)]:border-t max-md:[&>figure:not(:first-child)]:border-wine/30 max-md:[&>figure:not(:first-child)]:pt-12 md:mt-16 md:grid-cols-2 md:gap-16 md:pt-16">
					{rest.map((testimonial, i) => (
						<PlainQuote
							key={testimonial.names}
							testimonial={testimonial}
							index={i + 2}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function Attribution({
	testimonial,
	index,
}: {
	testimonial: Testimonial;
	index: number;
}) {
	const locale = useLocale();

	return (
		<figcaption>
			<span className="font-display text-lg opacity-50">
				{String(index).padStart(2, "0")}
			</span>
			<p className="mt-2 font-body text-xs font-semibold tracking-[0.18em] uppercase">
				{testimonial.names}
			</p>
			<p className="mt-1 font-body text-xs tracking-[0.12em] uppercase opacity-60">
				{testimonial.project[locale]}
			</p>
		</figcaption>
	);
}

function FeaturedQuote({ testimonial }: { testimonial: Testimonial }) {
	const locale = useLocale();

	return (
		<figure className="grid gap-8 md:grid-cols-12 md:gap-16">
			<div className="order-2 md:order-1 md:col-span-3">
				<Attribution testimonial={testimonial} index={1} />
			</div>
			<blockquote className="order-1 md:order-2 md:col-span-9">
				<span
					aria-hidden="true"
					className="block font-display text-6xl leading-none opacity-30 sm:text-7xl md:text-8xl"
				>
					{OPENING_QUOTE[locale]}
				</span>
				<p className="-mt-3 font-display text-xl italic leading-snug sm:-mt-6 sm:text-3xl sm:leading-[1.25] md:-mt-8 md:text-4xl">
					{testimonial.quote[locale]}
				</p>
			</blockquote>
		</figure>
	);
}

function PlainQuote({
	testimonial,
	index,
}: {
	testimonial: Testimonial;
	index: number;
}) {
	const locale = useLocale();

	return (
		<figure className="flex flex-col gap-8">
			<blockquote>
				<span
					aria-hidden="true"
					className="block font-display text-6xl leading-none opacity-30"
				>
					{OPENING_QUOTE[locale]}
				</span>
				<p className="-mt-3 font-display text-xl italic leading-snug sm:text-2xl">
					{testimonial.quote[locale]}
				</p>
			</blockquote>
			<Attribution testimonial={testimonial} index={index} />
		</figure>
	);
}

function ContactFooter() {
	const ui = useUi();

	return (
		<section
			id="contact"
			className="group relative flex min-h-[85vh] flex-col justify-between overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
		>
			<img
				src="/images/footer-bookshelf.webp"
				alt={ui.contact.alt}
				className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out motion-safe:group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-wine-dark/30 to-black/55" />

			<div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 py-16 text-center text-ecru">
				<h2 className="font-display text-4xl uppercase leading-tight tracking-wide sm:text-5xl md:text-6xl">
					{ui.contact.heading}
				</h2>
				<a
					href="mailto:shaleen.schiele@gmail.com"
					className="rounded-full border border-ecru px-10 py-4 font-body text-base font-semibold underline underline-offset-4"
				>
					{ui.contact.cta}
				</a>
			</div>

			<div className="relative z-10 flex flex-col gap-6 text-ecru sm:flex-row sm:items-center sm:justify-between">
				<div className="flex items-center gap-3">
					<a
						href="https://www.instagram.com/by.shaleen?igsh=MWdrb2c3eXFkcng5Nw=="
						target="_blank"
						rel="noopener noreferrer"
						aria-label={ui.contact.instagram}
					>
						<InstagramIcon className="h-6 w-6" />
					</a>
					<span className="font-display text-lg font-bold tracking-wide uppercase">
						by.shaleen
					</span>
				</div>

				<p className="font-display text-xs tracking-wide uppercase">
					{ui.contact.rights}
				</p>

				<div className="flex gap-6 font-body text-xs">
					<a
						href="https://canva.link/82av0osxgzk0gia"
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-2"
					>
						{ui.contact.imprint}
					</a>
					<a
						href="https://canva.link/cathxbt0y9iq491"
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-2"
					>
						{ui.contact.dataProtection}
					</a>
				</div>
			</div>
		</section>
	);
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			role="img"
			aria-hidden="true"
			{...props}
		>
			<rect x="3" y="3" width="18" height="18" rx="5" />
			<circle cx="12" cy="12" r="4.2" />
			<circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
		</svg>
	);
}
