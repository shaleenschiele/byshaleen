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
			de: {
				title: "Flat Therapy",
				tagline: "Eine Stunde. Ein Problem. Endlich gelöst.",
				teaser: "89 € Einführungspreis",
				intro: [
					"Das Sofa, das am falschen Platz steht. Die Wandfarbe, die aus der Reihe tanzt. Die Ecke, mit der keiner etwas anzufangen weiß. Schick mir ein paar Fotos, wir besprechen alles im Videocall, und du gehst mit einer klaren To-do-Liste statt mit einem weiteren Pinterest-Board. Paare willkommen. Ich habe schon Schlimmeres geschlichtet als einen Teppich.",
				],
				included: [
					"Online-Fragebogen, damit ich das Problem verstehe",
					"60-Minuten-Videocall, um das Problem besser zu verstehen und konkrete Lösungen für deinen Raum zu finden",
					"Eine schriftliche To-do-Liste und Zusammenfassung des Calls innerhalb von 48 Stunden, damit du die besprochenen Änderungen wirklich umsetzen kannst",
				],
				goodToKnow: [
					"Wenn du innerhalb von 30 Tagen ein Room Recipe oder den Full Design Service buchst, wird die Gebühr für Flat Therapy vollständig angerechnet.",
				],
				price: {
					headline: "89 €",
					lines: [
						"Einführungspreis bis 28. Februar 2027",
						"Bei dir zu Hause in Berlin: 90 Min. für 229 € inkl. 19 % MwSt.",
					],
				},
				cta: { label: "Jetzt buchen" },
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
					"Looking for something new? You know you need a sofa. The internet has 3,000 of them, and somehow none look right. I do the scrolling and come back with a curated selection to fit your room, measurements and budget.",
					"Want something with a past? I hunt through Berlin’s vintage shops and flea markets in person, or search auction houses online. Perfect if you’re new to the city and don’t know where the good stuff hides yet.",
				],
				included: [
					"Online questionnaire to specify what you are looking for (incl. measurements and budget)",
					"15-minute kickoff call, so I understand your taste before I start hunting",
					"Three curated options per piece, with dimensions, prices and links",
				],
				notIncluded:
					"The price for the furniture itself, as well as shipping, delivery and transport.",
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
					"Vintage moves fast, so I can’t promise a piece will still be there tomorrow.",
				],
				price: {
					headline: "From €129",
					lines: [
						"New pieces: €129 for the first piece (style call included), €69 for each additional piece",
						"Vintage hunt online: from €139 for the first piece, from €89 for each additional piece",
						"Vintage hunt in person (three shops or flea markets): from €219 for the first piece, from €129 for each additional piece",
					],
				},
				cta: {
					label: "Coming soon",
					note: "Still in the making, so not bookable just yet. I’ll share the links once they are ready!",
				},
			},
			de: {
				title: "Furniture Sourcing & Vintage Hunt",
				tagline: "Du weißt, was du willst. Dir fehlen nur die Abende.",
				teaser: "ab 129 €",
				intro: [
					"Tschüss, 47 offene Tabs um Mitternacht.",
					"Du suchst etwas Neues? Du weißt, dass du ein Sofa brauchst. Das Internet hat 3.000 davon, und irgendwie sieht keins richtig aus. Ich übernehme das Scrollen und komme mit einer kuratierten Auswahl zurück, die zu deinem Raum, deinen Maßen und deinem Budget passt.",
					"Lust auf etwas mit Vergangenheit? Ich durchstöbere Berlins Vintage-Läden und Flohmärkte persönlich oder suche online in Auktionshäusern. Perfekt, wenn du neu in der Stadt bist und noch nicht weißt, wo die guten Sachen stecken.",
				],
				included: [
					"Online-Fragebogen, in dem du angibst, was du suchst (inkl. Maße und Budget)",
					"15-Minuten-Kickoff-Call, damit ich deinen Geschmack verstehe, bevor ich losjage",
					"Drei kuratierte Optionen pro Möbelstück, mit Maßen, Preisen und Links",
				],
				notIncluded:
					"Der Preis für die Möbel selbst sowie Versand, Lieferung und Transport.",
				howItWorks: {
					ordered: true,
					items: [
						"Fragebogen ausfüllen.",
						"Sicher per Stripe bezahlen.",
						"Im 15-Minuten-Kickoff-Call mit mir sprechen.",
						"Deine neuen Lieblingsstücke genießen.",
					],
				},
				goodToKnow: [
					"Für Vintage bekommst du nach unserem Style-Call ein Festangebot, denn ein Sideboard findet man leichter als eine Rattanlampe aus den 60ern in genau diesem Grün.",
					"Ich habe feste „Hunt Days“ (zweimal im Monat), an denen ich Flohmärkte und Vintage-Händler abklappere. Deine Anfrage fällt auf einen dieser Tage, die Lieferung hängt vom Terminplan ab.",
					"Vintage ist schnell weg, deshalb kann ich nicht versprechen, dass ein Stück morgen noch da ist.",
				],
				price: {
					headline: "Ab 129 €",
					lines: [
						"Neuware: 129 € für das erste Stück (inkl. Style-Call), 69 € für jedes weitere Stück",
						"Vintage-Suche online: ab 139 € für das erste Stück, ab 89 € für jedes weitere",
						"Vintage-Suche vor Ort (drei Läden oder Flohmärkte): ab 219 € für das erste Stück, ab 129 € für jedes weitere",
					],
				},
				cta: {
					label: "Demnächst",
					note: "Noch in Arbeit, daher noch nicht buchbar. Sobald die Links bereit sind, teile ich sie mit dir!",
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
			de: {
				title: "Room Recipe",
				tagline: "Der Plan kommt von mir. Das Kochen übernimmst du.",
				teaser: "549 € Einführungspreis",
				intro: [
					"Für alle, die sich den fertigen Raum nicht vorstellen können, aber gern selbst einkaufen und umräumen.",
				],
				included: [
					"2 Moodboard-Optionen inkl. Farbpalette und Stoffvorschlägen",
					"2D-Grundriss mit Möblierung",
					"3D-Raumskizze mit deinen Möbelfavoriten (nicht fotorealistisch)",
					"Einkaufsliste mit bis zu 10 Produkten, abgestimmt auf das, was du schon besitzt",
					"Alles in einer PDF, innerhalb von 10 Werktagen",
					"Ein 30-Minuten-Videocall zu einem beliebigen Zeitpunkt im Prozess",
					"Eine Änderungsrunde per E-Mail / WhatsApp innerhalb von 14 Tagen nach Lieferung",
				],
				notIncluded:
					"Zusätzliche Videocalls, ein Besuch bei dir zu Hause, fotorealistische 3D-Renderings, Bestellung und Lieferung, zusätzliche Räume oder weitere Änderungsrunden. Extras sind für 95 € pro Stunde möglich.",
				howItWorks: {
					ordered: true,
					items: [
						"Sicher per Stripe bezahlen.",
						"Fragebogen ausfüllen und Fotos sowie Maße schicken.",
						"Dein Room Recipe als PDF innerhalb von 10 Werktagen erhalten.",
						"Mir sagen, was du geändert haben möchtest. Du hast eine Änderungsrunde.",
					],
				},
				goodToKnow: [
					"Wenn sich dein Raum nicht für ein Room Recipe eignet, sage ich dir das innerhalb von 2 Werktagen und erstatte dir den vollen Betrag.",
					"Du möchtest erst sprechen? Buche Flat Therapy. Buchst du innerhalb von 30 Tagen ein Room Recipe, wird die Gebühr vollständig angerechnet.",
					"Einige Links in deiner Einkaufsliste können Affiliate-Links sein. Dafür erhalte ich unter Umständen eine kleine Provision. Sie entscheidet nie darüber, was ich empfehle.",
				],
				price: {
					headline: "549 €",
					lines: [
						"Inkl. 19 % MwSt. · Einführungspreis bis 28. Februar 2027",
						"Ein Raum bis 30 m². Zusätzliche Räume, weitere Änderungsrunden und 3D-Ansichten auf Anfrage.",
					],
				},
				cta: { label: "Room Recipe jetzt buchen" },
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
			de: {
				title: "Full Design Service",
				tagline: "Das ganze Paket, von Anfang bis Ende.",
				teaser: "ab 1.290 €",
				intro: [
					"Für den Raum, den du seit drei Jahren in Ordnung bringen willst. Wir starten bei dir vor Ort mit Zollstock und einem ehrlichen Gespräch und enden mit einem Plan, den du tatsächlich sehen kannst. Immer mieterfreundlich. Deine Kaution bleibt, wo sie hingehört.",
				],
				included: [
					"Fragebogen und ein Kickoff bei dir zu Hause (bis zu 90 Minuten, inkl. Aufmaß)",
					"2 Moodboard-Optionen inkl. Farbpalette und Stoffvorschlägen",
					"2D-Grundriss mit Möblierung und Lichtkonzept",
					"3D-Renderings des finalen Designs (zwei Ansichten)",
					"Einkaufsliste mit bis zu 15 Produkten, passend zu deinem Budget",
					"Ein 60-minütiger Präsentationscall",
					"Zwei Änderungsrunden per E-Mail oder WhatsApp während des Prozesses",
					"Zeitrahmen: etwa 4 bis 6 Wochen",
				],
				notIncluded:
					"Die Möbel und Produkte selbst, die Arbeit von Handwerkern (du bezahlst sie direkt), technische Planung wie Genehmigungen, Elektrik oder Sanitär sowie zusätzliche Videocalls.",
				howItWorks: {
					ordered: false,
					items: [
						"Sicher per Stripe bezahlen",
						"20 % bei Annahme des Angebots, 50 % bei der Präsentation des Designkonzepts, 30 % bei Lieferung des finalen Designs.",
					],
				},
				goodToKnow: [
					"Du möchtest erst sprechen? Buche Flat Therapy. Buchst du innerhalb von 30 Tagen den Full Design Service, wird die Gebühr vollständig angerechnet.",
					"Einige Links in deiner Einkaufsliste können Affiliate-Links sein. Dafür erhalte ich unter Umständen eine kleine Provision. Sie entscheidet nie darüber, was ich empfehle.",
					"Du möchtest, dass ich dabei bleibe, bis das letzte Bild hängt? Für 95 € pro Stunde koordiniere ich Bestellungen und Lieferungen, steuere das Projekt und stimme mich mit deinen Handwerkern ab.",
				],
				price: {
					headline: "Ab 1.290 €",
					lines: [
						"für den ersten Raum, 990 € für jeden weiteren Raum",
						"Räume bis 30 m²; größere Räume, Küchen und Bäder auf Anfrage. Alle Preise inkl. 19 % MwSt.",
					],
				},
				cta: {
					label: "Demnächst",
					note: "Noch in Arbeit, daher noch nicht buchbar.",
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
