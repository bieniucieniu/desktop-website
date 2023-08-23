"use client"
import { twJoin, twMerge } from "tailwind-merge"
import Clock from "./Clock"
import MainMenu from "./MainMenu"
import * as Separator from "@radix-ui/react-separator"
import { useWindows } from "../ui/Window"
import { Button } from "../ui/Button"
import { useMemo } from "react"
export function Taskbar({ className }: { className?: string }) {
  const { getWindowsControlls } = useWindows()
  const controlls = useMemo(() => getWindowsControlls(), [getWindowsControlls])
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

        {controlls.map(({ setOpen, open, name }) => (
          <Button
            onClick={() => setOpen((o) => !o)}
            className={twJoin(
              "relative",
              open ? "border-inset" : "border-outset"
            )}
          >
            {name}
          </Button>
        ))}
      </section>
      <Clock />
    </nav>
  )
}
