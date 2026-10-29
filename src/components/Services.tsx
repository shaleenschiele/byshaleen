import { useState } from "react";
import { FreeCallBlock } from "#/components/FreeCall";
import { getServices, type Service } from "#/data/services";
import { useLocale, useUi } from "#/i18n/context";

export function Services() {
	const locale = useLocale();
	const ui = useUi();
	const services = getServices(locale);
	const [openIds, setOpenIds] = useState<ReadonlySet<string>>(new Set());

	const toggle = (id: string) =>
		setOpenIds((prev) => {
			const next = new Set(prev);
			if (!next.delete(id)) next.add(id);
			return next;
		});

	return (
		<section
			id="services"
			className="bg-cream px-6 py-20 sm:px-10 md:py-28 lg:px-16"
		>
			<div className="mx-auto max-w-6xl">
				<h2 className="font-display text-5xl uppercase tracking-wide text-wine sm:text-6xl">
					{ui.services.heading}
				</h2>
				<p className="mt-4 max-w-lg font-display text-lg italic text-wine sm:text-xl">
					{ui.services.subheading}
				</p>

				<ul className="mt-14 border-t border-wine/30">
					{services.map((service) => (
						<ServiceItem
							key={service.id}
							service={service}
							open={openIds.has(service.id)}
							onToggle={() => toggle(service.id)}
						/>
					))}
				</ul>

				<FreeCallBlock />
			</div>
		</section>
	);
}

function ServiceItem({
	service,
	open,
	onToggle,
}: {
	service: Service;
	open: boolean;
	onToggle: () => void;
}) {
	const buttonId = `${service.id}-button`;
	const panelId = `${service.id}-panel`;

	return (
		<li
			id={service.id}
			className="scroll-mt-6 border-b border-wine/30 text-wine"
		>
			<h3>
				<button
					type="button"
					id={buttonId}
					aria-expanded={open}
					aria-controls={panelId}
					onClick={onToggle}
					className="group flex w-full items-center justify-between gap-6 py-7 text-left sm:py-9"
				>
					<span className="block">
						<span className="block font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
							{service.title}
						</span>
						<span className="mt-2 block font-display text-lg italic text-balance sm:text-xl">
							{service.tagline}
						</span>
						<span className="mt-3 block font-body text-xs tracking-[0.15em] uppercase opacity-70">
							{service.teaser}
						</span>
					</span>
					<PlusMinus open={open} />
				</button>
			</h3>

			<div
				className={`grid transition-[grid-template-rows] duration-300 ease-out ${
					open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				}`}
			>
				<section
					id={panelId}
					aria-labelledby={buttonId}
					inert={!open}
					className="overflow-hidden"
				>
					<ServiceDetails service={service} />
				</section>
			</div>
		</li>
	);
}

function PlusMinus({ open }: { open: boolean }) {
	return (
		<span
			aria-hidden="true"
			className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-wine transition-colors group-hover:bg-wine group-hover:text-cream"
		>
			<span className="absolute h-px w-5 bg-current" />
			<span
				className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
					open ? "rotate-0" : "rotate-90"
				}`}
			/>
		</span>
	);
}

function ServiceDetails({ service }: { service: Service }) {
	const ui = useUi();
	const { howItWorks, notIncluded } = service;
	const Steps = howItWorks?.ordered ? "ol" : "ul";

	return (
		<div className="grid gap-10 pb-12 md:grid-cols-2 md:gap-16">
			<div className="space-y-8">
				<div className="body-copy space-y-4">
					{service.intro.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>

				<DetailBlock label={ui.services.whatYouGet}>
					<ul className="list-disc space-y-2 pl-5">
						{service.included.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</DetailBlock>

				{howItWorks && (
					<DetailBlock label={ui.services.howItWorks}>
						<Steps
							className={`space-y-2 pl-5 ${
								howItWorks.ordered ? "list-decimal" : "list-disc"
							}`}
						>
							{howItWorks.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</Steps>
					</DetailBlock>
				)}

				{notIncluded && service.notIncludedLeft && (
					<DetailBlock label={ui.services.notIncluded}>
						<p>{notIncluded}</p>
					</DetailBlock>
				)}
			</div>

			<div className="space-y-8">
				{notIncluded && !service.notIncludedLeft && (
					<DetailBlock label={ui.services.notIncluded}>
						<p>{notIncluded}</p>
					</DetailBlock>
				)}

				<DetailBlock label={ui.services.goodToKnow}>
					<ul className="list-disc space-y-2 pl-5">
						{service.goodToKnow.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</DetailBlock>

				<div className="rounded-3xl bg-wine px-8 py-8 text-cream">
					<p className="font-display text-4xl">{service.price.headline}</p>
					<div className="mt-3 space-y-1 font-body text-sm leading-relaxed font-light opacity-90">
						{service.price.lines.map((line) => (
							<p key={line}>{line}</p>
						))}
					</div>
					<ServiceCta service={service} />
				</div>
			</div>
		</div>
	);
}

function DetailBlock({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<div>
			<h4 className="font-display text-2xl text-wine italic sm:text-3xl">
				{label}
			</h4>
			<div className="body-copy mt-3">{children}</div>
		</div>
	);
}

function ServiceCta({ service }: { service: Service }) {
	const { href, cta } = service;

	if (href) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-8 py-3 font-body text-sm font-semibold tracking-wide text-wine uppercase"
			>
				{cta.label} <span aria-hidden="true">→</span>
			</a>
		);
	}

	return (
		<div className="mt-8">
			<button
				type="button"
				disabled
				className="cursor-not-allowed rounded-full border border-cream/50 px-8 py-3 font-body text-sm font-semibold tracking-wide text-cream/70 uppercase"
			>
				{cta.label}
			</button>
			{cta.note && (
				<p className="mt-3 font-body text-xs leading-relaxed opacity-80">
					{cta.note}
				</p>
			)}
		</div>
	);
}
