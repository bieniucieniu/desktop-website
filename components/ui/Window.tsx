"use client"
import { twMerge } from "tailwind-merge"
import { motion, useDragControls } from "framer-motion"
import { Button } from "./Button"
import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react"

type WindowsMap = Map<
  string,
  {
    open: boolean
    layoutId: string
    fullScreen: boolean
  }
>

type WindowContext = {
  windows: WindowsMap
  setWindows: React.Dispatch<React.SetStateAction<WindowsMap>>
}

const WindowContext = createContext<WindowContext | null>(null)

function useWindowContext() {
  const context = useContext(WindowContext)

  if (context === null) {
    throw new Error("not in window context")
  }

  return context
}

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState(new Map())

  return (
    <WindowContext.Provider value={{ windows, setWindows }}>
      {children}
    </WindowContext.Provider>
  )
}

export function Window({
  children,
  className,
  windowName,
}: React.HTMLAttributes<HTMLDivElement> & { windowName?: React.ReactNode }) {
  const dragControlls = useDragControls()
  const { windows, setWindows } = useWindowContext()
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (windows.has(id)) throw new Error("window of given id exist")

    setWindows(
      new Map(
        windows.set(id, {
          open: true,
          layoutId: id,
          fullScreen: false,
        })
      )
    )
    return () => {
      const s = windows.delete(id)
      if (s) setWindows(new Map(windows))
      else console.log("no window with given id")
    }
  }, [])

  const { right, bottom } = useMemo(() => {
    if (ref.current)
      return {
        right: window.innerWidth - ref.current.clientWidth,
        bottom: window.innerHeight - ref.current.clientHeight,
      }
    else
      return { right: window.innerWidth - 400, bottom: window.innerWidth - 400 }
  }, [ref.current])

  return (
    <motion.div
      ref={ref}
      drag
      dragControls={dragControlls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{
        top: 0,
        left: 0,
        right,
        bottom,
      }}
      transition={{ ease: "linear" }}
      style={{ position: "absolute", minWidth: "400px", x: "50%", y: "50%" }}
      className="border-outset border-2 border-zinc-300 select-none"
    >
      <nav
        className={twMerge(
          "flex flex-row justify-between items-center w-full bg-gray-300",
          className
        )}
        onPointerDown={(e) => dragControlls.start(e)}
      >
        <h3 className="text-zinc-700 pl-2 text-xl font-bold">
          {windowName ?? "new window"}
        </h3>
        <section className="flex gap-x-1 pr-1.5">
          <Button className="border-2 border-outset">
            <svg
              className="h-4 w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M2 3h20v18H2V3zm18 16V7H4v12h16z" fill="currentColor" />
            </svg>
          </Button>
          <Button className="border-2 border-outset">
            <svg
              className="h-4 w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M2 4h20v16H2V4zm18 14V6H4v12h16z" fill="currentColor" />
              <path
                d="M2 4h20v16H2V4zm2 14h16V6H4v12zM8 8h2v2H8v2H6V8h2zm8 8h-2v-2h2v-2h2v4h-2z"
                fill="currentColor"
              />
            </svg>
          </Button>
          <Button className="border-2 border-outset">
            <svg
              className="h-4 w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </section>
      </nav>
      <main className="min-h-[300px]">{children}</main>
    </motion.div>
  )
}
