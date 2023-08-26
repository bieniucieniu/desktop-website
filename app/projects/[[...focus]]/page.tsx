import { AddWindow } from "@/components/Main/WindowRenderer"
import { Button } from "@/components/ui/Button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs"

export default function Projects({
	params,
}: {
	params: { focus: string[] | undefined }
}) {
	const { focus } = params
	return (
		<AddWindow name="projects">
			<Tabs defaultValue={focus === undefined ? "about" : focus[0]}>
				<TabsList>
					<TabsTrigger value="about" asChild>
						<Button>About</Button>
					</TabsTrigger>
					<TabsTrigger value="braciabien" asChild>
						<Button>Bracia Bien</Button>
					</TabsTrigger>
					<TabsTrigger value="breakout" asChild>
						<Button>Breakout</Button>
					</TabsTrigger>
					<TabsTrigger value="portfolio" asChild>
						<Button>Portfolio</Button>
					</TabsTrigger>
				</TabsList>
				<TabsContent value="about">about</TabsContent>
				<TabsContent value="braciabien">braciabien</TabsContent>
				<TabsContent value="breakout">breakout</TabsContent>
				<TabsContent value="portfolio">portfolio</TabsContent>
			</Tabs>
		</AddWindow>
	)
}
