import type { L, Locale } from "#/i18n/locale";

type ServiceText = {
	title: string;
	tagline: string;
	/** Short price hint shown in the collapsed row. */
	teaser: string;
	intro: string[];
	included: string[];
	notIncluded?: string;
	howItWorks?: { ordered: boolean; items: string[] };
	goodToKnow: string[];
	price: { headline: string; lines: string[] };
	cta: { label: string; note?: string };
};

type RawService = {
	id: string;
	/** Puts "Not included" under "How it works" (left) so the right column stays short. */
	notIncludedLeft?: boolean;
	/** Booking link; services without one show a disabled "Coming soon" button. */
	href?: string;
	text: L<ServiceText>;
};

export type Service = {
	id: string;
	notIncludedLeft?: boolean;
	href?: string;
} & ServiceText;

const RAW_SERVICES: RawService[] = [
	{
		id: "flat-therapy",
		href: "https://tidycal.com/shaleenschiele",
		text: {
			en: {
				title: "Flat Therapy",
				tagline: "One hour. One problem. Finally solved.",
				teaser: "€89 launch price",
				intro: [
					"The sofa that’s in the wrong spot. The wall colour that went rogue. The corner nobody knows what to do with. Send me a few photos, we talk it through on a video call, and you leave with a clear to-do list instead of another Pinterest board. Couples welcome. I’ve mediated worse than a rug.",
				],
				included: [
					"Online questionnaire so that I can understand the problem",
					"60-minute video call to understand the problem better and find concrete solutions for your room",
					"A written to-do list and call summary within 48 hours so that you can really implement the changes we talked about",
				],
				goodToKnow: [
					"If you book a Room Recipe or Full Design Service within 30 days, the Flat Therapy session fee is credited in full.",
				],
				price: {
					headline: "€89",
					lines: [
						"Launch price until 28 February 2027",
						"At home in Berlin: €129 including 19% VAT",
					],
				},
				cta: { label: "Book now" },
			},
		},
	},
	{
		id: "furniture-sourcing",
		notIncludedLeft: true,
		text: {
			en: {
				title: "Furniture Sourcing & Vintage Hunt",
				tagline: "You know what you want. You just don’t have the evenings.",
				teaser: "from €129",
				intro: [
					"Goodbye, 47 open tabs at midnight.",
					"Want something with a past? I hunt through Berlin’s vintage shops and flea markets in person, or search auction houses online. Perfect if you’re new to the city and don’t know where the good stuff hides yet.",
				],
				included: [
					"Online questionnaire to specify what you are looking for (incl. measurements and budget)",
					"15-minute kickoff call, so I understand your taste before I start hunting",
					"Three curated options per piece, with dimensions, prices and links",
				],
				notIncluded: "The price for the furniture and delivery themselves.",
				howItWorks: {
					ordered: true,
					items: [
						"Fill in the questionnaire.",
						"Pay securely via Stripe.",
						"Hop on the 15-minute kickoff call with me.",
						"Enjoy your new pieces.",
					],
				},
				goodToKnow: [
					"For vintage you get a fixed quote after our style call, because a sideboard is easier to find than a 1960s rattan lamp in exactly that green.",
					"I have fixed “Hunt Days” (twice a month) that I use to go to flea markets and vintage dealers. Your request will fall into one of these days and delivery depends on the schedule.",
					"You place the order and pay the shop directly. Shipping, delivery and transport are not included. Vintage moves fast, so I can’t promise a piece will still be there tomorrow.",
				],
				price: {
					headline: "From €129",
					lines: [
						"New pieces: €129 for the first piece (style call included), €69 for each additional piece",
						"Vintage hunt online: from €179 per piece",
						"Vintage hunt in person (three shops or flea markets): from €299 per piece",
					],
				},
				cta: {
					label: "Coming soon",
					note: "Still in the making, so not bookable just yet. I’ll share the links once they are ready!",
				},
			},
		},
	},
	{
		id: "room-recipe",
		href: "https://book.stripe.com/4gM8wRbp7gHN3Gz4pkgEg01",
		text: {
			en: {
				title: "Room Recipe",
				tagline: "The plan is mine. The cooking is yours.",
				teaser: "€549 launch price",
				intro: [
					"For when you can’t picture the finished room, but you’re happy to do the shopping and shifting yourself.",
				],
				included: [
					"A get-to-know call to start, so I understand you and your room",
					"2 moodboard options incl. colour palette and fabric suggestions",
					"2D floor plan with furniture layout",
					"3D-style room sketch with your furniture picks (not photorealistic)",
					"Shopping list with up to 10 products, built around what you already own",
					"Everything in one PDF, within 10 working days",
					"One 30-minute video call at any stage in the process you prefer",
					"One round of changes via email or WhatsApp within 14 days of delivery",
				],
				notIncluded:
					"Additional video calls, a visit to your home, photorealistic 3D renderings, ordering and delivery, extra rooms or extra rounds of changes. Extras are available for €95 per hour.",
				howItWorks: {
					ordered: true,
					items: [
						"Pay securely via Stripe.",
						"Fill in the questionnaire and send your photos and measurements.",
						"Receive your Room Recipe as a PDF within 10 working days.",
						"Tell me what you’d like changed. You get one round of changes.",
					],
				},
				goodToKnow: [
					"If your room isn’t a good fit for a Room Recipe, I’ll tell you within 2 working days and refund you in full.",
					"Want to talk first? Book Flat Therapy. If you book a Room Recipe within 30 days, the session fee is credited in full.",
					"Some links in your shopping list may be affiliate links. I may earn a small commission. It never decides what I recommend.",
				],
				price: {
					headline: "€549",
					lines: [
						"Launch price until 28 February 2027, including 19% VAT",
						"One room up to 30 m². Extra rooms, extra rounds of changes and 3D views are available on request.",
					],
				},
				cta: { label: "Book Room Recipe now" },
			},
		},
	},
	{
		id: "full-design-service",
		text: {
			en: {
				title: "Full Design Service",
				tagline: "The whole thing, start to finish.",
				teaser: "from €1,290",
				intro: [
					"For the room you’ve been meaning to sort out for three years. We start in your space with a tape measure and an honest conversation, and finish with a plan you can actually see. Renter-friendly, always. Your deposit stays where it belongs.",
				],
				included: [
					"A get-to-know call to start, so I understand you and your wishes",
					"Questionnaire and an in-person kickoff in your home (up to 90 minutes, including measuring)",
					"2 moodboard options incl. colour palette and fabric suggestions",
					"2D floor plan with furniture layout and lighting concept",
					"3D renderings of the final design (two views)",
					"Shopping list with up to 15 products, matched to your budget",
					"One 60-minute presentation call",
					"Two rounds of changes via email or WhatsApp throughout the process",
					"Timeline: around 4 to 6 weeks",
				],
				notIncluded:
					"The furniture and products themselves, the tradespeople’s work (you pay them directly), technical planning such as permits, electrics or plumbing, and any additional video calls.",
				howItWorks: {
					ordered: false,
					items: [
						"Pay securely via Stripe.",
						"20% when you accept the offer, 50% when I present the design concept, 30% when I deliver the final design.",
					],
				},
				goodToKnow: [
					"Want to talk first? Book Flat Therapy. If you book a Full Design Service within 30 days, the session fee is credited in full.",
					"Some links in your shopping list may be affiliate links. I may earn a small commission. It never decides what I recommend.",
					"Want me to stay on until the last picture is hung? For €95 per hour I coordinate orders and deliveries, manage the project and coordinate your tradespeople.",
				],
				price: {
					headline: "From €1,290",
					lines: [
						"for the first room, €990 for each additional room",
						"Rooms up to 30 m²; larger rooms, kitchens and bathrooms on request. All prices include 19% VAT.",
					],
				},
				cta: {
					label: "Coming soon",
					note: "Still in the making, so not bookable just yet.",
				},
			},
		},
	},
];

export function getServices(locale: Locale): Service[] {
	return RAW_SERVICES.map(({ id, href, notIncludedLeft, text }) => ({
		id,
		href,
		notIncludedLeft,
		...text[locale],
	}));
}
