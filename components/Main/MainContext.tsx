import { createContext, useContext, useState } from "react"
import { useWindows } from "../ui/Window"

type Window = {
  name: string
  content: React.ReactNode
  customId: string | undefined
}

type MainContext = {
  windows: Window[]
  openWindow: ({ name, content, customId = undefined }: Window) => void
  deleteWindow: (idx: number) => void
}

const MainContext = createContext<MainContext | null>(null)

export function useWindowContext() {
  const context = useContext(MainContext)

  if (context === null) {
    throw new Error("not in window context")
  }

  return context
}

export function MainContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [windows, setWindows] = useState<Window[]>([])
  const { focusWindow } = useWindows()

  function openWindow({ name, content, customId = undefined }: Window) {
    if (
      customId !== undefined &&
      windows.find((w) => w.customId === customId)
    ) {
      focusWindow(customId)
      return
    }
    windows.push({ customId, name, content })
    setWindows([...windows])
  }
  function deleteWindow(idx: number) {
    const w = windows.filter((_, i) => i !== idx)
    setWindows(w)
  }
  return (
    <MainContext.Provider value={{ windows, openWindow, deleteWindow }}>
      {children}
    </MainContext.Provider>
  )
}
