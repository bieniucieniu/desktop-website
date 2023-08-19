import { MainLayout } from "@/components/Main/MainLayout"
import "./globals.css"
import { JetBrains_Mono } from "next/font/google"

const jetBrainsMono = JetBrains_Mono({ weight: ["300", "400", "600"] })

export const metadata = {
	title: "i'm broke",
	description: "yes i am",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={jetBrainsMono.className}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
