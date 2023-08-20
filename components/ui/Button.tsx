import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

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

export { Button }
