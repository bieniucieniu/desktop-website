import NextLink from "next/link"
import { twMerge } from "tailwind-merge"

export default function Icons({ className }: { className: string }) {
  return (
    <div
      className={twMerge(
        className,
        "p-2 grid grid-cols-[repeat(auto-fill,_100px)] grid-rows-[repeat(auto-fill,_120px)] gap-4 md:grid-flow-col",
      )}
    >
      <NextLink
        target="_blank"
        href="https://github.com/bieniucieniu"
        className="group text-black grid-rows-[30px_1fr] justify-center items-center"
      >
        <svg
          fill="none"
          className="max-h-[90px] text-zinc-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 3h14v2h2v6h-2v8h-2V5H6V3zm8 14v-2H6V5H4v10H2v4h2v2h14v-2h-2v-2h-2zm0 0v2H4v-2h10zM8 7h8v2H8V7zm8 4H8v2h8v-2z"
            fill="currentColor"
          ></path>
        </svg>
        <p className="text-center group-hover:underline text-3xl truncate">
          github
        </p>
      </NextLink>
      <NextLink
        target="_blank"
        href="https://www.linkedin.com/in/mikołaj-bień-6090b2237"
        className="group text-black grid-rows-[30px_1fr] justify-center items-center"
      >
        <svg
          className="max-h-[90px] text-blue-300 bg-black"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M16 3H8v4H2v14h20V7h-6V3zm-2 4h-4V5h4v2zM4 19V9h16v10H4zm10-8h2v2h-2v-2zm-2 4v-2h2v2h-2zm-2 0h2v2h-2v-2zm0 0H8v-2h2v2z"
            fill="currentColor"
          />
        </svg>
        <p className="text-center group-hover:underline text-3xl truncate">
          linkedin
        </p>
      </NextLink>
      <NextLink
        href="/info"
        className="group text-black grid-rows-[30px_1fr] justify-center items-center"
      >
        <svg
          fill="none"
          className="max-h-[90px] text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M5 3H3v18h18V3H5zm14 2v14H5V5h14zm-2 2H7v2h10V7zM7 11h10v2H7v-2zm7 4H7v2h7v-2z"
            fill="currentColor"
          />
        </svg>
        <p className="text-center group-hover:underline text-3xl truncate group-hover:whitespace-normal">
          info / about
        </p>
      </NextLink>
      <NextLink
        href="/projects"
        className="group text-black grid-rows-[30px_1fr] justify-center items-center"
      >
        <svg
          className="max-h-[90px] text-blue-900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M2 11V5h6v6H2zm4-2V7H4v2h2zm16-4H10v2h12V5zm0 4H10v2h12V9zm-12 4h12v2H10v-2zm12 4H10v2h12v-2zM2 13v6h6v-6H2zm4 2v2H4v-2h2z"
            fill="currentColor"
          />
        </svg>
        <p className="text-center group-hover:underline text-3xl truncate">
          projects
        </p>
      </NextLink>
    </div>
  )
}
