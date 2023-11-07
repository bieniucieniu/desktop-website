import { twMerge } from "tailwind-merge"
import { vast } from "@/fonts"

export default function Wallpaper({ className }: { className: string }) {
  return (
    <div
      className={twMerge(
        className,
        vast.className,
        "bg-teal-400 flex justify-end",
      )}
    >
      <div className="flex flex-col justify-end lg:justify-start p-10 md:pl-28 md:pb-10 lg:pt-10 lg:pr-10">
        <h1 className="text-5xl sm:text-7xl md:text-9xl">
          &quot;Mikołaj Bień&quot;
        </h1>
        <p className="text-3xl sm:text-xl xl:pl-20">
          front-end web developer, from Poland
        </p>
      </div>
    </div>
  )
}
