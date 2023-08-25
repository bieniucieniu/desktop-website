import { AddWindow } from "@/components/Main/WindowRenderer"
import { Button } from "@/components/ui/Button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs"

export default function () {
  return (
    <AddWindow name="projects">
      <Tabs defaultValue="about">
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
