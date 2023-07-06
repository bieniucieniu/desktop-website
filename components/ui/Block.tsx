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
  legend?: string | [string, string]
} & HTMLProps<HTMLFieldSetElement>) {
  return (
    <fieldset
      {...props}
      className={twMerge(
        `border-2 p-1 m-2 flex-1 relative ${
          Array.isArray(legend) ? "border-b-0" : ""
        }`,
        className
      )}
    >
      {legend ? (
        Array.isArray(legend) ? (
          <>
            <fieldset
              {...props}
              className="absolute inset-0 rotate-180 border-none border-t-2"
            >
              <legend className="m-0 p-0 leading-[0] rotate-180 mr-4">
                {legend[1]}
              </legend>
            </fieldset>

            <legend className=" leading-[0]">{legend[0]}</legend>
          </>
        ) : (
          <legend className=" leading-[0]">{legend}</legend>
        )
      ) : null}

      {children}
    </fieldset>
  )
}
