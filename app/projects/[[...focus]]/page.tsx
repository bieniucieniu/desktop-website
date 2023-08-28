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
      <Tabs
        className="max-w-[100vw]"
        defaultValue={focus !== undefined ? focus[0] : "list"}
      >
        <TabsList className="overflow-x-auto">
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
            <ul className="flex flex-col gap-y-3 p-2 text-xl max-w-screen-lg">
              <TabsTrigger value="braciabien" asChild>
                <li className="group border-b">
                  <h1 className="font-bold text-2xl group-hover:underline">
                    Bracia Bien
                  </h1>
                  <p>
                    Web page for my father&apos;s shop. Build with next.js 13,
                    shadcn-ui and framer-motion. It has fully dynamic images
                    stored on bucket and controlled via postgres database on
                    admin page.
                  </p>
                </li>
              </TabsTrigger>
              <TabsTrigger value="breakout" asChild>
                <li className="group border-b">
                  <h1 className="font-bold text-2xl group-hover:underline">
                    Breakout
                  </h1>
                  <p>
                    Copy of breakout game from far past, build mainly in vanilla
                    react and three js. It has &quot;gravity&quot; version but
                    works terible :/.
                  </p>
                </li>
              </TabsTrigger>
              <TabsTrigger value="portfolio" asChild>
                <li className="group border-b">
                  <h1 className="font-bold text-2xl group-hover:underline">
                    Portfolio
                  </h1>
                  <p>
                    This website :). It has &quot;window manager&quot; build
                    with framer motion, what&apos;s intresting content in window
                    can be rendered on next.js server.
                  </p>
                </li>
              </TabsTrigger>
              <TabsTrigger value="sorting" asChild>
                <li className="group border-b">
                  <h1 className="font-bold text-2xl group-hover:underline">
                    sorting
                  </h1>
                  <p>
                    My first real project with vanilla js/ts, it uses html
                    canvas to visualize 4 sorting algorithms.
                  </p>
                </li>
              </TabsTrigger>
              <TabsTrigger value="weatherapp" asChild>
                <li className="group border-b">
                  <h1 className="font-bold text-2xl group-hover:underline">
                    weather app in angular
                  </h1>
                  <p>
                    My only project with angular. It&apos;s use open weather api
                    to display teperature, weather conditon and wind.
                  </p>
                </li>
              </TabsTrigger>
              <TabsTrigger value="other" asChild>
                <li className="group border-b">
                  <h1 className="font-bold text-2xl group-hover:underline">
                    other
                  </h1>
                  <p>
                    some project of mine not directly connected with front-end
                    like discord bot, only css project or my dotfiles.
                  </p>
                </li>
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
