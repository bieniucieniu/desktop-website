"use client"
import { AddWindow } from "@/components/Main/WindowRenderer"
import TypingAnimation from "@/components/TypingAnimation"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation"

export default function info() {
  const [stage, setStage] = useState<0 | 1 | 2 | 3 | 4>(0)
  const name = [
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
  ]
  return (
    <AddWindow name="info">
      <div>
        <article className="text-2xl whitespace-pre leading-[1.42rem] max-w-[900px]">
          <TypingAnimation
            className="min-h-[204px]"
            onComplete={() => setStage(1)}
          >
            {name[0]}
          </TypingAnimation>
          {stage > 0 ? (
            <TypingAnimation
              onComplete={() => setStage(2)}
              className="min-h-[204px]"
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
              {[
                `Hi if u can't read text above, I Mikolaj Bien`,
                `I am self-taught Front-end web developer based in Poland and worked as a freelancer for half a year I've been doing web development for 2 years.`,
              ]}
            </TypingAnimation>
          ) : null}
          <br />
          {stage > 2 ? (
            <TypingAnimation speed={50} className="whitespace-pre-line">
              My preferred tools are react and typescript mainly used in next.js
              (13) with some addons/lib like React-Free-Fiber/drei, Radix-ui,
              framer-motion, tailwind, vanilla-extract-css, zod, drizzle and
              some more.
            </TypingAnimation>
          ) : null}
          {stage > 4 ? (
            <TypingAnimation speed={50} className="whitespace-pre-line">
              {`Check my projects, you have icon propably on the left, you can close the window and check it 
or u can enter via start menu on the bottom`}
            </TypingAnimation>
          ) : null}
        </article>
      </div>
    </AddWindow>
  )
}
