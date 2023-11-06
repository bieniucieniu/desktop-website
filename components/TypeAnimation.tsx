"use client"
import { useMemo } from "react"
import { TypeAnimation } from "react-type-animation"

type Props = Parameters<typeof TypingAnimation>[0]
export default function TypingAnimation({
  children,
  className,
  onComplete,
  speed,
}: {
  children: string | string[]
  className?: string
  onComplete?: () => void
  // @ts-ignore
  speed?: Props["speed"]
}) {
  const seq = useMemo(() => {
    const arr = Array.isArray(children)
      ? children.reduce((ac, v) => {
          ac.push(v, 1000)
          return ac
        }, [] as Array<string | number | (() => void)>)
      : [children]
    if (onComplete) arr.push(onComplete)
    return arr
  }, [children, onComplete])

  return (
    <TypeAnimation
      className={className}
      cursor={false}
      sequence={seq}
      wrapper="p"
      speed={speed ?? 100}
    />
  )
}
