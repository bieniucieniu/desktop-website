import Scene from "@/components/Scene";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetBrainsMono = JetBrains_Mono({
	weight: ["300", "400", "600"],
	subsets: ["latin"],
});

export const metadata = {
	title: "i'm broke",
	description: "yes i am",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={jetBrainsMono.className}>
				<Scene className="fixed h-screen w-screen overflow-hidden -z-10" />
				<div className="min-h-screen flex flex-col text-white m-0 p-0">
					<nav className="fixed flex flex-row justify-around text-2xl underline w-screen">
						<a target="_blank" href="https://github.com/bieniucieniu">
							github
						</a>
						<Link href="/preview/breakout">breakout</Link>
						<Link href="/preview/sorting">sorting</Link>
						<Link href="/preview/beakout">beakout (pre breakout)</Link>
					</nav>
					{children}
				</div>
			</body>
		</html>
	);
}
