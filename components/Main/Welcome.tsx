"use client"

import { useMainContext } from "@/components/Main/MainContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Welcome() {
  const { welcome, setWelcome } = useMainContext()
  const router = useRouter()
  const path = usePathname()

  useEffect(() => {
    if (welcome && path === "/") router.push("/info")
    setWelcome(false)
    /* eslint-disable */
  }, [])
  /* eslint-enable */

  return null
}
