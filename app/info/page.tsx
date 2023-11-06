"use client"
import { AddWindow } from "@/components/Main/WindowRenderer"
import TypeAnimation from "@/components/TypeAnimation"
import { useLayoutEffect, useEffect, useRef, useState } from "react"

const name = {
  short: ["Hi, I am", "Mikołaj \nBień"],
  long: [
    ` _   .-')          ._. .-')                         ('-.             
( '.( OO )_        \\  ( OO )                       ( OO ).-.         
 ,--.   ,--.),-.-'),--. ,--. .-'),-----. ,--.      / . --. /    ,--. 
 |   \`.'   | |  |OO|  .'   /( OO'  .-.  '|  | .-') | \\-.  \\ .-')| ,| 
 |         | |  |  |      /,/   |  | |  ||  |/|OO.-'-'  |  ( OO |(_| 
 |  |'.'|  | |  |(_|     ' _\\_) |  |\\|  ||   / -'|\\| |_.'  | \`-'|  | 
 |  |   |  |,|  |_.|  .   \\   \\ |  | |  |/  '---.' |  .-.  ,--. |  | 
 |  |   |  (_|  |  |  |\    \\   \`'  '-'  |/      |  |  | |  |  '-'  / 
 \`--'   \`--' \`--'  \`--' '--'     \`-----' \`------'  \`--' \`--'\`-----'  \n`,
    `._. .-')            ('-.      .-') _  
\\  ( OO )         _(  OO)    ( OO ) ) 
 ;-----.\\  ,_.-')(,------,--.//,--,'  
 | .-.  |  |  |OO)|  .---|   \\ |  |\\  
 | '-' /_) |  |  \\|  |   |    \\|  | ) 
 | .-. \`.  |  |(_(|  '--.|  .     |/  
 | |  \\  |,|  |_.'|  .--'|  |\\    |   
 | '--'  (_|  |   |  \`---|  | \\   |   
 \`------'  \`--'   \`------\`--'  \`--' \n`,
  ],
}

export default function Info() {
  const [stage, setStage] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
  const scrollingRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    scrollingRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [stage])
  const [nameLength, setNameLength] = useState<keyof typeof name>("long")

  useLayoutEffect(
    () => {
      if (window.innerWidth < 1024) setNameLength("short")
      else setNameLength("long")
    },
    /* eslint-disable */
    [],
    /* eslint-enable */
  )
  useEffect(() => {
    const nthTime = localStorage.getItem("nthTime")

    if (nthTime) return

    localStorage.setItem("nthTime", "no")
  }, [])

  return (
    <AddWindow
      name="info"
      defaultPosition={{ x: 100, y: 10 }}
      defaultSize={{ width: 1024, height: 710 }}
    >
      <div
        style={{ scrollbarGutter: "stable" }}
        className="max-h-[710px] overflow-y-scroll"
      >
        <article className="text-2xl whitespace-pre leading-[1.42rem] max-w-screen-lg">
          <TypeAnimation
            className="text-9xl lg:text-2xl"
            onComplete={() => setStage(1)}
          >
            {[
              localStorage.getItem("nthTime")
                ? ""
                : "This window only appears once by itself.",
              name[nameLength][0],
            ]}
          </TypeAnimation>
          {stage > 0 ? (
            <TypeAnimation
              onComplete={() => setStage(2)}
              className="text-9xl text-red-500 lg:text-2xl"
            >
              {name[nameLength][1]}
            </TypeAnimation>
          ) : null}
          <br />
          <br />
          {stage > 1 ? (
            <TypeAnimation
              speed={70}
              className="bg-cyan-400 text-black whitespace-pre-line"
              onComplete={() => setStage(3)}
            >
              {nameLength === "long" ? "Hi, I am ^^^ \n" : ""}I am aspiring web
              developer with three years of experience in web development,
              specializing in front-end technologies. I acquired my skills
              through self-study and freelance projects in Poland.
            </TypeAnimation>
          ) : null}
          <br />
          {stage > 2 ? (
            <TypeAnimation
              onComplete={() => setStage(4)}
              speed={50}
              className="whitespace-pre-line"
            >
              I mainly use React and TypeScript with Next.js as my preferred
              tools for web development. I also employ various libraries and
              add-ons, such as React-Free-Fiber/drei, Radix-ui, framer-motion,
              tailwind, vanilla-extract-css, zod, drizzle and others.
            </TypeAnimation>
          ) : null}
          <br />

          {stage > 3 ? (
            <TypeAnimation
              onComplete={() => setStage(5)}
              speed={50}
              className="whitespace-pre-line bg-orange-50 text-black"
            >
              I have also developed an interest in Linux and low-level
              programming, which gives me a deeper understanding of JavaScript.
              I am proficient in working with bash and other tools in a headless
              environment.
            </TypeAnimation>
          ) : null}
          <br />
          {stage > 4 ? (
            <TypeAnimation speed={50} className="whitespace-pre-line">
              Please take a look at my projects, which you can access by
              clicking on the icon on the Desktop or use the start menu at the
              bottom. This page is still under development, so I appreciate your
              patience and feedback.
            </TypeAnimation>
          ) : null}
          <br />
          <br />
          <br />
        </article>
        <div ref={scrollingRef} />
      </div>
    </AddWindow>
  )
}
