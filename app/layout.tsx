import Scene from "@/components/Scene";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

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
				<Navbar />
				{children}
			</body>
		</html>
	);
}
