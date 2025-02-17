import { WindowProvider, WindowsContainer } from "@/components/ui/window";
import Icons from "./Icons";
import { MainContextProvider } from "./MainContext";
import { Taskbar } from "./Taskbar";
import Wallpaper from "./Wallpaper";
import WindowRenderer from "./WindowRenderer";
export function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<WindowProvider>
			<MainContextProvider>
				<main className="grid grid-rows-[1fr_38px] h-[calc(100svh)]">
					<WindowsContainer className="relative overflow-hidden z-0">
						{children}
						<Wallpaper className="absolute inset-0" />
						<Icons className="absolute inset-0" />
						<WindowRenderer />
					</WindowsContainer>
					<Taskbar className="z-0" />
				</main>
			</MainContextProvider>
		</WindowProvider>
	);
}
