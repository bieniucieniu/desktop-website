"use client";

import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import { twJoin, twMerge } from "tailwind-merge";
export function Tabs({ className, ...props }: Parameters<typeof Root>[0]) {
	return (
		<Root
			className={twMerge("flex flex-col w-full h-full bg-zinc-100", className)}
			{...props}
		/>
	);
}
export function TabsList({ className, ...props }: Parameters<typeof List>[0]) {
	return (
		<List
			className={twMerge("flex flex-row gap-x-1 pt-1 px-1", className)}
			{...props}
		/>
	);
}
export function TabsTrigger({
	className,
	...props
}: Parameters<typeof Trigger>[0]) {
	return (
		<Trigger
			className={twMerge(
				"border-outset data-[state=active]:border-b-0",
				className,
			)}
			{...props}
		/>
	);
}
export function TabsContent({
	className,
	...props
}: Parameters<typeof Content>[0]) {
	return (
		<Content
			className={twJoin(
				"border-outset",
				twMerge(
					"mx-1 bg-zinc-300 text-black border-2 border-zinc-300",
					className,
				),
			)}
			{...props}
		/>
	);
}
