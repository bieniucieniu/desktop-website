import { Taskbar } from "./Taskbar"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-rows-[1fr_38px] h-screen">
      <div className="bg-red-200">{children}</div>
      <Taskbar />
    </main>
  )
}
