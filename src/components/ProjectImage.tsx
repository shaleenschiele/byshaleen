import type { Tone } from "#/data/projects";

const IMAGE_URLS = import.meta.glob<string>(
	"/src/assets/projects/**/*.{webp,jpg,jpeg,png,avif}",
	{ eager: true, import: "default", query: "?url" },
);

const withoutExtension = (path: string) => path.replace(/\.[^./]+$/, "");

/** Keyed without extension, so "cover.webp" in the data matches "cover.jpg" on disk. */
const URL_BY_NAME = new Map(
	Object.entries(IMAGE_URLS).map(([path, url]) => [
		withoutExtension(path),
		url,
	]),
);

const TONES: Record<Tone, string> = {
	wine: "bg-wine text-cream/60",
	olive: "bg-olive text-wine/60",
	dusty: "bg-dusty text-ink/60",
	ecru: "bg-ecru text-ink/50",
	blush: "bg-blush text-wine/50",
	sage: "bg-sage text-ink/50",
	warm: "bg-warm text-ink/40",
};

/**
 * Fills its (relatively positioned, aspect-ratio'd) parent. Renders the photo
 * from src/assets/projects/<file> when it exists, otherwise a tinted
 * placeholder that names the expected file while developing.
 */
export function ProjectImage({
	file,
	alt,
	tone = "ecru",
	eager = false,
	className = "",
}: {
	file: string;
	alt: string;
	tone?: Tone;
	eager?: boolean;
	className?: string;
}) {
	const src = URL_BY_NAME.get(withoutExtension(`/src/assets/projects/${file}`));

	if (src) {
		return (
			<img
				src={src}
				alt={alt}
				loading={eager ? "eager" : "lazy"}
				decoding="async"
				className={`h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105 ${className}`}
			/>
		);
	}

	return (
		<div
			aria-hidden="true"
			className={`flex h-full w-full items-end p-4 ${TONES[tone]} ${className}`}
		>
			{import.meta.env.DEV && (
				<span className="break-all font-body text-[10px] tracking-wide">
					{file}
				</span>
			)}
		</div>
	);
}
