"use client"
import { AddWindow } from "@/components/Main/WindowRenderer"
import TypingAnimation from "@/components/TypingAnimation"
import { useLayoutEffect, useEffect, useRef, useState } from "react"

export default function Info() {
  const [stage, setStage] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
  const scrollingRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    scrollingRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [stage])
  const [name, setName] = useState<[string, string]>([
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
  ])
  useLayoutEffect(
    () => {
      if (window.innerWidth < 1024) setName(["Hi, I am", "Mikołaj \nBień"])
    },
    /* eslint-disable */
    []
    /* eslint-enable */
  )
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
          <TypingAnimation
            className="text-9xl lg:text-2xl"
            onComplete={() => setStage(1)}
          >
            {name[0]}
          </TypingAnimation>
          {stage > 0 ? (
            <TypingAnimation
              onComplete={() => setStage(2)}
              className="text-9xl text-red-500 lg:text-2xl"
            >
              {name[1]}
            </TypingAnimation>
          ) : null}
          <br />
          <br />
          {stage > 1 ? (
            <TypingAnimation
              speed={70}
              className="bg-cyan-400 text-black whitespace-pre-line"
              onComplete={() => setStage(3)}
            >
              {`I have three years of experience in web development, specializing in front-end technologies. I acquired my skills through self-study and freelance projects in Poland.`}
            </TypingAnimation>
          ) : null}
          <br />
          {stage > 2 ? (
            <TypingAnimation
              onComplete={() => setStage(4)}
              speed={50}
              className="whitespace-pre-line"
            >
              I mainly use React and TypeScript with Next.js as my preferred
              tools for web development. I also employ various libraries and
              add-ons, such as React-Free-Fiber/drei, Radix-ui, framer-motion,
              tailwind, vanilla-extract-css, zod, drizzle and others.
            </TypingAnimation>
          ) : null}
          <br />

          {stage > 3 ? (
            <TypingAnimation
              onComplete={() => setStage(5)}
              speed={50}
              className="whitespace-pre-line bg-orange-50 text-black"
            >
              I have also developed an interest in Linux and low-level
              programming, which gives me a deeper understanding of JavaScript.
              I am proficient in working with bash and other tools in a headless
              environment.
            </TypingAnimation>
          ) : null}
          <br />
          {stage > 4 ? (
            <TypingAnimation speed={50} className="whitespace-pre-line">
              Please take a look at my projects, which you can access by
              clicking on the icon on the left. If the icon is not visible,
              close the window and try again, or use the start menu at the
              bottom. This page is still under development, so I appreciate your
              patience and feedback.
            </TypingAnimation>
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
