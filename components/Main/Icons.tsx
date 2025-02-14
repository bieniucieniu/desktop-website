import { twMerge } from "tailwind-merge";
import { Link } from "../ui/Button";
import { DotedList } from "../ui/icons/doted-list";
import { GitHub } from "../ui/icons/github";
import { Linkedin } from "../ui/icons/linkedin";
import { List } from "../ui/icons/list";

const links: {
	caption: string;
	link: `https://${string}` | `/${string}`;
	icon?: (props: { className?: string }) => React.ReactNode;
	cusomIconClass?: string;
	openInNewTab?: true;
}[] = [
	{
		caption: "github",
		link: "https://github.com/bieniucieniu",
		icon: GitHub,
		cusomIconClass: "text-zinc-600",
		openInNewTab: true,
	},
	{
		caption: "linkedin",
		link: "https://www.linkedin.com/in/mikołaj-bień-6090b2237",
		icon: Linkedin,
		cusomIconClass: "text-blue-600",
		openInNewTab: true,
	},
	{
		caption: "info / about",
		link: "/info",
		icon: List,
		cusomIconClass: "text-stone-200",
	},
	{
		caption: "projects",
		link: "/info",
		icon: DotedList,
		cusomIconClass: "text-red-600",
	},
];
export default function Icons({ className }: { className: string }) {
	return (
		<div
			className={twMerge(
				className,
				"p-2 grid grid-cols-[repeat(auto-fill,_100px)] grid-rows-[repeat(auto-fill,_120px)] gap-4 md:grid-flow-col",
			)}
		>
			{links.map(
				({ caption, link, icon: Icon, cusomIconClass, openInNewTab }) => (
					<Link
						key={`${caption}_${Icon?.name}`}
						href={link}
						target={openInNewTab && "_blank"}
						className="group text-black grid-rows-[30px_1fr] justify-center items-center bg-transparent border-none"
					>
						{Icon && (
							<Icon
								className={twMerge(
									"max-h-[90px] text-zinc-500",
									cusomIconClass,
								)}
							/>
						)}
						<p className="text-center group-hover:underline text-3xl truncate">
							{caption}
						</p>
					</Link>
				),
			)}
		</div>
	);
}
