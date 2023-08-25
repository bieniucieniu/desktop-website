import { MainContextProvider } from "./MainContext"
import { Taskbar } from "./Taskbar"
import { WindowProvider, WindowsContainer } from "@/components/ui/Window"
import WindowRenderer from "./WindowRenderer"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <WindowProvider>
      <MainContextProvider>
        <main className="grid grid-rows-[1fr_38px] h-screen">
          <WindowsContainer className="bg-teal-400 relative overflow-hidden">
            {children}
            <WindowRenderer />
          </WindowsContainer>
          <Taskbar />
        </main>
      </MainContextProvider>
    </WindowProvider>
  )
}
