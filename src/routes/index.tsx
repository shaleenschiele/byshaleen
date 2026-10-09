import { createFileRoute } from "@tanstack/react-router";
import type { SVGProps } from "react";

export const Route = createFileRoute("/")({ component: Home });

const GOOGLE_FORM_URL = "https://forms.gle/Mzbov6yGoNJoaSVu9";

function Home() {
	return (
		<main className="bg-cream font-body text-ink">
			<Hero />
			<About />
			<Services />
			<Testimonials />
			<ContactFooter />
		</main>
	);
}

function Hero() {
	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink">
			<img
				src="/images/hero-sofa.webp"
				alt="A cozy sofa with two throw pillows, one cream and one rust-colored, bathed in warm sunlight."
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/40" />

			<div className="relative z-10 px-6 text-center text-ecru">
				<p className="font-display text-lg tracking-[0.1em] sm:text-xl md:text-2xl">
					Renter friendly designs
				</p>
				<h1 className="mt-4 font-display text-5xl uppercase leading-[1.05] tracking-[0.08em] sm:text-6xl md:tracking-[0.16em] lg:text-8xl">
					<span className="block">Make your home</span>
					<span className="block">feel personal</span>
				</h1>
			</div>

			<span className="absolute right-6 bottom-6 z-10 font-display text-sm font-bold tracking-[0.1em] text-ecru uppercase sm:right-10 sm:bottom-10 sm:text-base">
				by.shaleen
			</span>
		</section>
	);
}

function About() {
	return (
		<section className="bg-olive px-6 py-20 sm:px-10 md:py-28 lg:px-16">
			<div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
				<img
					src="/images/about-portrait.webp"
					alt="Shaleen, founder of byshaleen.com, wearing a striped shirt and a bandana, smiling at the camera while sitting at a table with a cocktail."
					className="aspect-[5/6] w-full object-cover"
				/>

				<div className="text-wine">
					<h2 className="font-display text-5xl uppercase tracking-wide sm:text-6xl">
						About
					</h2>

					<div className="mt-8 space-y-6 text-justify font-body text-base leading-relaxed sm:text-lg">
						<p>
							Eight years in corporate taught me structure and strategy. My eye
							for design did the rest.
						</p>
						<p>
							My style is best described as ‘moody modern’: rich colours, a mix
							of materials, organic shapes, and old furniture happily coexisting
							with new.
						</p>
						<p>
							Located in Berlin, Germany, I offer on-site as well as remote
							support and specialise in renter-friendly (Altbau) design: turning
							the flat you're renting (no drilling, no landlord drama, no
							deposit at risk) into somewhere that actually feels like yours.
							Usually it's small, deliberate decisions, not a full-on
							renovation, doing the heavy lifting.
						</p>
						<p>
							Work with me and expect a clear process, a bit of gentle pushback
							on your own ideas, clever workarounds and solutions for the things
							you can't change structurally, and, despite the seriousness with
							which I take cushion placement, quite a lot of fun along the way.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function Services() {
	return (
		<section className="bg-cream px-6 py-20 sm:px-10 md:py-28 lg:px-16">
			<div className="mx-auto max-w-6xl">
				<h2 className="font-display text-5xl uppercase tracking-wide text-wine sm:text-6xl">
					Services
				</h2>
				<p className="mt-4 max-w-lg font-display text-lg text-wine sm:text-xl">
					Available for in-person work across Berlin, and remotely anywhere in
					the world.
				</p>

				<div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
					<ServiceCard
						title="Full Design Service"
						description="Start to finish, one room or the whole flat — this is for when you want a proper, longer-term collaboration on your space including Moodboard, 2D & 3D renderings and product sourcing."
					/>
					<ServiceCard
						title="Design SOS Call"
						description="A focused, one-hour call for the one design problem that's been quietly bothering you. Sofa in the wrong spot, colour gone wrong, that corner nobody can fix — we sort it together."
					/>
					<ServiceCard
						title="Furniture Sourcing"
						description="Know what you want but no time to track it down? I'll do the hunting — three curated options for every furniture item (e.g. sofa, rug) you need."
					/>
				</div>
			</div>
		</section>
	);
}

function ServiceCard({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="flex flex-col justify-between rounded-3xl bg-wine px-8 py-10 text-cream">
			<div>
				<h3 className="font-display text-3xl">{title}</h3>
				<p className="mt-4 font-body text-sm leading-relaxed sm:text-base">
					{description}
				</p>
			</div>
			<a
				href={GOOGLE_FORM_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="mt-10 inline-flex w-fit items-center gap-2 font-body text-sm font-semibold tracking-wide uppercase underline decoration-1 underline-offset-4"
			>
				Request <span aria-hidden="true">→</span>
			</a>
		</div>
	);
}

function Testimonials() {
	return (
		<section className="bg-dusty px-6 py-20 sm:px-10 md:py-28 lg:px-16">
			<div className="mx-auto max-w-6xl">
				<h2 className="font-display text-5xl uppercase tracking-wide text-ink/70 sm:text-6xl md:text-7xl">
					What former clients say
				</h2>

				<div className="mt-12 grid gap-x-16 gap-y-14 md:grid-cols-2">
					<Testimonial
						names="Nathalie & Mateusz"
						project="Project: Bedroom"
						quote="“Working with her on our bedroom renovation was a delight. She understood our style and needs, avoiding a one-size-fits-all approach. Flexible and open to feedback, she made us feel heard throughout the project. Her blend of creativity and client focus resulted in a uniquely personal space. I highly recommend her as an interior designer.”"
					/>
					<Testimonial
						names="Rike & Sebastian"
						project="Project: Family living & Dining room"
						quote="“To be honest, our living room used to look pretty dreary and uninviting. Luckily, Shaleen took charge of the project! With her highly organized approach and brilliant ideas, she guided us step by step—and with a great deal of patience—through the design and implementation process. Now the living room has become the whole family's absolute favorite place. I highly recommend her!”"
						className="md:mt-10"
					/>
					<Testimonial
						names="Mona & Felix"
						project="Project: Living & Bedroom"
						quote="“Shaleen did wonderful work helping us to make our new flat by the lake look unique and cozy. She gave us a lot of inspiration with coloring our walls that fit our furniture and style. She helped choosing new items that felt exactly right and tailored for us. It's respectful & fun working with her!”"
						className="md:col-start-1"
					/>
				</div>
			</div>
		</section>
	);
}

function Testimonial({
	names,
	project,
	quote,
	className = "",
}: {
	names: string;
	project: string;
	quote: string;
	className?: string;
}) {
	return (
		<div className={className}>
			<div className="inline-block rounded-xl bg-white/40 px-4 py-2">
				<p className="font-display text-lg tracking-wide text-ink uppercase sm:text-xl">
					{names}
				</p>
				<p className="font-display text-sm tracking-wide text-ink uppercase sm:text-base">
					{project}
				</p>
			</div>
			<p className="mt-5 font-body text-base text-ink italic leading-relaxed sm:text-lg">
				{quote}
			</p>
		</div>
	);
}

function ContactFooter() {
	return (
		<section className="relative flex min-h-[85vh] flex-col justify-between overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
			<img
				src="/images/footer-bookshelf.webp"
				alt="A wooden bookshelf filled with books and decorative vases in various earthy tones."
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-wine-dark/30 to-black/55" />

			<div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 py-16 text-center text-ecru">
				<h2 className="font-display text-4xl uppercase leading-tight tracking-wide sm:text-5xl md:text-6xl">
					Any other questions?
				</h2>
				<a
					href="mailto:shaleen.schiele@gmail.com"
					className="rounded-full border border-ecru px-10 py-4 font-body text-base font-semibold underline underline-offset-4"
				>
					Get in touch
				</a>
			</div>

			<div className="relative z-10 flex flex-col gap-6 text-ecru sm:flex-row sm:items-center sm:justify-between">
				<div className="flex items-center gap-3">
					<a
						href="https://www.instagram.com/by.shaleen?igsh=MWdrb2c3eXFkcng5Nw=="
						target="_blank"
						rel="noopener noreferrer"
						aria-label="by.shaleen on Instagram"
					>
						<InstagramIcon className="h-6 w-6" />
					</a>
					<span className="font-display text-lg font-bold tracking-wide uppercase">
						by.shaleen
					</span>
				</div>

				<p className="font-display text-xs tracking-wide uppercase">
					Shaleen Schiele | All rights reserved
				</p>

				<div className="flex gap-6 font-body text-xs">
					<a
						href="https://canva.link/82av0osxgzk0gia"
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-2"
					>
						Imprint
					</a>
					<a
						href="https://canva.link/cathxbt0y9iq491"
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-2"
					>
						Data Protection
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
