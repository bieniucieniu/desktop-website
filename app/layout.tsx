import Scene from "@/components/Scene";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetBrainsMono = JetBrains_Mono({ weight: ["300", "400", "600"] });

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
      <Scene className="absolute top-0 left-0 h-screen w-screen overflow-hidden -z-10 bg-black" />
	  <div className="min-h-screen flex flex-col text-white m-0 p-0">
      <nav className="flex flex-row justify-around text-3xl underline">
        <a target="_blank" href="https://github.com/bieniucieniu">
          github
        </a>
        <Link href="/breakout">breakout</Link>
        <Link href="/sorting">sorting</Link>
        <Link href="/beakout">beakout (pre breakout)</Link>
      </nav>
        {children}
	  </div>
      </body>
    </html>
  );
}
