import { AddWindow } from "@/components/Main/WindowRenderer"
import Link from "next/link"
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
      <Tabs defaultValue={focus !== undefined ? focus[0] : "list"}>
        <TabsList>
          <TabsTrigger value="list" asChild>
            <Button>list</Button>
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
          <TabsTrigger value="sorting" asChild>
            <Button>sorting</Button>
          </TabsTrigger>
          <TabsTrigger value="weatherapp" asChild>
            <Button>weather app in angular</Button>
          </TabsTrigger>
          <TabsTrigger value="other" asChild>
            <Button>other</Button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <TabsList asChild>
            <ul className="flex flex-col">
              <TabsTrigger value="braciabien" asChild>
                <li className="hover:underline">Bracia Bien</li>
              </TabsTrigger>
              <TabsTrigger value="breakout" asChild>
                <li className="hover:underline">Breakout</li>
              </TabsTrigger>
              <TabsTrigger value="portfolio" asChild>
                <li className="hover:underline">Portfolio</li>
              </TabsTrigger>
              <TabsTrigger value="sorting" asChild>
                <li className="hover:underline">sorting</li>
              </TabsTrigger>
              <TabsTrigger value="weatherapp" asChild>
                <li className="hover:underline">weather app in angular</li>
              </TabsTrigger>
              <TabsTrigger value="other" asChild>
                <li className="hover:underline">other</li>
              </TabsTrigger>
            </ul>
          </TabsList>
        </TabsContent>
        <TabsContent value="braciabien">braciabien</TabsContent>
        <TabsContent value="breakout">breakout</TabsContent>
        <TabsContent value="portfolio">portfolio</TabsContent>
        <TabsContent value="sorting">sorting</TabsContent>
        <TabsContent value="weatherapp">weather app</TabsContent>
        <TabsContent value="other">other</TabsContent>
      </Tabs>
    </AddWindow>
  )
}
