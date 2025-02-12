"use client";
import * as Separator from "@radix-ui/react-separator";
import { Suspense } from "react";
import { twMerge } from "tailwind-merge";
import { MButton } from "../ui/MButton";
import { useWindows } from "../ui/window";
import Clock from "./Clock";
import MainMenu from "./MainMenu";

function WindowButton({ style, ...props }: Parameters<typeof MButton>[0] & {}) {
	return <MButton className="border-outset" {...props} style={{ ...style }} />;
}

export function Taskbar({ className }: { className?: string }) {
	const { WindowsControlls } = useWindows();
	return (
		<nav
			className={twMerge(
				"flex flex-row justify-between border-taskbar border-2 bg-zinc-300 py-0.5 px-2",
				className,
			)}
		>
			<section className="flex flex-row gap-x-1">
				<MainMenu className="z-50" />
				<Separator.Root
					orientation="vertical"
					className="border-outset border my-0.5"
				/>
				<ul className="flex flex-col flex-wrap gap-x-1">
					{WindowsControlls.map((e) => {
						return e ? (
							<li key={e.id}>
								<WindowButton
									onClick={() => {
										e.open?.set(true);
										e.focusWindow();
									}}
								>
									{e.id}
								</WindowButton>
							</li>
						) : null;
					})}
				</ul>
			</section>
			<Suspense>
				<Clock />
			</Suspense>
		</nav>
	);
}
