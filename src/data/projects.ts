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
	/** Which side of the photo the portrait card on the landing page keeps. */
	cardFocus?: "left" | "right";
	/** CSS object-position for photos that get cropped, e.g. "50% 75%". */
	position?: string;
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
	/** Photo for the landing-page card when it should differ from the cover. */
	card?: ImageSpec;
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
	card?: RawImage;
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
			file: "brandenburg-family-home/after-1.jpg",
			alt: l(
				"Living room of the Brandenburg Family Home with a sectional sofa, large artwork and crystal chandelier.",
				"Wohnzimmer des Familienhauses in Brandenburg mit Ecksofa, großem Kunstwerk und Kristallkronleuchter.",
			),
			tone: "sage",
			cardFocus: "right",
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
			de: {
				title: "Familienhaus Brandenburg",
				shortTitle: "Familienhaus",
				location: "Brandenburg",
				type: "Wohn- & Esszimmer",
				scope: "Konzept, Layout, Moodboards, Design-Boards, Sourcing",
				tagline:
					"Ein schlauchförmiges Wohn- und Esszimmer, neu gedacht für eine vierköpfige Familie.",
				intro:
					"Ein großer, schlauchförmiger Wohn- und Essraum, verwandelt in ein stimmiges Zuhause für eine Familie mit zwei kleinen Kindern. Die Mission: ein gemütlicher Raum, der ruhig und lebendig zugleich ist, in dem moderne Elemente auf Vintage-Stücke treffen und der Platz für die ganze Familie und für Zeit zu zweit bietet. Dazu brauchte er mehr Stauraum, schmutzabweisende Materialien für den Alltag mit Kleinkindern und eine Gestaltung, die die Breite des Raums betont, um von der Länge abzulenken.",
			},
		},
		sections: [
			{
				heading: l("Mood & palette", "Mood & Palette"),
				body: l(
					[
						"Organic shapes meet clean lines. Abstract art, silver metal and glass accents, soft warm fabrics and plenty of wood.",
					],
					[
						"Organische Formen treffen auf klare Linien. Abstrakte Kunst, silberne Metall- und Glasakzente, weiche, warme Stoffe und viel Holz.",
					],
				),
				palette: [
					{ name: l("Sage", "Salbei"), color: "#8fa38a" },
					{ name: l("Cream", "Creme"), color: "#ddd6c3" },
					{ name: l("Stone", "Stein"), color: "#b4b3af" },
				],
			},
			{
				heading: l("The result", "Das Ergebnis"),
				images: [
					{
						file: "brandenburg-family-home/after-1.jpg",
						alt: l(
							"The finished living area with a beige sectional sofa, a glass coffee table, a green vintage armchair, large artwork and a hidden TV corner.",
							"Der fertige Wohnbereich mit beigem Ecksofa, Glascouchtisch, grünem Vintage-Sessel, großem Kunstwerk und einer unauffälligen TV-Ecke.",
						),
						tone: "warm",
						orientation: "landscape",
					},
					{
						file: "brandenburg-family-home/after-2.jpg",
						alt: l(
							"The finished dining area with a glass-bubble chandelier, a sideboard and a white storage wall.",
							"Der fertige Essbereich mit Glaskugel-Leuchte, Sideboard und weißer Stauraumwand.",
						),
						tone: "warm",
						orientation: "landscape",
					},
				],
			},
		],
	},
	{
		slug: "p-berg-bedroom",
		status: "complete",
		cover: {
			file: "p-berg-bedroom/walls-2.jpg",
			alt: l(
				"Bedroom with dusty pink limewash walls, a bird-of-paradise plant, a floating bedside table with a stone lamp and a bed with terracotta bedding.",
				"Schlafzimmer mit altrosa Kalkwänden, Strelitzie, schwebendem Nachttisch mit Steinlampe und einem Bett mit terrakottafarbener Bettwäsche.",
			),
			tone: "blush",
			position: "50% 62%",
		},
		card: {
			file: "p-berg-bedroom/walls-1.jpg",
			alt: l(
				"Corner of the bedroom with dusty pink limewash walls, stucco cornice, a bird-of-paradise plant and a bed with an orange duvet.",
				"Ecke des Schlafzimmers mit altrosa Kalkwänden, Stuckleiste, Strelitzie und einem Bett mit oranger Bettwäsche.",
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
			de: {
				title: "Schlafzimmer P-Berg",
				shortTitle: "Schlafzimmer",
				location: "Prenzlauer Berg, Berlin",
				type: "Schlafzimmer · Altbau",
				scope: "Farbkonzept, Stauraum, Beleuchtung, DIY-Upgrades",
				tagline:
					"Ein Altbau-Schlafzimmer, das sich zunutze macht, was schon da war.",
				intro:
					"Weiße Wände, ein Pappkarton und ein Ledersessel, in die Ecke geschoben. Dieses Altbau-Schlafzimmer hatte Stuck und gutes Parkett, aber keinen Charakter. Die Mission: ein ruhiges, gemütliches Zimmer mit mehr Stauraum, das den Platz besser nutzt und vorhandenen Möbeln eine neue Rolle gibt, statt sie zu ersetzen.",
			},
		},
		sections: [
			{
				heading: l("Before", "Vorher"),
				images: [
					{
						file: "p-berg-bedroom/before-1.jpg",
						alt: l(
							"The bedroom before: white walls, bed with bench, white wardrobe, moving boxes and a leather wingback chair in the corner.",
							"Das Schlafzimmer vorher: weiße Wände, Bett mit Bank, weißer Kleiderschrank, Umzugskartons und ein Ledersessel in der Ecke.",
						),
						tone: "ecru",
						orientation: "portrait",
					},
				],
			},
			{
				heading: l("Mood & palette", "Mood & Palette"),
				body: l(
					[
						"Lots of texture and natural materials. Wood tones that pick up the colour of the floor, structure on the walls through limewash, and a new role for the existing armchair.",
					],
					[
						"Viel Textur und Naturmaterialien. Holztöne, die die Farbe des Bodens aufgreifen, Struktur an den Wänden durch Kalkfarbe und eine neue Rolle für den vorhandenen Sessel.",
					],
				),
				palette: [
					{ name: l("Dusty pink", "Altrosa"), color: "#d6b9ae" },
					{ name: l("Terracotta", "Terrakotta"), color: "#c26a45" },
					{ name: l("Chocolate", "Schokolade"), color: "#5a3d33" },
				],
			},
			{
				heading: l("The result", "Das Ergebnis"),
				images: [
					{
						file: "p-berg-bedroom/final.jpg",
						alt: l(
							"The finished bedroom: limewash walls, stone bedside lamp, plant and terracotta bedding.",
							"Das fertige Schlafzimmer: Kalkwände, Nachttischlampe aus Stein, Pflanze und terrakottafarbene Bettwäsche.",
						),
						tone: "blush",
						orientation: "portrait",
					},
					{
						file: "p-berg-bedroom/anchor.jpg",
						alt: l(
							"Leather wingback chair with arc lamp, side table and large abstract painting.",
							"Ledersessel mit Bogenlampe, Beistelltisch und großem abstraktem Gemälde.",
						),
						tone: "olive",
						orientation: "portrait",
					},
					{
						file: "p-berg-bedroom/storage.jpg",
						alt: l(
							"Olive wardrobe doors with ceramic knobs, stucco cornice and the bed in the foreground.",
							"Olivgrüne Schranktüren mit Keramikknöpfen, Stuckleiste und das Bett im Vordergrund.",
						),
						tone: "olive",
						orientation: "portrait",
					},
					{
						file: "p-berg-bedroom/light-2.jpg",
						alt: l(
							"Two stone bedside lamps flanking the bed.",
							"Zwei Nachttischlampen aus Stein links und rechts vom Bett.",
						),
						tone: "blush",
						orientation: "portrait",
					},
					{
						file: "p-berg-bedroom/walls-1.jpg",
						alt: l(
							"Corner of the bedroom with dusty pink limewash walls and stucco cornice.",
							"Ecke des Schlafzimmers mit altrosa Kalkwänden und Stuckleiste.",
						),
						tone: "blush",
						orientation: "portrait",
					},
					{
						file: "p-berg-bedroom/diy-after.jpg",
						alt: l(
							"A cabinet painted terracotta with ceramic knobs, below a wavy mirror.",
							"Eine terrakottafarben gestrichene Kommode mit Keramikknöpfen unter einem geschwungenen Spiegel.",
						),
						tone: "blush",
						orientation: "portrait",
					},
					{
						file: "p-berg-bedroom/walls-2.jpg",
						alt: l(
							"Limewash wall and stucco cornice above the bed with terracotta bedding.",
							"Kalkwand und Stuckleiste über dem Bett mit terrakottafarbener Bettwäsche.",
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
				"Gästezimmer mit altrosa Wänden, einem weißen Bett mit dunkler Bettwäsche und einem tiefgrünen Kleiderschrank.",
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
			de: {
				title: "Gästezimmer Wedding",
				shortTitle: "Gästezimmer",
				location: "Wedding, Berlin",
				type: "Gästezimmer / Büro · Altbau",
				scope:
					"Farbkonzept, Layout, Stauraumlösungen, Verbindung von Gäste- und Arbeitszimmer",
				statusLabel: "Coming soon",
				tagline: "Ein Gästezimmer, das auch Büro ist, ganz ohne Office-Vibe.",
				intro:
					"Ein Raum, zwei Leben: tagsüber ein ruhiger Arbeitsplatz, zwei- bis dreimal im Monat ein gemütliches Bett für Besuch. Heute ist der Raum halb Gästezimmer, halb Wäscheecke, und das eigentliche Büro sitzt in der Küche. Die Mission: ein Schreibtisch mit Platz für einen Monitor und ein richtiges Gästebett oder Schlafsofa, dazu Stauraum für Bastelsachen, Jacken und Kleidung. Alles gemütlich, warm und klar, ohne Büro-Vibe und ohne Silber. Schrank und Schreibtisch bleiben, Teppich, Deckenlampe und Tapete dürfen gehen.",
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
				"Ein leeres, sonniges Zimmer in Shaleens eigener Altbauwohnung mit Eichenparkett und hohem Fenster.",
			),
			tone: "wine",
		},
		link: {
			label: l(
				"Follow the Renovation Diaries",
				"Den Renovation Diaries folgen",
			),
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
			de: {
				title: "Mein eigenes Zuhause",
				shortTitle: "Mein eigenes Zuhause",
				location: "Prenzlauer Berg, Berlin",
				type: "3-Zimmer-Wohnung · Altbau",
				scope:
					"Renovierung von Küche und Bad, Gestaltung von Gästezimmer, Wohnzimmer und Schlafzimmer",
				statusLabel: "Coming soon",
				tagline:
					"Eine 130 Jahre alte Gründerzeitwohnung, irgendwo zwischen Baustelle und Zuhause.",
				intro:
					"Eine 130 Jahre alte Gründerzeitwohnung in Berlin, derzeit irgendwo zwischen Baustelle und Zuhause. Es ist das einzige Projekt, bei dem ich Leitungen verlegen darf, und damit die Ausnahme auf dieser Seite, nicht die Regel. Alles andere folgt denselben Prinzipien wie bei meinen Kund:innen: bewahren, was Charakter hat, Farbe, Layout und Licht neu denken und Alt und Neu sich einen Raum teilen lassen. Wir ziehen im Dezember ein, und jede Entscheidung (und jeden Fehler) dokumentiere ich in meinen Renovation Diaries auf Instagram.",
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
		card: raw.card && resolveImage(raw.card, locale),
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
