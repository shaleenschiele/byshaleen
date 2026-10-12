import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Scripts,
	useParams,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { toLocale } from "#/i18n/locale";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "by.shaleen — Interior Design Studio",
			},
			{
				name: "description",
				content:
					"Renter-friendly interior design in Berlin. Full design service, furniture sourcing and Design SOS calls with by.shaleen.",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "stylesheet",
				href: "/fonts/fonts.css",
			},
			{
				rel: "preload",
				href: "/fonts/cormorant-300.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous",
			},
			{
				rel: "preload",
				href: "/fonts/poppins-400.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous",
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const locale = useParams({
		strict: false,
		select: (params) => toLocale(params.locale),
	});

	return (
		<html lang={locale}>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
