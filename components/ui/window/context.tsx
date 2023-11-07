"use client"
import { MotionValue } from "framer-motion"
import { createContext, useContext } from "react"

type WindowInfoProps = {
  layer: MotionValue<number>
  open: MotionValue<boolean>
  fullScreen: MotionValue<boolean>
}

type WindowsMap = Map<string, WindowInfoProps>

type WindowContext = {
  windows: WindowsMap
  setWindows: React.Dispatch<React.SetStateAction<WindowsMap>>
}

export type Boundry = {
  top: number
  left: number
  right: number
  bottom: number
}

type WindowBoundryContext = {
  constraints: MotionValue<Boundry | undefined>
}

export const WindowContext = createContext<WindowContext | null>(null)
export const WindowConstraintsContext =
  createContext<WindowBoundryContext | null>(null)

export function useWindowContext() {
  const context = useContext(WindowContext)

  if (context === null) {
    throw new Error("not in window context")
  }

  return context
}

export function useWindowBoundry() {
  const context = useContext(WindowConstraintsContext)
  if (!context) return undefined

  return context.constraints
}

export function useWindows() {
  const { windows } = useWindowContext()
  function focusWindow(id: string) {
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
  }
  const WindowsControlls = [...windows.keys()].map((id) => {
    const w = windows.get(id)
    if (!w) return
    return {
      id,
      focusWindow: () => focusWindow(id),
      ...w,
    }
  })

  return { WindowsControlls }
}
