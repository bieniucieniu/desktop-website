export type Project = {
	id: number;
	link: string;
	title: string;
	description: string;
	videoPath?: string;
	style?: React.CSSProperties;
};
const projects: Project[] = [
	{
		id: 1,
		link: "projects/breakout",
		title: "Breakout",
		description: "A breakout clone made with Three.js and React",
		style: {
			backgroundColor: "#f00",
		},
	},
	{
		id: 2,
		link: "projects/sorting",
		title: "Sorting",
		description: "A sorting visualizer made with just HTML, CSS, and TS",
		style: {
			backgroundColor: "#00f",
		},
	},
];

export default projects;
