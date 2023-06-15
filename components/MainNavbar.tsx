"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const tabs: { link: string; title: string; targetBlank?: boolean }[] = [
  { link: "/", title: "Home" },
  { link: "/projects", title: "Projects" },
  { link: "github.com/bieniucieniu", title: "Github", targetBlank: true },
];

export default function MainNavbar({ className }: { className: string }) {
  return (
    <nav className={twMerge("stick flex flex-row justify-around text-2xl underline w-screen z-10", className)}>
      {tabs.map((tab) => {
        if (tab.targetBlank) {
          return (
            <Link
              key={tab.title}
              href={tab.link}
              passHref={true}
              target="_blank"
            >
              {tab.title}
            </Link>
          );
        } else {
          return (
            <Link key={tab.title} href={tab.link} passHref={true}>
              {tab.title}
            </Link>
          );
        }
      })}
    </nav>
  );
}
