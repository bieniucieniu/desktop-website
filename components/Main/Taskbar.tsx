import { twMerge } from "tailwind-merge"
import Clock from "./Clock"
import MainMenu from "./MainMenu"
export function Taskbar({ className }: { className?: string }) {
  return (
    <nav
      className={twMerge(
        "flex flex-row justify-between border-taskbar border-2 bg-zinc-300 py-0.5 px-2",
        className
      )}
    >
      <MainMenu />
      <div></div>
      <Clock />
    </nav>
  )
}
