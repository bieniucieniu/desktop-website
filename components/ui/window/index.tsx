"use client"
import { Button } from "@/components/ui/Button"
import { Slot } from "@radix-ui/react-slot"
import type { HTMLMotionProps } from "framer-motion"
import {
  motion,
  useAnimationControls,
  useDragControls,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import {
  Boundry,
  WindowConstraintsContext,
  WindowContext,
  useWindowBoundry,
  useWindowContext,
} from "./context"

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState(new Map())

  return (
    <WindowContext.Provider value={{ windows, setWindows }}>
      {children}
    </WindowContext.Provider>
  )
}

export type WindowProps = Omit<HTMLMotionProps<"div">, "title"> & {
  id: string
  title?: React.ReactNode
  defaultOpen?: boolean
  defaultFullScreen?: boolean
  defaultSize?: {
    width: number
    height: number
  }
  phone?: boolean
  defaultPosition?: { x: number; y: number }
  children?: React.ReactElement
  onClose?: (id: string) => void
}

export function Window({
  id,
  children,
  className,
  title,
  defaultOpen = true,
  defaultFullScreen = false,
  onClose,
  onPointerDown,
  defaultSize,
  phone,
  defaultPosition = { x: 200, y: 200 },
  ...props
}: WindowProps) {
  const dragControlls = useDragControls()
  const animationControlls = useAnimationControls()
  const { windows, setWindows } = useWindowContext()
  const open = useMotionValue<boolean>(defaultOpen ?? true)
  const fullScreen = useMotionValue<boolean>(
    defaultFullScreen ?? window.innerWidth < 1024,
  )
  const layer = useMotionValue<number>(windows.size + 1)
  const ref = useRef<HTMLDivElement>(null)
  const boundry = useWindowBoundry()
  const inset = useTransform(() => {
    if (fullScreen.get()) return 0
    return "auto"
  })
  const lastPosition = useMotionValue(defaultPosition)
  const width = useTransform(() => {
    if (phone || fullScreen.get()) return "auto"
    const { x } = lastPosition.get()
    const { right } = boundry?.get() ?? {
      right: window.innerWidth,
    }
    const w = defaultSize?.width ?? 400
    const maxW = right - x
    return w > maxW ? maxW : w
  })

  const height = useTransform(() => {
    if (phone || fullScreen.get()) return "auto"
    const { y } = lastPosition.get()
    const { bottom } = boundry?.get() ?? {
      bottom: window.innerHeight,
    }
    const h = defaultSize?.height ?? 300
    const maxH = bottom - y - 38
    return h > maxH ? maxH : h
  })

  const constraints = useTransform(() => {
    const c = boundry?.get()
    if (!c) return undefined
    if (ref.current) {
      return {
        top: c.top,
        left: c.left,
        right: c.right - ref.current.clientWidth,
        bottom: c.bottom - ref.current.clientHeight,
      }
    }
    return {
      top: c.top,
      left: c.left,
      right: c.right - 400,
      bottom: c.bottom - 300,
    }
  })

  fullScreen.on("change", (fs) => {
    if (fs === true)
      return setPosition({
        x: undefined,
        y: undefined,
      })

    if (fs === false) return setPosition(lastPosition.get())
  })

  open.on("change", (latest) => {
    if (latest) {
      animationControlls.start({ opacity: 1, scale: 1 })
    } else {
      animationControlls.start({ scale: 0.5, opacity: 0 })
    }
  })

  useEffect(() => {
    animationControlls.start({ opacity: 1, scale: 1 })
  }, [])

  useEffect(() => {
    windows.set(id, {
      open,
      fullScreen,
      layer,
    })
    setWindows(new Map(windows))

    setPosition(defaultFullScreen || phone ? { x: 0, y: 0 } : defaultPosition)

    return () => {
      if (!windows.has(id)) return
      const s = windows.delete(id)
      if (s) setWindows(new Map(windows))
    }

    /* eslint-disable */
  }, [defaultFullScreen, phone])
  /* eslint-enable */
  function focusWindow() {
    const win = windows.get(id)
    if (!win) return
    const oldLayer = win.layer.get()
    win.layer.set(windows.size)

    windows.forEach((w, key) => {
      if (key === id) return
      const l = w.layer.get()
      if (l > oldLayer) {
        w.layer.set(l - 1)
      }
    })

    setWindows(new Map(windows))
  }

  function saveLastPosition({ x, y }: { x: number; y: number }) {
    const c = constraints.get()
    if (c) {
      lastPosition.set({
        x: x > c.right ? c.right : x < c.left ? c.left : x,
        y: y > c.bottom ? c.bottom : y < c.top ? c.top : y,
      })
    } else {
      lastPosition.set({ x, y })
    }
  }

  function setPosition(props: {
    x: number | undefined
    y: number | undefined
  }) {
    return animationControlls.set(props)
  }

  return (
    <motion.div
      animate={animationControlls}
      initial={{ scale: 0.5, opacity: 0.5 }}
      exit={{ scale: 0.5, opacity: 0 }}
      className="border-outset grid grid-rows-[40px_1fr] items-stretch justify-stretch bg-zinc-800 border-2 border-zinc-300 select-none max-h-[calc(100svh_-_38px)]"
      layoutId={id}
      ref={ref}
      drag
      dragControls={dragControlls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={constraints.get()}
      onDragEnd={(_, info) => saveLastPosition(info.point)}
      style={{
        touchAction: "none",
        position: "absolute",
        width,
        height,
        inset,
        zIndex: layer,
      }}
      {...props}
      onPointerDown={(e) => {
        focusWindow()
        onPointerDown && onPointerDown(e)
      }}
    >
      <nav
        className={twMerge(
          "flex select-none flex-row justify-between items-center w-full border-outset border-b-2 bg-gray-400",
          className,
        )}
        onPointerDown={(e) => {
          if (!fullScreen.get()) dragControlls.start(e)
        }}
      >
        <h3 className="text-zinc-800 pl-2 text-xl font-bold">{title ?? id}</h3>
        <section className="flex gap-x-1 pr-1 py-1">
          <Button
            className="border-2 border-outset font-bold w-[28px]"
            onClick={() => {
              open.set(false)
            }}
          >
            __
          </Button>
          <Button
            className="hidden lg:inline-block border-2 border-outset"
            onClick={() => fullScreen.set(!fullScreen.get())}
          >
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
          {onClose ? (
            <Button
              className="border-2 border-outset"
              onClick={() => onClose(id)}
            >
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
          ) : null}
        </section>
      </nav>
      <div className="overflow-auto w-full h-full">
        <Slot>{children}</Slot>
      </div>
      <button className="absolute overflow-hidden bottom-0 right-0 h-4 w-4">
        <div className="border-inset border-2 h-6 w-6 rotate-45 translate-x-1.5 translate-y-1.5 bg-stone-500"></div>
      </button>
    </motion.div>
  )
}

export function WindowsContainer({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null)
  const constraints = useMotionValue<Boundry | undefined>(undefined)

  useEffect(() => {
    if (ref.current) {
      constraints.set(ref.current.getBoundingClientRect())
    }
  }, [constraints])
  return (
    <WindowConstraintsContext.Provider value={{ constraints }}>
      <div {...props} className={twMerge("relative", className)} ref={ref}>
        {children}
      </div>
    </WindowConstraintsContext.Provider>
  )
}

export { useWindows } from "./context"
