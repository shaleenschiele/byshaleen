import type { Locale } from "./locale";

const en = {
	meta: {
		title: "by.shaleen — Interior Design Studio",
		description:
			"Renter-friendly interior design in Berlin. Flat Therapy, Room Recipe, Full Design Service and furniture sourcing with by.shaleen.",
	},
	nav: {
		home: "Home",
		about: "About",
		services: "Services",
		projects: "Projects",
		references: "Client references",
		contact: "Contact",
		sections: "Sections",
		mainMenu: "Main menu",
		openMenu: "Open menu",
		closeMenu: "Close menu",
		language: "Language",
	},
	hero: {
		lines: ["Make your home"],
		accent: "feel personal",
		kicker: "Renter-friendly design",
		masthead: { right: "On-site & remote" },
		alt: "A cosy sofa with two throw pillows, one cream and one rust-coloured, bathed in warm sunlight.",
	},
	about: {
		heading: "About",
		alt: "Shaleen, founder of byshaleen.com, wearing a striped shirt and a bandana, smiling at the camera while sitting at a table with a cocktail.",
		paragraphs: [
			"Eight years in corporate taught me structure and strategy. My eye for design did the rest.",
			"My style is best described as ‘moody modern’: rich colours, a mix of materials, organic shapes, and old furniture happily coexisting with new.",
			"Located in Berlin, Germany, I offer on-site as well as remote support and specialise in renter-friendly (Altbau) design: turning the flat you’re renting (no structural changes, no landlord drama, no deposit at risk) into somewhere that actually feels like yours. Usually it’s small, deliberate decisions, not a full-on renovation, doing the heavy lifting.",
			"Work with me and expect a clear process, a bit of gentle pushback on your own ideas, clever workarounds and solutions for the things you can’t change structurally, and, despite the seriousness with which I take cushion placement, quite a lot of fun along the way.",
		],
	},
	services: {
		heading: "Services",
		subheading:
			"Available for in-person work across Berlin, and remotely anywhere in the world.",
		whatYouGet: "What you get",
		notIncluded: "Not included",
		howItWorks: "How it works",
		goodToKnow: "Good to know",
	},
	projects: {
		heading: "Projects",
		subheading: "Selected work, from Altbau bedrooms to family homes.",
		inProgress: "In progress",
		comingSoon: "Coming soon",
		allProjects: "All projects",
		nextProject: "Next project",
		wantARoom: "Want a room like this?",
		seeServices: "See services",
		notFound: "Project not found",
		location: "Location",
		space: "Space",
		scope: "Scope",
		status: "Status",
	},
	call: {
		heading: "Not sure which product is right for you? Let’s chat!",
		note: "A free, no-obligation 15-minute call.",
		button: "Book a free call",
		link: "Not sure yet? Book a free 15-minute call",
		menu: "Free 15-min call",
		footerLead: "Not sure which service is right for you?",
		footerLink: "Book a free 15-minute call",
		footerTail: "and we’ll figure it out together.",
	},
	references: {
		heading: "Client references",
	},
	contact: {
		heading: "Any other questions?",
		rights: "Shaleen Schiele | All rights reserved",
		imprint: "Imprint",
		dataProtection: "Data Protection",
		instagram: "by.shaleen on Instagram",
		alt: "A wooden bookshelf filled with books and decorative vases in various earthy tones.",
	},
};

export type UiStrings = typeof en;

const de: UiStrings = {
	meta: {
		title: "by.shaleen — Interior-Design-Studio",
		description:
			"Renter-friendly Interior Design in Berlin. Flat Therapy, Room Recipe, Full Design Service und Möbel-Sourcing mit by.shaleen.",
	},
	nav: {
		home: "Start",
		about: "Über mich",
		services: "Leistungen",
		projects: "Projekte",
		references: "Reviews",
		contact: "Kontakt",
		sections: "Abschnitte",
		mainMenu: "Hauptmenü",
		openMenu: "Menü öffnen",
		closeMenu: "Menü schließen",
		language: "Sprache",
	},
	hero: {
		lines: ["Ein Zuhause, das"],
		accent: "sich nach dir anfühlt",
		kicker: "Renter-friendly Design",
		masthead: { right: "Vor Ort & remote" },
		alt: "Ein gemütliches Sofa mit zwei Kissen, eines in Creme, eines in Rostrot, im warmen Sonnenlicht.",
	},
	about: {
		heading: "Über mich",
		alt: "Shaleen, Gründerin von byshaleen.com, in gestreiftem Hemd und mit Bandana, lächelt in die Kamera und sitzt mit einem Cocktail an einem Tisch.",
		paragraphs: [
			"Über acht Jahre in der Tech-Branche haben mir Struktur und Strategie beigebracht. Mein Gespür für Design hat den Rest erledigt und so bin ich vom Projektmanagement ins Interior Design gewechselt.",
			"Mein Stil lässt sich am besten als „moody-modern“ beschreiben: satte Farben, eine Mischung aus Materialien, organische Formen und alte Möbel, die harmonisch mit neuen koexistieren.",
			"Von Berlin aus biete ich sowohl Vor-Ort- als auch Online-Betreuung an und habe mich auf mieterfreundliches (Altbau-)Design spezialisiert: Ich verwandle die Wohnung, die du mietest (keine baulichen Veränderungen, kein Ärger mit dem Vermieter, keine Gefahr für deine Kaution), in einen Ort, der sich wirklich wie dein Zuhause anfühlt. Meistens sind es kleine, wohlüberlegte Entscheidungen und keine umfassende Renovierung, die den entscheidenden Unterschied machen.",
			"Natürlich unterstütze ich auch gerne bei der Umgestaltung gewerblicher Flächen (z. B. Coffee-Shops, Friseursalons, Kosmetikstudios, Pilatesstudios etc.) oder Wohneigentum.",
			"In der Zusammenarbeit kannst du klare und transparente Kommunikation erwarten. Ich nehme dich Schritt für Schritt auf dem Weg mit und gebe auch mal einen freundlichen Pushback, wenn ich denke, dass wir deine eigenen Ideen in eine noch bessere Richtung lenken könnten. Freu dich außerdem auf clevere Workarounds und Lösungen für Probleme, die du baulich nicht ändern kannst. Am Ende ist es mir aber vor allem wichtig, dass jedes Designprojekt neben fachlicher Ernsthaftigkeit auch Freude bei der Neugestaltung mit sich bringt.",
		],
	},
	services: {
		heading: "Leistungen",
		subheading:
			"Verfügbar für Termine vor Ort in ganz Berlin und remote weltweit.",
		whatYouGet: "Das bekommst du",
		notIncluded: "Nicht enthalten",
		howItWorks: "So läuft’s ab",
		goodToKnow: "Gut zu wissen",
	},
	projects: {
		heading: "Projekte",
		subheading:
			"Ausgewählte Arbeiten, vom Altbau-Schlafzimmer bis zum Familienhaus.",
		inProgress: "In Arbeit",
		comingSoon: "Coming soon",
		allProjects: "Alle Projekte",
		nextProject: "Nächstes Projekt",
		wantARoom: "Du wünschst dir so einen Raum?",
		seeServices: "Zu den Leistungen",
		notFound: "Projekt nicht gefunden",
		location: "Ort",
		space: "Raum",
		scope: "Umfang",
		status: "Status",
	},
	call: {
		heading: "Du weißt nicht, welches Angebot zu dir passt? Lass uns sprechen!",
		note: "Ein kostenloses, unverbindliches 15-Minuten-Gespräch.",
		button: "Kostenloses Gespräch buchen",
		link: "Noch unsicher? Buche ein kostenloses 15-Minuten-Gespräch",
		menu: "Gratis-Call (15 Min.)",
		footerLead: "Du weißt nicht, welche Leistung zu dir passt?",
		footerLink: "Buche ein kostenloses 15-Minuten-Gespräch",
		footerTail: "und wir finden es gemeinsam heraus.",
	},
	references: {
		heading: "Reviews",
	},
	contact: {
		heading: "Noch Fragen?",
		rights: "Shaleen Schiele | Alle Rechte vorbehalten",
		imprint: "Impressum",
		dataProtection: "Datenschutz",
		instagram: "by.shaleen auf Instagram",
		alt: "Ein Holzregal voller Bücher und dekorativer Vasen in verschiedenen Erdtönen.",
	},
};

export const UI: Record<Locale, UiStrings> = { en, de };
