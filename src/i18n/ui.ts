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
	},
	hero: {
		lines: ["Make your home"],
		accent: "feel personal",
		kicker: "Renter-friendly design",
		blurb: "No drilling. No landlord drama. No deposit at risk.",
		masthead: { center: "Berlin · Interior Design", right: "On-site & remote" },
		alt: "A cosy sofa with two throw pillows, one cream and one rust-coloured, bathed in warm sunlight.",
	},
	about: {
		heading: "About",
		alt: "Shaleen, founder of byshaleen.com, wearing a striped shirt and a bandana, smiling at the camera while sitting at a table with a cocktail.",
		paragraphs: [
			"Eight years in corporate taught me structure and strategy. My eye for design did the rest.",
			"My style is best described as ‘moody modern’: rich colours, a mix of materials, organic shapes, and old furniture happily coexisting with new.",
			"Located in Berlin, Germany, I offer on-site as well as remote support and specialise in renter-friendly (Altbau) design: turning the flat you’re renting (no drilling, no landlord drama, no deposit at risk) into somewhere that actually feels like yours. Usually it’s small, deliberate decisions, not a full-on renovation, doing the heavy lifting.",
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
	references: {
		heading: "Client references",
	},
	contact: {
		heading: "Any other questions?",
		cta: "Get in touch",
		rights: "Shaleen Schiele | All rights reserved",
		imprint: "Imprint",
		dataProtection: "Data Protection",
		instagram: "by.shaleen on Instagram",
		alt: "A wooden bookshelf filled with books and decorative vases in various earthy tones.",
	},
};

export type UiStrings = typeof en;

export const UI: Record<Locale, UiStrings> = { en };
