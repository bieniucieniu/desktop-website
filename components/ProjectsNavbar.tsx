"use client";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { motion } from "framer-motion";

function PopoverButton({
	project,
	active,
	setActive,
}: {
	project: Project;
	active: boolean;
	setActive: (id: number) => void;
}) {
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null!);
	useEffect(() => setOpen(false), [active]);
	return (
		<div>
			<button onMouseOver={() => setActive(project.id)} className="relative">
				{project.title}
				{active && !open && (
					<motion.div
						layoutId="previewBG"
						style={{
							backgroundColor: "red",
							zIndex: -10,
							inset: 0,
							position: "absolute",
							...project.style,
						}}
					/>
				)}
			</button>

			{active && open && (
				<motion.div
					layoutId="previewBG"
					style={{
						backgroundColor: "red",
						zIndex: -10,
						inset: 0,
						left: 0,
						position: "absolute",
						...project.style,
					}}
				>
					dasdadkahsdlksahdkalj
				</motion.div>
			)}
		</div>
	);
}

export default function ProjectsNavbar({ projects }: { projects: Project[] }) {
	const [active, setActive] = useState(0);

	return (
		<nav className="relative flex flex-row justify-around text-2xl underline w-screen slide-down">
			{projects.map((p) => {
				return (
					// <PreviewButton
					// 	key={p.link}
					// 	project={p}
					// 	active={active === p.id}
					// 	setActive={setActive}
					// ></PreviewButton>
					<PopoverButton
						key={p.link}
						project={p}
						active={active === p.id}
						setActive={setActive}
					/>
				);
			})}
		</nav>
	);
}
