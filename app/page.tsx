"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const nthTime = localStorage.getItem("nthTime")
    if (nthTime) return
    router.push("/info")
  }, [])

  return null
}
