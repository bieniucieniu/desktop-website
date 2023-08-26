"use client"
import { twMerge } from "tailwind-merge"
import Clock from "./Clock"
import MainMenu from "./MainMenu"
import * as Separator from "@radix-ui/react-separator"
import { useWindows } from "../ui/Window"
import { MButton } from "../ui/MButton"
import { useTransform } from "framer-motion"

function WindowButton({
	style,
	length,
	layer,
	...props
}: Parameters<typeof MButton>[0] & {
	layer: { get: () => number } | undefined
	length: number
}) {
	const backgroundColor = useTransform(() =>
		layer?.get() === length ? "aqua" : undefined
	)

	return (
		<MButton
			className="border-outset"
			{...props}
			style={{ backgroundColor, ...style }}
		/>
	)
}

export function Taskbar({ className }: { className?: string }) {
	const { WindowsControlls } = useWindows()
	return (
		<nav
			className={twMerge(
				"flex flex-row justify-between border-taskbar border-2 bg-zinc-300 py-0.5 px-2",
				className
			)}
		>
			<section className="flex flex-row gap-x-1">
				<MainMenu className="z-50" />
				<Separator.Root
					orientation="vertical"
					className="border-outset border my-0.5"
				/>
				<ul className="flex flex-col flex-wrap">
					{WindowsControlls.map((e) => (
						<li key={e.id}>
							<WindowButton
								onClick={() => {
									e.open?.set(true)
									e.focusWindow()
								}}
								layer={e.layer}
								length={WindowsControlls.length}
							>
								{e.name}
							</WindowButton>
						</li>
					))}
				</ul>
			</section>
			<Clock />
		</nav>
	)
}
