import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProjectImage } from "#/components/ProjectImage";
import { MenuButton } from "#/components/SiteNav";
import {
	getProject,
	getProjects,
	type Project,
	type Section,
} from "#/data/projects";
import { useLocale, useUi } from "#/i18n/context";
import { localeParam, toLocale } from "#/i18n/locale";
import { UI } from "#/i18n/ui";

export const Route = createFileRoute("/{-$locale}/projects/$slug")({
	loader: ({ params }) => {
		const project = getProject(params.slug, toLocale(params.locale));
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData, params }) => ({
		meta: loaderData
			? [
					{ title: `${loaderData.project.title} — by.shaleen` },
					{ name: "description", content: loaderData.project.intro },
				]
			: [{ title: UI[toLocale(params.locale)].meta.title }],
	}),
	component: ProjectPage,
	notFoundComponent: ProjectNotFound,
});

function ProjectPage() {
	const { slug, locale: localeParamValue } = Route.useParams();
	const project = getProject(slug, toLocale(localeParamValue));

	if (!project) throw notFound();

	const projects = getProjects(toLocale(localeParamValue));
	const index = projects.findIndex((p) => p.slug === project.slug);
	const next = projects[(index + 1) % projects.length];

	return (
		<main className="bg-cream font-body text-wine">
			<MenuButton />
			<ProjectHero project={project} />
			<Overview project={project} />
			{project.sections.map((section) => (
				<ProjectSection key={section.heading} section={section} />
			))}
			<NextProject current={project} next={next} />
		</main>
	);
}

function ProjectHero({ project }: { project: Project }) {
	const locale = useLocale();
	const ui = useUi();

	return (
		<header className="group relative flex min-h-[80vh] items-end overflow-hidden bg-wine-dark">
			<div className="absolute inset-0">
				<ProjectImage {...project.cover} eager />
			</div>
			<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/40" />

			<div className="absolute inset-x-0 top-0 z-10 px-20 pt-8 text-center sm:pt-10">
				<Link
					to="/{-$locale}"
					params={{ locale: localeParam(locale) }}
					hash="projects"
					className="font-body text-xs tracking-[0.18em] text-ecru uppercase underline-offset-4 hover:underline"
				>
					← {ui.projects.allProjects}
				</Link>
			</div>

			<div className="relative z-10 w-full px-6 pb-12 text-ecru sm:px-10 sm:pb-16 lg:px-16">
				<div className="mx-auto max-w-6xl">
					<p className="font-body text-xs tracking-[0.2em] uppercase">
						{project.location}
					</p>
					<h1 className="mt-3 font-display text-5xl uppercase leading-[1.02] tracking-wide sm:text-7xl lg:text-8xl">
						{project.shortTitle}
					</h1>
				</div>
			</div>
		</header>
	);
}

function Overview({ project }: { project: Project }) {
	const ui = useUi();
	const facts = [
		{ label: ui.projects.location, value: project.location },
		{ label: ui.projects.space, value: project.type },
		project.scope ? { label: ui.projects.scope, value: project.scope } : null,
		project.statusLabel
			? { label: ui.projects.status, value: project.statusLabel }
			: null,
	].filter((fact) => fact !== null);

	return (
		<section className="px-6 py-16 sm:px-10 md:py-24 lg:px-16">
			<div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16">
				<dl className="space-y-5 md:col-span-4">
					{facts.map((fact) => (
						<div key={fact.label}>
							<dt className="font-display text-2xl text-wine italic sm:text-3xl">
								{fact.label}
							</dt>
							<dd className="body-copy mt-1">{fact.value}</dd>
						</div>
					))}
				</dl>
				<div className="md:col-span-8">
					<p className="font-display text-xl leading-snug sm:text-2xl md:text-[1.7rem]">
						{project.intro}
					</p>
					{project.link && (
						<a
							href={project.link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-8 inline-flex items-center gap-2 rounded-full bg-wine px-8 py-3 font-body text-sm font-semibold tracking-wide text-cream uppercase"
						>
							{project.link.label} <span aria-hidden="true">→</span>
						</a>
					)}
				</div>
			</div>
		</section>
	);
}

function ProjectSection({ section }: { section: Section }) {
	const hasText = section.body || section.bullets || section.palette;

	// A lone portrait photo without text sits in the heading's row, top-aligned with it.
	const [onlyImage] = section.images ?? [];
	const inlineImage =
		!hasText &&
		section.images?.length === 1 &&
		onlyImage.orientation === "portrait"
			? onlyImage
			: undefined;

	return (
		<section className="px-6 sm:px-10 lg:px-16">
			<div className="mx-auto max-w-6xl border-t border-wine/25 py-12 md:py-16">
				<div className="grid gap-8 md:grid-cols-12 md:gap-16">
					<h2 className="font-display text-3xl leading-none uppercase tracking-wide sm:text-4xl md:col-span-4">
						{section.heading}
					</h2>

					{inlineImage && (
						<div className="group relative aspect-[3/4] overflow-hidden md:col-span-6 md:col-start-5 md:mt-[7px]">
							<ProjectImage {...inlineImage} />
						</div>
					)}

					{hasText && (
						<div className="body-copy space-y-6 md:col-span-8">
							{section.body?.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}

							{section.bullets && (
								<ul className="list-disc space-y-2 pl-5">
									{section.bullets.map((bullet) => (
										<li key={bullet}>{bullet}</li>
									))}
								</ul>
							)}

							{section.palette && (
								<ul className="flex flex-wrap gap-x-8 gap-y-4">
									{section.palette.map((swatch) => (
										<li key={swatch.color} className="flex items-center gap-3">
											<span
												aria-hidden="true"
												className="h-10 w-10 rounded-full ring-1 ring-wine/20"
												style={{ backgroundColor: swatch.color }}
											/>
											<span className="text-xs tracking-[0.12em] uppercase">
												{swatch.name}
											</span>
										</li>
									))}
								</ul>
							)}
						</div>
					)}
				</div>

				{section.images && !inlineImage && <Gallery images={section.images} />}
			</div>
		</section>
	);
}

function Gallery({ images }: { images: NonNullable<Section["images"]> }) {
	if (images.length === 1) {
		const [image] = images;
		const portrait = image.orientation === "portrait";

		return (
			<div className="mt-10 grid md:grid-cols-12 md:gap-16">
				<div
					className={`group relative overflow-hidden ${
						portrait
							? "aspect-[3/4] md:col-span-6 md:col-start-5"
							: "aspect-[16/10] md:col-span-12"
					}`}
				>
					<ProjectImage {...image} />
				</div>
			</div>
		);
	}

	const columns = images.length % 3 === 0 ? "sm:grid-cols-3" : "sm:grid-cols-2";

	return (
		<div className={`mt-10 grid gap-3 sm:gap-5 ${columns}`}>
			{images.map((image) => (
				<div
					key={image.file}
					className={`group relative overflow-hidden ${
						image.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/5]"
					}`}
				>
					<ProjectImage {...image} />
				</div>
			))}
		</div>
	);
}

function NextProject({ current, next }: { current: Project; next: Project }) {
	const locale = useLocale();
	const ui = useUi();

	return (
		<section className="bg-wine px-6 py-20 text-cream sm:px-10 md:py-28 lg:px-16">
			<div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-end">
				{next.slug !== current.slug && (
					<Link
						to="/{-$locale}/projects/$slug"
						params={{ locale: localeParam(locale), slug: next.slug }}
						className="group block"
					>
						<p className="font-body text-xs tracking-[0.2em] uppercase opacity-70">
							{ui.projects.nextProject}
						</p>
						<p className="mt-3 font-display text-4xl uppercase leading-tight tracking-wide underline-offset-8 group-hover:underline sm:text-6xl">
							{next.title}
						</p>
					</Link>
				)}

				<div className="md:text-right">
					<p className="font-display text-2xl leading-snug sm:text-3xl">
						{ui.projects.wantARoom}
					</p>
					<div className="mt-6 flex flex-wrap gap-4 md:justify-end">
						<Link
							to="/{-$locale}"
							params={{ locale: localeParam(locale) }}
							hash="services"
							className="rounded-full bg-cream px-8 py-3 font-body text-sm font-semibold tracking-wide text-wine uppercase"
						>
							{ui.projects.seeServices}
						</Link>
						<Link
							to="/{-$locale}"
							params={{ locale: localeParam(locale) }}
							hash="projects"
							className="rounded-full border border-cream/60 px-8 py-3 font-body text-sm font-semibold tracking-wide uppercase"
						>
							{ui.projects.allProjects}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

function ProjectNotFound() {
	const locale = useLocale();
	const ui = useUi();

	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-cream px-6 text-center text-wine">
			<h1 className="font-display text-5xl uppercase">
				{ui.projects.notFound}
			</h1>
			<Link
				to="/{-$locale}"
				params={{ locale: localeParam(locale) }}
				hash="projects"
				className="font-body text-sm font-semibold tracking-wide uppercase underline underline-offset-4"
			>
				← {ui.projects.allProjects}
			</Link>
		</main>
	);
}
