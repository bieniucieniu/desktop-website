"use client"

import { ReactElement, useEffect } from "react"
import { useMainContext } from "./MainContext"
import { Window } from "../ui/Window"
import { useRouter } from "next/navigation"

export function AddWindow({
  children,
  name,
}: {
  children?: ReactElement
  name: string
}) {
  const { addWindow: add } = useMainContext()
  useEffect(() => {
    const defaultFullScreen = window.innerWidth < 1024
    const phone = window.innerWidth < 500
    add(name, { name, children, defaultFullScreen, phone, customId: name })
    /* eslint-disable */
  }, [name, children])
  /* eslint-enable */
  return null
}

export default function WindowRenderer() {
  const { windows, deleteWindow } = useMainContext()
  const router = useRouter()

  return windows.map(({ id, props }) => (
    <Window
      {...props}
      key={id}
      onClose={() => {
        deleteWindow(id)
        router.push("/")
      }}
      customId={id}
    />
  ))
}
