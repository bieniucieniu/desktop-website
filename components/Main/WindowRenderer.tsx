"use client";

import { Window, type WindowProps } from "@/components/ui/window";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMainContext } from "./MainContext";

type AddWindowProps = Pick<
	WindowProps,
	"title" | "children" | "id" | "defaultSize" | "defaultPosition"
>;

export function AddWindow({
	children,
	title,
	id,
	defaultSize,
	defaultPosition,
}: AddWindowProps) {
	const context = useMainContext();
	//biome-ignore lint/correctness/useExhaustiveDependencies:
	useEffect(() => {
		const defaultFullScreen = window.innerWidth < 1024;
		const phone = window.innerWidth < 500;
		context.addWindow(id, {
			id,
			title,
			children,
			defaultFullScreen,
			phone,
			defaultSize,
			defaultPosition,
		});
	}, [id, title, children]);
	return null;
}

export default function WindowRenderer() {
	const { windows, deleteWindow } = useMainContext();
	const router = useRouter();

	return (
		<AnimatePresence>
			{windows.map(({ id, props }) => (
				<Window
					{...props}
					key={id}
					onClose={() => {
						deleteWindow(id);
						router.push("/");
					}}
				/>
			))}
		</AnimatePresence>
	);
}
