import type { HTMLProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export default function Block({
  children,
  className,
  legend,
  ...props
}: {
  children?: ReactNode
  className?: string
  legend?: ReactNode | undefined
} & HTMLProps<HTMLFieldSetElement>) {
  return (
    <fieldset
      {...props}
      className={twMerge(
        "border-[1.5px] p-[0.5rem] m-[0.5rem] min-h-[3rem] leading-[2rem] relative",
        className
      )}
    >
      {legend ? (
        <legend className="px-[0.2rem] leading-[0]">{legend}</legend>
      ) : null}
      {children}
    </fieldset>
  )
}
