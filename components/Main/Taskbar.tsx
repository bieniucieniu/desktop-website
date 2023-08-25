"use client"
import { twMerge } from "tailwind-merge"
import Clock from "./Clock"
import MainMenu from "./MainMenu"
import * as Separator from "@radix-ui/react-separator"
import { useWindows } from "../ui/Window"
import { Button } from "../ui/Button"
import { useTransform } from "framer-motion"

function WindowButton({
  style,
  length,
  layer,
  ...props
}: Parameters<typeof Button>[0] & {
  layer: { get: () => number } | undefined
  length: number
}) {
  const backgroundColor = useTransform(() =>
    layer?.get() === length ? "aqua" : undefined
  )

  return (
    <Button
      className="border-outset"
      {...props}
      style={{ backgroundColor, ...style }}
    />
  )
}

export function Taskbar({ className }: { className?: string }) {
  const { WindowsControlls } = useWindows()
  return (
    <nav
      className={twMerge(
        "flex flex-row justify-between border-taskbar border-2 bg-zinc-300 py-0.5 px-2 z-40",
        className
      )}
    >
      <section className="flex flex-row gap-x-1">
        <MainMenu />
        <Separator.Root
          orientation="vertical"
          className="border-outset border my-0.5"
        />

        {WindowsControlls.map((e) => (
          <WindowButton
            onClick={() => {
              e.open?.set(true)
              e.focusWindow()
            }}
            key={e.id}
            layer={e.layer}
            length={WindowsControlls.length}
          >
            {e.name}
          </WindowButton>
        ))}
      </section>
      <Clock />
    </nav>
  )
}
