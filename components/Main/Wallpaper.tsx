import { vast } from "@/fonts";
import { twMerge } from "tailwind-merge";

export default function Wallpaper({ className }: { className: string }) {
	return (
		<div
			className={twMerge(
				className,
				vast.className,
				"bg-teal-400 flex justify-end",
			)}
		>
			<div className="flex flex-col justify-end lg:justify-start p-10 md:pl-28 md:pb-10 lg:pt-10 lg:pr-10" />
		</div>
	);
}
