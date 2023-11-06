"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window === "undefined") return
    if (typeof window.localStorage === "undefined") return

    const nthTime = window.localStorage.getItem("nthTime")
    if (nthTime) return
    router.push("/info")
  }, [router])

  return null
}
