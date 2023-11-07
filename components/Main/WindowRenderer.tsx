"use client"

import { useEffect } from "react"
import { useMainContext } from "./MainContext"
import { Window, WindowProps } from "@/components/ui/window"
import { useRouter } from "next/navigation"

type AddWindowProps = Pick<
  WindowProps,
  "title" | "children" | "id" | "defaultSize" | "defaultPosition"
>

export function AddWindow({
  children,
  title,
  id,
  defaultSize,
  defaultPosition,
}: AddWindowProps) {
  const context = useMainContext()
  useEffect(() => {
    const defaultFullScreen = window.innerWidth < 1024
    const phone = window.innerWidth < 500
    context.addWindow(id, {
      id,
      title,
      children,
      defaultFullScreen,
      phone,
      defaultSize,
      defaultPosition,
    })
    /* eslint-disable */
  }, [id, title, children])
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
    />
  ))
}
