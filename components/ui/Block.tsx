import type { HTMLProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export default function Block({
  children,
  className,
  legend,
  active,
  ...props
}: {
  children?: ReactNode
  className?: string
  legend?:
    | ReactNode
    | undefined
    | [ReactNode | undefined, ReactNode | undefined]
  active?: boolean
} & HTMLProps<HTMLFieldSetElement>) {
  return (
    <fieldset
      {...props}
      className={twMerge(
        "border-[1.5px] p-[0.5rem] m-[0.5rem] min-h-[3rem] leading-[2rem] relative",
        Array.isArray(legend) ? "border-b-[0] relative" : "",
        className
      )}
    >
      {legend ? (
        Array.isArray(legend) ? (
          <>
            <fieldset className="absolute inset-0 rotate-180 border-t-[1.5px]">
              <legend className="px-[0.2rem] leading-[0] rotate-180 m-1">
                {legend[1]}
              </legend>
            </fieldset>
            <legend className="px-[0.2rem] leading-[0]">{legend[0]}</legend>
          </>
        ) : (
          <legend className="px-[0.2rem] leading-[0]">{legend}</legend>
        )
      ) : null}
      {children}
    </fieldset>
  )
}
