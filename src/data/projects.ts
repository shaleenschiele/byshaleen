import { type L, type Locale, l } from "#/i18n/locale";

export type Tone =
	| "wine"
	| "olive"
	| "dusty"
	| "ecru"
	| "blush"
	| "sage"
	| "warm";

/* ---------- Resolved shapes (what components render) ---------- */

export type ImageSpec = {
	/** Path relative to src/assets/projects/, e.g. "p-berg-bedroom/cover.jpg". */
	file: string;
	alt: string;
	tone?: Tone;
	/** Portrait photos get a constrained layout when shown alone. */
	orientation?: "portrait" | "landscape";
};

export type Section = {
	heading: string;
	body?: string[];
	bullets?: string[];
	palette?: { name: string; color: string }[];
	images?: ImageSpec[];
};

export type Project = {
	slug: string;
	title: string;
	/** Used on the landing cards, where the location is already shown above. */
	shortTitle: string;
	location: string;
	type: string;
	scope?: string;
	status: "complete" | "in-progress" | "coming-soon";
	statusLabel?: string;
	/** One line shown under the card on the landing page. */
	tagline: string;
	intro: string;
	cover: ImageSpec;
	/** Optional call-to-action shown under the intro. */
	link?: { label: string; href: string };
	sections: Section[];
};

/* ---------- Raw data: every text exists in English and German ---------- */

type RawImage = Omit<ImageSpec, "alt"> & { alt: L<string> };

type RawSection = {
	heading: L<string>;
	body?: L<string[]>;
	bullets?: L<string[]>;
	palette?: { name: L<string>; color: string }[];
	images?: RawImage[];
};

type RawProject = {
	slug: string;
	status: Project["status"];
	cover: RawImage;
	link?: { label: L<string>; href: string };
	text: L<{
		title: string;
		shortTitle: string;
		location: string;
		type: string;
		scope?: string;
		statusLabel?: string;
		tagline: string;
		intro: string;
	}>;
	sections: RawSection[];
};

const RAW_PROJECTS: RawProject[] = [
	{
		slug: "brandenburg-family-home",
		status: "complete",
		cover: {
			file: "brandenburg-family-home/cover.jpg",
			alt: l(
				"Living room of the Brandenburg Family Home with a sectional sofa, large artwork and crystal chandelier.",
			),
			tone: "sage",
		},
		text: {
			en: {
				title: "Brandenburg Family Home",
				shortTitle: "Family Home",
				location: "Brandenburg",
				type: "Living & dining room",
				scope: "Concept, layout, moodboards, design boards, sourcing",
				tagline:
					"A long living and dining room, reimagined for a family of four.",
				intro:
					"A large, tube-shaped living and dining room, turned into a coherent home for a family with two small children. The brief: a cosy room that is calm and lively at the same time, where modern pieces meet vintage objects, with space for the whole family and for time as a couple. It needed more storage, materials that cope with life with toddlers (dirt-resistant, for a start), and a design that emphasises the width of the room to distract from its length.",
			},
		},
		sections: [
			{
				heading: l("Mood & palette"),
				body: l([
					"Organic shapes meet clean lines. Abstract art, silver metal and glass accents, soft warm fabrics and plenty of wood, plus new architectural elements: ceiling beams and a wall projection that give the long room some structure.",
				]),
				palette: [
					{ name: l("Sage"), color: "#8fa38a" },
					{ name: l("Cream"), color: "#ddd6c3" },
					{ name: l("Stone"), color: "#b4b3af" },
				],
			},
			{
				heading: l("The result"),
				body: l(["More photos of the finished room will follow here soon."]),
				images: [
					{
						file: "brandenburg-family-home/after-1.jpg",
						alt: l("The finished living room."),
						tone: "warm",
					},
					{
						file: "brandenburg-family-home/after-2.jpg",
						alt: l("The finished dining area."),
						tone: "warm",
					},
				],
			},
		],
	},
	{
		slug: "p-berg-bedroom",
		status: "complete",
		cover: {
			file: "p-berg-bedroom/cover.jpg",
			alt: l(
				"Wardrobe with olive doors and a mirrored door, abstract painting and a leather wingback chair with brass arc lamp.",
			),
			tone: "blush",
		},
		text: {
			en: {
				title: "P-Berg Bedroom",
				shortTitle: "Bedroom",
				location: "Prenzlauer Berg, Berlin",
				type: "Bedroom · Altbau",
				scope: "Colour concept, storage, lighting, DIY upgrades",
				tagline: "An Altbau bedroom, rebuilt around what was already there.",
				intro:
					"White walls, a cardboard box and a leather wingback shoved in the corner. This Altbau bedroom had stucco and good parquet, but no point of view. The brief: a calm, cosy room with more storage, making better use of the space and giving existing furniture a new role instead of replacing it.",
			},
		},
		sections: [
			{
				heading: l("Before"),
				images: [
					{
						file: "p-berg-bedroom/before-1.jpg",
						alt: l(
							"The bedroom before: white walls, bed with bench, white wardrobe, moving boxes and a leather wingback chair in the corner.",
						),
						tone: "ecru",
						orientation: "portrait",
					},
				],
			},
			{
				heading: l("Mood & palette"),
				body: l([
					"Lots of texture and natural materials. Wood tones that pick up the colour of the floor, structure on the walls through limewash, and a new role for the existing armchair.",
				]),
				palette: [
					{ name: l("Dusty pink"), color: "#d6b9ae" },
					{ name: l("Terracotta"), color: "#c26a45" },
					{ name: l("Chocolate"), color: "#5a3d33" },
				],
			},
			{
				heading: l("The result"),
				images: [
					{
						file: "p-berg-bedroom/final.jpg",
						alt: l(
							"The finished bedroom: limewash walls, stone bedside lamp, plant and terracotta bedding.",
						),
						tone: "blush",
						orientation: "portrait",
					},
					{
						file: "p-berg-bedroom/anchor.jpg",
						alt: l(
							"Leather wingback chair with arc lamp, side table and large abstract painting.",
						),
						tone: "olive",
						orientation: "portrait",
					},
					{
						file: "p-berg-bedroom/storage.jpg",
						alt: l(
							"Olive wardrobe doors with ceramic knobs, stucco cornice and the bed in the foreground.",
						),
						tone: "olive",
						orientation: "portrait",
					},
					{
						file: "p-berg-bedroom/light-2.jpg",
						alt: l("Two stone bedside lamps flanking the bed."),
						tone: "blush",
						orientation: "portrait",
					},
					{
						file: "p-berg-bedroom/walls-1.jpg",
						alt: l(
							"Corner of the bedroom with dusty pink limewash walls and stucco cornice.",
						),
						tone: "blush",
						orientation: "portrait",
					},
					{
						file: "p-berg-bedroom/diy-after.jpg",
						alt: l(
							"A cabinet painted terracotta with ceramic knobs, below a wavy mirror.",
						),
						tone: "blush",
						orientation: "portrait",
					},
					{
						file: "p-berg-bedroom/walls-2.jpg",
						alt: l(
							"Limewash wall and stucco cornice above the bed with terracotta bedding.",
						),
						tone: "blush",
						orientation: "portrait",
					},
				],
			},
		],
	},
	{
		slug: "wedding-guest-room",
		status: "coming-soon",
		cover: {
			file: "wedding-guest-room/cover.jpg",
			alt: l(
				"Guest room with dusty pink walls, a white bed with dark bedding and a deep green wardrobe.",
			),
			tone: "blush",
		},
		text: {
			en: {
				title: "Wedding Guest Room",
				shortTitle: "Guest Room",
				location: "Wedding, Berlin",
				type: "Guest room / office · Altbau",
				scope:
					"Colour concept, layout, storage options, combining guest and office space",
				statusLabel: "Coming soon",
				tagline:
					"A guest room that doubles as an office, without the office vibe.",
				intro:
					"One room, two lives: a calm workspace by day and a cosy bed for visitors two to three times a month. Today the room is part guest room, part laundry corner, and the real office lives in the kitchen. The brief: a desk with room for a monitor and a proper guest bed or sleep sofa, plus storage for craft supplies, jackets and clothes with the laundry rack out of sight. All of it cosy, warm and clean, with no office vibe and no silver. The wardrobe and the desk stay; the rug, ceiling light and wallpaper can go.",
			},
		},
		sections: [],
	},
	{
		slug: "my-own-home",
		status: "coming-soon",
		cover: {
			file: "my-own-home/cover.jpg",
			alt: l(
				"An empty, sunlit room in Shaleen’s own Altbau flat with oak parquet and a tall window.",
			),
			tone: "wine",
		},
		link: {
			label: l("Follow the Renovation Diaries"),
			href: "https://www.instagram.com/by.shaleen?igsh=MWdrb2c3eXFkcng5Nw==",
		},
		text: {
			en: {
				title: "My own home",
				shortTitle: "My own home",
				location: "Prenzlauer Berg, Berlin",
				type: "3-room apartment · Altbau",
				scope:
					"Renovation of kitchen and bathroom, design of guest room, living room and bedroom",
				statusLabel: "Coming soon",
				tagline:
					"A 130-year-old Gründerzeit flat, somewhere between building site and home.",
				intro:
					"A 130-year-old Gründerzeit flat in Berlin, currently somewhere between building site and home. It’s the one project where I’m allowed to move plumbing, which makes it the exception on this site, not the rule. Everything else follows the same principles I use for clients: keep what has character, rethink colour, layout and light, and let old and new share the room. We move in this December, and I’m documenting every decision (and every mistake) in my Renovation Diaries on Instagram.",
			},
		},
		sections: [],
	},
];

/* ---------- Resolving ---------- */

function resolveImage(image: RawImage, locale: Locale): ImageSpec {
	return { ...image, alt: image.alt[locale] };
}

function resolveProject(raw: RawProject, locale: Locale): Project {
	return {
		slug: raw.slug,
		status: raw.status,
		...raw.text[locale],
		cover: resolveImage(raw.cover, locale),
		link: raw.link && {
			label: raw.link.label[locale],
			href: raw.link.href,
		},
		sections: raw.sections.map((section) => ({
			heading: section.heading[locale],
			body: section.body?.[locale],
			bullets: section.bullets?.[locale],
			palette: section.palette?.map((swatch) => ({
				name: swatch.name[locale],
				color: swatch.color,
			})),
			images: section.images?.map((image) => resolveImage(image, locale)),
		})),
	};
}

export function getProjects(locale: Locale): Project[] {
	return RAW_PROJECTS.map((raw) => resolveProject(raw, locale));
}

export function getProject(slug: string, locale: Locale) {
	return getProjects(locale).find((project) => project.slug === slug);
}
