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
		project: l("Bedroom"),
		quote: l(
			"Working with her on our bedroom renovation was a delight. She understood our style and needs, avoiding a one-size-fits-all approach. Flexible and open to feedback, she made us feel heard throughout the project. Her blend of creativity and client focus resulted in a uniquely personal space. I highly recommend her as an interior designer.",
		),
	},
	{
		names: "Rike & Sebastian",
		featured: true,
		project: l("Family living & dining room"),
		quote: l(
			"To be honest, our living room used to look pretty dreary and uninviting. Luckily, Shaleen took charge of the project! With her highly organized approach and brilliant ideas, she guided us step by step—and with a great deal of patience—through the design and implementation process. Now the living room has become the whole family's absolute favorite place. I highly recommend her!",
		),
	},
	{
		names: "Mona & Felix",
		project: l("Living room & bedroom"),
		quote: l(
			"Shaleen did wonderful work helping us to make our new flat by the lake look unique and cozy. She gave us a lot of inspiration with coloring our walls that fit our furniture and style. She helped choosing new items that felt exactly right and tailored for us. It's respectful & fun working with her!",
		),
	},
];
