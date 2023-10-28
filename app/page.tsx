"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const firstTime = localStorage.getItem("firstTime")

    if (firstTime) return

    localStorage.setItem("firstTime", "no")
    router.push("/info")
  }, [])

  return null
}
