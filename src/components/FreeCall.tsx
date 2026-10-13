import { FREE_CALL_URL } from "#/data/links";
import { useUi } from "#/i18n/context";

/** Services section: the "not sure yet?" offer with a button. */
export function FreeCallBlock() {
	const ui = useUi();

	return (
		<div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
			<div>
				<p className="font-display text-2xl leading-snug text-wine italic sm:text-3xl">
					{ui.call.heading}
				</p>
				<p className="body-copy mt-2 text-wine">{ui.call.note}</p>
			</div>
			<a
				href={FREE_CALL_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-wine px-8 py-3 font-body text-sm font-semibold tracking-wide text-wine uppercase transition-colors hover:bg-wine hover:text-cream"
			>
				{ui.call.button} <span aria-hidden="true">→</span>
			</a>
		</div>
	);
}

/** Quiet text link for the footer, the project pages and the menu. */
export function FreeCallLink({
	label,
	className = "",
}: {
	label?: string;
	className?: string;
}) {
	const ui = useUi();

	return (
		<a
			href={FREE_CALL_URL}
			target="_blank"
			rel="noopener noreferrer"
			className={`underline underline-offset-4 hover:no-underline ${className}`}
		>
			{label ?? ui.call.link}
		</a>
	);
}
