"use client";
import { type HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const MButton = forwardRef<HTMLButtonElement, HTMLMotionProps<"button">>(
	({ className, ...props }, ref) => {
		return (
			<motion.button
				className={twMerge(
					"active-border-button border-2 border-solid bg-zinc-300 text-black px-1 select-none border-zinc-300",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
MButton.displayName = "MButton";

export { MButton };
