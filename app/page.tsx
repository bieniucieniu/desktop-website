"use client"
import Block from "@/components/ui/Block"
import { profile } from "console"
import { useState } from "react"

const projectsList: { name: string }[] = [
  { name: "github" },
  { name: "breakout" },
  { name: "sorting" },
  { name: "beakout (pre breakout)" },
]

export default function Home() {
  const [currentBlock, setCurrnetBlock] = useState<number | undefined>(
    undefined
  )
  return (
    <main
      onKeyDown={(e) => {
        switch (e.key) {
          case "j":
          case "ArrowDown":
            if (currentBlock !== undefined) {
              if (currentBlock < projectsList.length - 1) {
                setCurrnetBlock(currentBlock + 1)
              }
            }
            break
          case "k":
          case "ArrowUp":
            if (currentBlock !== undefined) {
              if (currentBlock > 0) {
                setCurrnetBlock(currentBlock - 1)
              }
            }
        }
      }}
      tabIndex={0}
      className="p-2 min-h-screen font-medium grid grid-rows-[1fr_auto]"
    >
      <div className="grid grid-cols-[400px_1fr]">
        <div className="flex flex-col">
          <Block legend={"status"}>
            <span className="text-lime-500">✔ </span>portfolio-website ⇒ main
          </Block>
          <Block className="flex-1" legend="about-me"></Block>
          <Block className="flex-1" legend="projects">
            {projectsList.map((e, i) => (
              <p key={i}>{e.name}</p>
            ))}
          </Block>
          <Block className="flex-1" legend={["contact", "contacts"]}></Block>
        </div>
        <div className="m-0 grid grid-rows-[1fr_200px]">
          <Block legend={"main-content"}></Block>
          <Block legend={"command-log"}></Block>
        </div>
      </div>
      <Block>
        Milosz <mark>nie okradl</mark> szefa i sie do tego <mark>przyznal</mark>
      </Block>
    </main>
  )
}
