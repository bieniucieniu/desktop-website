"use client"
import { createContext, useContext, useState } from "react"
import { redirect } from "next/navigation"
import { Window } from "../ui/window"
import type { WindowProps } from "@/components/ui/window"

type MainContext = {
  windows: { id: string; props: WindowProps }[]
  addWindow: (id: string, props: Parameters<typeof Window>[0]) => void
  deleteWindow: (id: string) => void
  powerOff: () => void
}

const MainContext = createContext<MainContext | null>(null)

export function useMainContext() {
  const context = useContext(MainContext)

  if (!context) {
    throw new Error("not in window context")
  }

  return context
}

export function MainContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [windows, setWindows] = useState<MainContext["windows"]>([])
  const [powered, setPowered] = useState<boolean>(true)

  function addWindow(id: string, props: WindowProps) {
    const win = windows.find((w) => w.id === id)

    if (win) {
      const newWin = windows.map((e) => {
        if (e.id === id) {
          return { id, props }
        }
        return e
      })
      setWindows(newWin)
    } else {
      windows.push({ id, props })
      setWindows([...windows])
    }
  }

  function deleteWindow(id: string) {
    const newWin = windows.filter((w) => w.id !== id)
    setWindows(newWin)
  }
  return (
    <MainContext.Provider
      value={{
        windows,
        addWindow,
        deleteWindow,
        powerOff: () => {
          setPowered(false)
          redirect("/")
        },
      }}
    >
      {powered ? children : null}
    </MainContext.Provider>
  )
}
