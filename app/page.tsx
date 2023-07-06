"use client"
import Block from "@/components/ui/Block"
import { useState } from "react"

const blocks: { name: string }[] = [
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
              if (currentBlock < blocks.length - 1) {
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
      className="min-h-screen font-medium grid"
      style={{ gridTemplateRows: "1fr auto" }}
    >
      <div className="h-full grid grid-cols-3">
        <div className="h-full flex flex-col">
          {blocks.map((b, i) => (
            <Block
              key={b.name}
              className={currentBlock === i ? "border-lime-500" : ""}
              onMouseEnter={() => setCurrnetBlock(i)}
            >
              {b.name}
            </Block>
          ))}
        </div>
        <Block className="col-span-2"></Block>
      </div>
      <Block>
        Milosz <mark>okradl</mark> szefa i sie do tego <mark>przyznal</mark>
      </Block>
    </main>
  )
}
