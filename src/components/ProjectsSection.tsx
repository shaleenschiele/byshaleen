import { Link } from "@tanstack/react-router";
import { ProjectImage } from "#/components/ProjectImage";
import { getProjects, type Project } from "#/data/projects";
import { useLocale, useUi } from "#/i18n/context";
import { localeParam } from "#/i18n/locale";

export function ProjectsSection() {
	const locale = useLocale();
	const ui = useUi();
	const projects = getProjects(locale);

	return (
		<section
			id="projects"
			className="bg-olive px-6 py-20 sm:px-10 md:py-28 lg:px-16"
		>
			<div className="mx-auto max-w-6xl">
				<h2 className="font-display text-5xl uppercase tracking-wide text-wine sm:text-6xl">
					{ui.projects.heading}
				</h2>
				<p className="mt-4 max-w-lg font-display text-lg italic text-wine sm:text-xl">
					{ui.projects.subheading}
				</p>

				<ul className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
					{projects.map((project) => (
						<li
							key={project.slug}
							className="max-sm:[&:not(:first-child)]:border-t max-sm:[&:not(:first-child)]:border-wine/30 max-sm:[&:not(:first-child)]:pt-14"
						>
							<ProjectCard project={project} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

function ProjectCard({ project }: { project: Project }) {
	const locale = useLocale();
	const ui = useUi();
	const badge = {
		complete: undefined,
		"in-progress": ui.projects.inProgress,
		"coming-soon": ui.projects.comingSoon,
	}[project.status];

	return (
		<Link
			to="/{-$locale}/projects/$slug"
			params={{ locale: localeParam(locale), slug: project.slug }}
			className="group block"
		>
			<div className="@container relative aspect-[3/4] overflow-hidden bg-wine/10">
				<div className="h-full w-full">
					<ProjectImage {...project.cover} />
				</div>
				<div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/30" />

				<div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-warm">
					<span className="font-body text-[11px] tracking-[0.2em] uppercase">
						{project.location}
					</span>
					<span className="mt-3 font-display text-[min(11cqw,3.25rem)] uppercase leading-[1.05] tracking-wide">
						{project.shortTitle}
					</span>
				</div>

				{badge && (
					<span className="absolute top-3 left-3 rounded-full bg-warm/75 px-2.5 py-0.5 font-body text-[9px] font-medium tracking-[0.16em] text-wine uppercase backdrop-blur-sm">
						{badge}
					</span>
				)}
			</div>

			<div className="mt-5 text-wine">
				<p className="font-body text-xs tracking-[0.15em] uppercase opacity-80">
					{project.type}
				</p>
				<p className="mt-2 font-display text-xl italic leading-snug">
					{project.tagline}
				</p>
			</div>
		</Link>
	);
}
