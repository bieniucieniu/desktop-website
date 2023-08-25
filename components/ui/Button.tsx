import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
import NextLink from "next/link"
const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      className={twMerge(
        "active-border-button border-2 border-solid bg-zinc-300 text-black px-1 select-none border-zinc-300",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

const Link = forwardRef<HTMLAnchorElement, Parameters<typeof NextLink>[0]>(
  ({ className, ...props }, ref) => {
    return (
      <NextLink
        className={twMerge(
          "active-border-button border-2 border-solid bg-zinc-300 text-black px-1 select-none border-zinc-300 hover:underline",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Link.displayName = "Link"

export { Button, Link }
