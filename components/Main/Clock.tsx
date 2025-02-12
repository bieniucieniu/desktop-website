"use client";
import { useEffect, useRef } from "react";

// function CalendarButton({ className }: { className?: string }) {
// 	return (
// 		<button type="button" className={className}>
// 			<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
// 				<title>Calendar</title>
// 				<path
// 					d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h2v2H7v-2zm6 0h-2v2h2v-2zm2 0h2v2h-2v-2zm-6 4H7v2h2v-2zm2 0h2v2h-2v-2zm6 0h-2v2h2v-2z"
// 					fill="currentColor"
// 				/>
// 			</svg>
// 		</button>
// 	);
// }
export default function Clock() {
	const ref = useRef<HTMLParagraphElement>(null);
	useEffect(() => {
		const intervalId = setInterval(
			() => ref.current && (ref.current.innerText = formatDate(new Date())),
			1000,
		);
		return () => clearInterval(intervalId);
	}, []);
	return (
		<p className="flex flex-row items-center gap-x-1 border-inset border-2 bg-zinc-300 text-black px-2">
			{/* <CalendarButton className="h-4 w-4 " /> */}
			<p ref={ref}>{formatDate(new Date())}</p>
			{/* {format(time, "hh:mm")} */}
		</p>
	);
}

function formatDate(date: Date) {
	return `${date
		.getHours()
		.toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${date
		.getMinutes()
		.toLocaleString(undefined, {
			minimumIntegerDigits: 2,
		})}:${date
		.getSeconds()
		.toLocaleString(undefined, { minimumIntegerDigits: 2 })}`;
}
