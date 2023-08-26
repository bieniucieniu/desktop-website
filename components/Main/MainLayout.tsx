import { MainContextProvider } from "./MainContext"
import { Taskbar } from "./Taskbar"
import { WindowProvider, WindowsContainer } from "@/components/ui/Window"
import WindowRenderer from "./WindowRenderer"
import Icons from "./Icons"

export function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<WindowProvider>
			<MainContextProvider>
				<main className="grid grid-rows-[1fr_38px] h-[calc(100svh)]">
					<WindowsContainer className="bg-teal-400 relative overflow-hidden z-0">
						{children}
						<WindowRenderer />
						<Icons />
					</WindowsContainer>
					<Taskbar className="z-0" />
				</main>
			</MainContextProvider>
		</WindowProvider>
	)
}
