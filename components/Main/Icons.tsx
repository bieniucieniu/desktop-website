import NextLink from "next/link"
import { ReactElement } from "react"

export default function Icons() {
	return (
		<div className="p-2 absolute inset-0 grid grid-flow-col grid-cols-[repeat(auto-fill,_100px)] grid-rows-[repeat(auto-fill,_120px)] gap-4">
			<NextLink
				target="_blank"
				href="https://github.com/bieniucieniu"
				className="group text-black grid-rows-[30px_1fr] justify-center items-center"
			>
				<svg
					fill="none"
					className="max-h-[90px] text-zinc-500"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M6 3h14v2h2v6h-2v8h-2V5H6V3zm8 14v-2H6V5H4v10H2v4h2v2h14v-2h-2v-2h-2zm0 0v2H4v-2h10zM8 7h8v2H8V7zm8 4H8v2h8v-2z"
						fill="currentColor"
					></path>
				</svg>
				<p className="text-center group-hover:underline text-3xl truncate">
					github
				</p>
			</NextLink>
			<NextLink
				href="/about"
				className="group text-black grid-rows-[30px_1fr] justify-center items-center"
			>
				<svg
					fill="none"
					className="max-h-[90px] text-white"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M5 3H3v18h18V3H5zm14 2v14H5V5h14zm-2 2H7v2h10V7zM7 11h10v2H7v-2zm7 4H7v2h7v-2z"
						fill="currentColor"
					/>
				</svg>
				<p className="text-center group-hover:underline text-3xl truncate">
					about
				</p>
			</NextLink>
			<NextLink
				href="/projects"
				className="group text-black grid-rows-[30px_1fr] justify-center items-center"
			>
				<svg
					className="max-h-[90px] text-blue-900"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M2 11V5h6v6H2zm4-2V7H4v2h2zm16-4H10v2h12V5zm0 4H10v2h12V9zm-12 4h12v2H10v-2zm12 4H10v2h12v-2zM2 13v6h6v-6H2zm4 2v2H4v-2h2z"
						fill="currentColor"
					/>
				</svg>
				<p className="text-center group-hover:underline text-3xl truncate">
					projects
				</p>
			</NextLink>
		</div>
	)
}
