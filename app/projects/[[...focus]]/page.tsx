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
                    This is a web page for my father’s shop, which I built using
                    Next.js 13, Shadcn-UI and Framer Motion. It features fully
                    dynamic images that are stored on a bucket and managed
                    through a Postgres database on the admin page.
                  </p>
                </li>
              </TabsTrigger>
              <TabsTrigger value="breakout" asChild>
                <li className="group border-b">
                  <h1 className="font-bold text-2xl group-hover:underline">
                    Breakout
                  </h1>
                  <p>
                    This is a replica of the classic breakout game, which I
                    developed mainly in vanilla React and Three.js. It also has
                    a ‘gravity’ version, but it performs poorly.
                  </p>
                </li>
              </TabsTrigger>
              <TabsTrigger value="portfolio" asChild>
                <li className="group border-b">
                  <h1 className="font-bold text-2xl group-hover:underline">
                    Portfolio
                  </h1>
                  <p>
                    This is my personal website, which features a ‘window
                    manager’ built with Framer Motion. An interesting aspect of
                    this website is that the content in the window can be
                    rendered on the Next.js server.
                  </p>
                </li>
              </TabsTrigger>
              <TabsTrigger value="sorting" asChild>
                <li className="group border-b">
                  <h1 className="font-bold text-2xl group-hover:underline">
                    sorting
                  </h1>
                  <p>
                    This is my first real project with vanilla JS/TS, which
                    utilizes HTML canvas to visualize four sorting algorithms.
                  </p>
                </li>
              </TabsTrigger>
              <TabsTrigger value="weatherapp" asChild>
                <li className="group border-b">
                  <h1 className="font-bold text-2xl group-hover:underline">
                    weather app in angular
                  </h1>
                  <p>
                    This is my only project that uses Angular. It utilizes the
                    Open Weather API to display the temperature, weather
                    condition and wind speed.
                  </p>
                </li>
              </TabsTrigger>
              <TabsTrigger value="other" asChild>
                <li className="group border-b">
                  <h1 className="font-bold text-2xl group-hover:underline">
                    other
                  </h1>
                  <p>
                    These are some of my projects that are not directly related
                    to front-end development, such as a Discord bot, a pure CSS
                    project and my dotfiles.
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
                src="/gif/spongebob.gif"
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
              This project was very challenging because my dad, who was the
              client, did not give me any specific requirements or feedback on
              the design or functionality. He just told me to do something like
              a shopping page, but without any selling, product listing or
              anything like that. He also said I could do it as I liked.
              Initially, I planned to make this page fully static, but he
              insisted that he did not want me to change anything manually. So I
              started with implementing an uploading feature (a wrapper for AWS
              bucket storage), but then I thought adding categories would be
              nice. At first, I used Vercel edgeConfig, but it was too limiting,
              so I switched to a SQL database. I tried Supabase with ORM, but it
              was too complicated and problematic to connect. Then I tried
              Vercel Postgres, which was easier to connect with ORM. I still had
              some issues with the schema and the column names, but I managed to
              solve them. The result is a page that has a cool animation, on
              information and a links at the bottom{" "}
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
              This is the admin page, which has a simple dropzone for uploading
              (react-dropzone) and the ability to select a category for each
              image.{" "}
            </label>
          </article>
        </TabsContent>
        <TabsContent value="breakout">
          <article className="max-w-screen-lg max-h-[700px] overflow-y-auto pb-3">
            <h1 className="text-5xl text-center">BREAKOUT</h1>
            <span className="grid lg:grid-cols-[auto_500px_auto] justify-center items-center bg-black">
              <Image
                className="hidden lg:block"
                src="/gif/fire.gif"
                alt="flame"
                width={327}
                height={480}
              />
              <Image
                src="/breakout.png"
                alt="app_preview"
                width={833}
                height={796}
              />
              <Image
                className="hidden lg:block"
                src="/gif/fire.gif"
                alt="flame"
                width={327}
                height={480}
              />
            </span>
            <br />
            <h1 className="text-3xl bg-red-50">STORY OF THE PROJECT</h1>
            <p className="border-double border-2 border-black px-2">
              I have attempted this project five times, using different methods
              and tools. The first time, I used vanilla JavaScript on canvas.
              The second time, I used only three.js. The third time, I used
              React without react-three-fiber. The fourth time, I used React and
              react-three-fiber with p2 physics engine, but it was terrible. It
              had many bugs and was unplayable. And finally, this is the result.
              <Link
                href="https://breakout.bieniucieniu.pl/"
                className="underline text-blue-600"
                target="_blank"
              >
                Check it
              </Link>{" "}
              Now I have used only React and react-three-fiber and it works
              well. It also has a scoreboard built with Google Firebase and
              that’s all.{" "}
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
                src="/gif/kirbi.gif"
                alt="kirbi"
                className="h-14 w-14"
                width={100}
                height={100}
              />
            </h1>
            <p className="bg-white text-black">
              This web app is built with React, Next.js, Framer Motion and Radix
              UI. You can explore it by clicking some buttons, moving the
              window, etc. There is not much of a story behind it.
            </p>
            <p>
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
            <span className="items-center bg-black gap-2 grid lg:grid-cols-[1fr_300px]">
              <span>
                <h1 className="bg-yellow-50 text-3xl m-2">
                  Sorting Visualizer
                </h1>
                <p className="border-4 bg-white border-black border-double m-2 p-2 text-xl">
                  This is my first real project with vanilla
                  JavaScript/TypeScript. It uses HTML canvas to visualize four
                  sorting algorithms. I don’t recall the story of it, but I hope
                  it was beautiful.
                  <br />
                  <Link
                    href="https://sorting.bieniucieniu.pl/"
                    className="underline text-blue-600"
                    target="_blank"
                  >
                    Please check it out.
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
              <div className="relative hidden lg:block">
                <Image
                  className="border-8 border-inset"
                  src="/gif/tomatosorting.gif"
                  alt="tomato-sorter"
                  width={291}
                  height={450}
                />
                <Image
                  className="absolute bottom-0 max-w-[200px]"
                  src="/gif/bird.gif"
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
              This is my only project that uses Angular. It utilizes the open
              weather API to show the temperature, weather condition and wind
              speed.{" "}
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
