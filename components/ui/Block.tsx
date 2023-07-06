import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export default function Block({
  children,
  className,
  legend,
}: {
  children?: ReactNode
  className?: string
  legend?: string | [string, string]
}) {
  return (
    <fieldset
      className={twMerge(`border-2 p-1 m-2 flex-1 relative`, className)}
      style={{ borderBottom: Array.isArray(legend) ? "none" : "" }}
    >
      {legend ? (
        Array.isArray(legend) ? (
          <>
            <fieldset
              className="absolute inset-0 rotate-180"
              style={{ borderTop: "solid 2px" }}
            >
              <legend className="m-0 p-0 rotate-180 " style={{ lineHeight: 0 }}>
                {legend[1]}
              </legend>
            </fieldset>

            <legend className="m-0 p-0 " style={{ lineHeight: 0 }}>
              {legend[0]}
            </legend>
          </>
        ) : (
          <legend className="m-0 p-0 " style={{ lineHeight: 0 }}>
            {legend}
          </legend>
        )
      ) : null}

      {children}
    </fieldset>
  )
}
