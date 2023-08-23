import { Taskbar } from "./Taskbar"
import { WindowProvider, WindowsContainer } from "@/components/ui/Window"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <WindowProvider>
      <main className="grid grid-rows-[1fr_38px] h-screen">
        <WindowsContainer className="bg-teal-400 relative overflow-hidden">
          {children}
        </WindowsContainer>
        <Taskbar />
      </main>
    </WindowProvider>
  )
}
