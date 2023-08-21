"use client"
import { twJoin } from "tailwind-merge"
import { Button } from "../ui/Button"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

export default function MainMenu({ className }: { className?: string }) {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button className={twJoin("border-outset", className)}>start</Button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content
					className="bg-zinc-300 border-outset text-black"
					side="top"
				>
					<DropdownMenu.Group>
						<DropdownMenu.Item />
					</DropdownMenu.Group>

					<DropdownMenu.CheckboxItem>
						<DropdownMenu.ItemIndicator />
					</DropdownMenu.CheckboxItem>

					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger asChild>
							<Button className="flex flex-row items-center gap-1">
								programs
								<svg
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="h-4 w-4"
								>
									<path
										d="M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z"
										fill="currentColor"
									/>
								</svg>
							</Button>
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent />
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger className="flex flex-row items-center gap-1 ">
							<Button className="flex flex-row items-center gap-1 ">
								internet
								<svg
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="h-4 w-4"
								>
									<path
										d="M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z"
										fill="currentColor"
									/>
								</svg>
							</Button>
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent />
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>
					<DropdownMenu.Separator className="border-inset border mx-1" />
					<DropdownMenu.Item asChild>
						<Button className="flex flex-row items-center gap-1">
							shutdown
							<svg
								className="h-4 w-4"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									d="M7 3H3v4h4V3zm0 14H3v4h4v-4zM17 3h4v4h-4V3zm4 14h-4v4h4v-4zM8 8h2v2H8V8zm4 2h-2v4H8v2h2v-2h4v2h2v-2h-2v-4h2V8h-2v2h-2z"
									fill="currentColor"
								/>
							</svg>
						</Button>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	)
}
