import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
import NextLink from "next/link"
import { HTMLMotionProps, motion } from "framer-motion"

const Button = forwardRef<HTMLButtonElement, HTMLMotionProps<"button">>(
  ({ className, ...props }, ref) => {
    return (
      <motion.button
        className={twMerge(
          "active-border-button border-2 border-solid bg-zinc-300 text-black px-1 select-none border-zinc-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

const Link = forwardRef<
  HTMLAnchorElement,
  HTMLMotionProps<"a"> & { href: string }
>(({ className, href, ...props }, ref) => {
  return (
    <NextLink href={href} legacyBehavior>
      <motion.a
        className={twMerge(
          "active-border-button border-2 border-solid bg-zinc-300 text-black px-1 select-none border-zinc-300 hover:underline",
          className
        )}
        ref={ref}
        {...props}
      />
    </NextLink>
  )
})
Link.displayName = "Link"

export { Button, Link }
