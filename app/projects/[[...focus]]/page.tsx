import { AddWindow } from "@/components/Main/WindowRenderer"
import { Button } from "@/components/ui/Button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs"
import Image from "next/image"
import Link from "next/link"

export default function Projects({
  params,
}: {
  params: { focus: string[] | undefined }
}) {
  const { focus } = params
  return (
    <AddWindow name="projects" defaultPosition={{ x: 100, y: 10 }}>
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
        <TabsContent value="braciabien">
          <article className="max-w-screen-lg max-h-[700px] overflow-y-auto py-3">
            <h1 className="text-3xl bg-red-50 my-3">simple company webpage</h1>
            <span className="flex flex-row mb-3">
              <p className="text-2xl">
                Web page for my father&apos;s shop. Build with next.js 13,
                shadcn-ui and framer-motion. It has fully dynamic images stored
                on bucket and controlled via postgres database on admin page.
              </p>
              <Image
                src="https://i.gifer.com/7Gan.gif"
                alt="asdas"
                width={327}
                height={480}
              />
            </span>
            <Image
              alt="braica_front"
              src="/bracia_front.png"
              width={1876}
              height={916}
              className="my-3"
            />
            <br />
            <h1 className="text-3xl bg-red-50">STORY OF THE PROJECT</h1>
            <p className="border-double border-2 border-black px-2 text-xl">
              It was realy hard project becouse when you ask your dad about what
              should be in it, (designe or anything) he reply &quot;I don&apos;t
              now, do somthing like that (do page without on selling, list of
              products or anythink like that, copy shoping page), ahh do it as
              you like&quot;. At the begging this page was planned to be full
              static but someone annoying said &quot;I don&apos;t want u to
              change any something&quot; so I started with only uploadthing
              (wraper for aws bucket storage) but I thought categorie would be
              cool. At first i used vercel edgeConfig but it was so limiting, so
              swap to some sql db, i tried supabase with orm,but nahh to much to
              learn and problems with connecting, next vercel postgres, no
              dealing with connectcting with orm &quot;prefect&quot; some
              problems with schema and naming of columns but I got it and it has
              cool animation no info and link on bottom{" "}
              <Link
                href="https://braciabien.bieniucieniu.pl/"
                className="underline text-blue-600"
                target="_blank"
              >
                Check it
              </Link>{" "}
              and{" "}
              <Link
                href="https://github.com/bieniucieniu/bracia-bien"
                target="_blank"
                className="text-blue-500 underline"
              >
                it&apos;s github
              </Link>
            </p>
            <Image
              alt="braica_admin"
              src="/bracia_admin.png"
              width={1853}
              height={931}
              className="my-3"
              id="admin"
            />
            <label htmlFor="admin" className="text-xl">
              This above is admin page, it has simple dropzone for uplaod
              (react-dropzone) and ablity to select categorie for img.
            </label>
          </article>
        </TabsContent>
        <TabsContent value="breakout">
          <article className="max-w-screen-lg max-h-[700px] overflow-y-auto pb-3">
            <h1 className="text-5xl text-center">BREAKOUT</h1>
            <span className="grid grid-cols-[auto_500px_auto] justify-center items-center bg-black">
              <Image
                src="https://i.gifer.com/5Mz4.gif"
                alt="flame"
                width={327}
                height={480}
              />
              <Image src="/breakout.png" alt="asdas" width={833} height={796} />
              <Image
                src="https://i.gifer.com/5Mz4.gif"
                alt="flame"
                width={327}
                height={480}
              />
            </span>
            <br />
            <h1 className="text-3xl bg-red-50">STORY OF THE PROJECT</h1>
            <p className="border-double border-2 border-black px-2">
              Soo.. I did this project mayby 5 times, firsty time I tried with
              vanilla js on canvas, 2nd with only three.js, 3rd with react(with
              out react-three-fiber), 4th react and react-three and p2 physics
              engine but it worked terible a lots of bugs and unplayable, and
              finally this{" "}
              <Link
                href="https://breakout.bieniucieniu.pl/"
                className="underline text-blue-600"
                target="_blank"
              >
                Check it
              </Link>
              . Now it&apos;s just react and react-three and it works well. it
              has also scoreboard build with google firebase and that&apos;s it
              I think.{" "}
              <Link
                href="https://github.com/bieniucieniu/breakout"
                target="_blank"
                className="text-blue-500 underline"
              >
                it&apos;s github
              </Link>
            </p>
          </article>
        </TabsContent>
        <TabsContent value="portfolio">
          <article>
            <h1 className="flex flex-row justify-around items-center text-3xl">
              Portfolio website
              <Image
                src="https://i.gifer.com/Y3il.gif"
                alt="kirbi"
                className="h-14 w-14"
                width={100}
                height={100}
              />
            </h1>
            <p className="bg-white text-black">
              just look around here, press some button idk
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>
              and it build with react, next.js, framer-motion and readix-ui and{" "}
              <Link
                href="https://github.com/bieniucieniu/portfolio-website"
                className="text-blue-500 underline"
                target="_blank"
              >
                it&apos;s github
              </Link>
            </p>
          </article>
        </TabsContent>
        <TabsContent value="sorting">
          <article className="max-w-screen-lg">
            <span className="items-center bg-black gap-2 grid grid-cols-[1fr_300px]">
              <span>
                <h1 className="bg-yellow-50 text-3xl m-2">
                  Sorting Visualizer
                </h1>
                <p className="border-4 bg-white border-black border-double m-2 p-2 text-xl">
                  My first real project with vanilla js/ts, it uses html canvas
                  to visualize 4 sorting algorithms.
                  <br />
                  to be honest I don&apos;t remember the story of it, I hope it
                  was beautiful, check it{" "}
                  <Link
                    href="https://sorting.bieniucieniu.pl/"
                    className="underline text-blue-600"
                    target="_blank"
                  >
                    Check it
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://github.com/bieniucieniu/bracia-bien"
                    className="text-blue-500 underline"
                    target="_blank"
                  >
                    it&apos;s github
                  </Link>
                </p>
                <Image
                  className="p-2"
                  src="/sorting.png"
                  alt="tomato-sorter"
                  width={1752}
                  height={812}
                />
              </span>
              <div className="relative">
                <Image
                  className="border-8 border-inset"
                  src="https://i.gifer.com/g1dw.gif"
                  alt="tomato-sorter"
                  width={291}
                  height={450}
                />
                <Image
                  className="absolute bottom-0 max-w-[200px]"
                  src="https://i.gifer.com/6oa.gif"
                  alt="tomato-sorter"
                  width={450}
                  height={450}
                />
              </div>
            </span>
          </article>
        </TabsContent>
        <TabsContent value="weatherapp">
          <article>
            <h1>weather app</h1>
            <p>
              My only project with angular. It&apos;s use open weather api to
              display teperature, weather conditon and wind.{" "}
              <Link
                href="https://sorting.bieniucieniu.pl/"
                className="underline text-blue-600"
                target="_blank"
              >
                Check it
              </Link>{" "}
              and{" "}
              <Link
                href="https://github.com/bieniucieniu/weather-app-angular"
                className="text-blue-500 underline"
                target="_blank"
              >
                it&apos;s github
              </Link>
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="text-stone-200">I don&apos;t linke angular btw</p>
          </article>
        </TabsContent>
        <TabsContent value="other">
          <article className="text-3xl">
            other are comming soon <span className="text-zinc-200">i hope</span>
            <br />
            if u intrested check{" "}
            <Link
              href="https://github.com/bieniucieniu"
              className="text-blue-500 underline"
              target="_blank"
            >
              github
            </Link>
          </article>
        </TabsContent>
      </Tabs>
    </AddWindow>
  )
}
