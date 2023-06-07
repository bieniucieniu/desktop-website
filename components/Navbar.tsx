"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

function DropDown(props: React.HTMLProps<HTMLDivElement>) {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button className="underline">Breakout</button>
			</DropdownMenu.Trigger>
		</DropdownMenu.Root>
	);
}

export default function Navbar(props: React.HTMLProps<HTMLDivElement>) {
	return (
		<div>
			<div className="min-h-screen flex flex-col text-white m-0 p-0">
				<nav className="stick flex flex-row justify-around text-2xl underline w-screen">
					<Link target="_blank" href="https://github.com/bieniucieniu">
						github
					</Link>

					<Link href="/preview/breakout">breakout</Link>
					<Link href="/preview/sorting">sorting</Link>
					<Link href="/preview/beakout">beakout (pre breakout)</Link>
				</nav>
			</div>
		</div>
	);
}
