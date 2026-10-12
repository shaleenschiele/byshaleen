import { type L, l } from "#/i18n/locale";

export type Testimonial = {
	names: string;
	/** Shown large as the pull quote; all others follow in two columns. */
	featured?: boolean;
	project: L<string>;
	quote: L<string>;
};

export const TESTIMONIALS: Testimonial[] = [
	{
		names: "Nathalie & Mateusz",
		project: l("Bedroom", "Schlafzimmer"),
		quote: l(
			"Working with her on our bedroom renovation was a delight. She understood our style and needs, avoiding a one-size-fits-all approach. Flexible and open to feedback, she made us feel heard throughout the project. Her blend of creativity and client focus resulted in a uniquely personal space. I highly recommend her as an interior designer.",
			"Die Zusammenarbeit bei unserer Schlafzimmerrenovierung war eine Freude. Sie hat unseren Stil und unsere Bedürfnisse verstanden und auf Lösungen von der Stange verzichtet. Flexibel und offen für Feedback, hat sie dafür gesorgt, dass wir uns während des ganzen Projekts gehört gefühlt haben. Aus ihrer Mischung aus Kreativität und Kundenorientierung ist ein ganz persönlicher Raum entstanden. Ich kann sie als Interior Designerin uneingeschränkt empfehlen.",
		),
	},
	{
		names: "Rike & Sebastian",
		featured: true,
		project: l("Family living & dining room", "Wohn- & Esszimmer der Familie"),
		quote: l(
			"To be honest, our living room used to look pretty dreary and uninviting. Luckily, Shaleen took charge of the project! With her highly organized approach and brilliant ideas, she guided us step by step—and with a great deal of patience—through the design and implementation process. Now the living room has become the whole family’s absolute favorite place. I highly recommend her!",
			"Ganz ehrlich: Unser Wohnzimmer sah früher ziemlich trist und ungemütlich aus. Zum Glück hat Shaleen das Projekt in die Hand genommen! Mit ihrer sehr strukturierten Art und ihren brillanten Ideen hat sie uns Schritt für Schritt, und mit sehr viel Geduld, durch Planung und Umsetzung geführt. Heute ist das Wohnzimmer der absolute Lieblingsort der ganzen Familie. Ich kann sie nur empfehlen!",
		),
	},
	{
		names: "Mona & Felix",
		project: l("Living room & bedroom", "Wohn- & Schlafzimmer"),
		quote: l(
			"Shaleen did wonderful work helping us to make our new flat by the lake look unique and cozy. She gave us a lot of inspiration with coloring our walls that fit our furniture and style. She helped choosing new items that felt exactly right and tailored for us. It’s respectful & fun working with her!",
			"Shaleen hat wunderbare Arbeit geleistet und uns geholfen, unsere neue Wohnung am See einzigartig und gemütlich zu gestalten. Sie hat uns viel Inspiration für die Wandfarben gegeben, die zu unseren Möbeln und unserem Stil passen. Sie hat uns geholfen, neue Stücke auszuwählen, die sich genau richtig und maßgeschneidert angefühlt haben. Die Zusammenarbeit ist respektvoll und macht Spaß!",
		),
	},
];
