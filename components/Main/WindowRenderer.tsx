"use client"

import { ReactElement, useEffect } from "react"
import { useMainContext } from "./MainContext"
import { Window } from "../ui/Window"

export function AddWindow({
  children,
  name,
  id,
}: {
  children?: ReactElement
  name: string
  id: string
}) {
  const { addWindow: add } = useMainContext()
  useEffect(() => {
    const defaultFullScreen = window.innerWidth < 1024
    add(id, { name, children, defaultFullScreen, customId: id })
  }, [name, children, id])

  return null
}

export default function WindowRenderer() {
  const { windows, deleteWindow } = useMainContext()

  return windows.map(({ id, props }) => (
    <Window
      {...props}
      key={id}
      onClose={() => deleteWindow(id)}
      customId={id}
    />
  ))
}
