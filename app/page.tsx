"use client"

import { useMainContext } from "@/components/Main/MainContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const { welcome, setWelcome } = useMainContext()
  const router = useRouter()

  useEffect(() => {
    if (welcome) router.push("/info")
    setWelcome(false)
    /* eslint-disable */
  }, [])
  /* eslint-enable */

  return null
}
