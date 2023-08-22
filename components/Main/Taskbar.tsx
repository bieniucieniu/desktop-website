"use client"
import { twMerge } from "tailwind-merge"
import Clock from "./Clock"
import MainMenu from "./MainMenu"
import * as Separator from "@radix-ui/react-separator"
export function Taskbar({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <nav
      className={twMerge(
        "flex flex-row justify-between border-taskbar border-2 bg-zinc-300 py-0.5 px-2",
        className
      )}
    >
      <section className="flex flex-row gap-x-1">
        <MainMenu />
        <Separator.Root
          orientation="vertical"
          className="border-outset border my-0.5"
        />
        {children}
      </section>
      <Clock />
    </nav>
  )
}
