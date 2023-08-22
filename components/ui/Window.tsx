"use client"
import { twMerge } from "tailwind-merge"
import { HTMLMotionProps, motion } from "framer-motion"
import { Button } from "./Button"
import React, {
  createContext,
  forwardRef,
  useContext,
  useId,
  useState,
} from "react"
import * as Dialog from "@radix-ui/react-dialog"

type WindowContext = {
  open: boolean | undefined
  setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>
  layoutId: string
  fullScreen: boolean

  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>
}

const WindowContext = createContext<WindowContext | null>(null)

function useWindowContext() {
  const context = useContext(WindowContext)

  if (context === null) {
    throw new Error("not in window context")
  }

  return context
}

export function Root({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean | undefined>(undefined)
  const layoutId = useId()
  const [fullScreen, setFullScreen] = useState<boolean>(false)
  return (
    <Dialog.Root open={open}>
      <WindowContext.Provider
        value={{ open, setOpen, layoutId, fullScreen, setFullScreen }}
      >
        {children}
      </WindowContext.Provider>
    </Dialog.Root>
  )
}

export const Content = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className }, ref) => {
  const { layoutId } = useWindowContext()
  return (
    <Dialog.Portal>
      <Dialog.Content asChild>
        <motion.div
          layoutId={layoutId}
          ref={ref}
          className={twMerge(
            "min-w-[200px] min-h-[200px] border-outset grid grid-cols-1 grid-rows-[20px_repeat(auto-fit,_minmax(200px,_1fr))]",
            className
          )}
        >
          {children}
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  )
})

export const Navbar = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className }, ref) => {
  const { fullScreen, setOpen, setFullScreen } = useWindowContext()
  return (
    <Dialog.Title asChild>
      <nav
        ref={ref}
        className={twMerge("flex flex-row justify-between", className)}
      >
        <div>{children}</div>
        <section>
          <Button onClick={() => setOpen((o) => !o)}>
            <svg
              className="h-4 w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M2 3h20v18H2V3zm18 16V7H4v12h16z" fill="currentColor" />
            </svg>
          </Button>
          <Button onClick={() => setFullScreen((o) => !o)}>
            <svg
              className="h-4 w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {fullScreen ? (
                <path
                  d="M2 4h20v16H2V4zm18 14V6H4v12h16z"
                  fill="currentColor"
                />
              ) : (
                <path
                  d="M2 4h20v16H2V4zm2 14h16V6H4v12zM8 8h2v2H8v2H6V8h2zm8 8h-2v-2h2v-2h2v4h-2z"
                  fill="currentColor"
                />
              )}
            </svg>
          </Button>
          <Button onClick={() => setOpen(undefined)}>
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
    </Dialog.Title>
  )
})

export const Trigger = forwardRef<HTMLButtonElement, HTMLMotionProps<"button">>(
  ({ children, className, onClick, ...props }, ref) => {
    const { open, setOpen, layoutId } = useWindowContext()

    if (open === undefined) return null

    return (
      <Dialog.Trigger asChild>
        <motion.button
          {...props}
          layoutId={open ? undefined : layoutId}
          ref={ref}
          className={twMerge(
            "border-2 px-2 py-0.5",
            open ? "border-inset" : "border-outset",
            className
          )}
          onClick={(e) => {
            setOpen((o) => !o)
            onClick && onClick(e)
          }}
        >
          {children}
        </motion.button>
      </Dialog.Trigger>
    )
  }
)
