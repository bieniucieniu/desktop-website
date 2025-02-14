"use client";
import type { MotionValue } from "framer-motion";
import { createContext, useContext, useMemo } from "react";

type WindowInfoProps = {
	layer: MotionValue<number>;
	open: MotionValue<boolean>;
	fullScreen: MotionValue<boolean>;
};

type WindowsMap = Map<string, WindowInfoProps>;

type WindowContext = {
	windows: WindowsMap;
	setWindows: React.Dispatch<React.SetStateAction<WindowsMap>>;
};

export type Boundry = {
	top: number;
	left: number;
	right: number;
	bottom: number;
};

type WindowBoundryContext = {
	constraints: MotionValue<Boundry | undefined>;
};

export const WindowContext = createContext<WindowContext | null>(null);
export const WindowConstraintsContext =
	createContext<WindowBoundryContext | null>(null);

export function useWindowContext() {
	const ctx = useContext(WindowContext);

	if (ctx === null) {
		throw new Error("not in window context");
	}

	return ctx;
}

export function useWindowBoundry() {
	const context = useContext(WindowConstraintsContext);
	if (!context) return undefined;

	return context.constraints;
}

function focusWindow(this: WindowContext, id: string) {
	const win = this.windows.get(id);
	if (!win) return;
	const oldLayer = win.layer.get();
	win.layer.set(this.windows.size);

	this.windows.forEach((w, key) => {
		if (key === id) return;
		const l = w.layer.get();
		if (l > oldLayer) {
			w.layer.set(l - 1);
		}
	});
}
export function useWindows() {
	const ctx = useWindowContext();
	const WindowsControlls = useMemo(() => {
		return [...ctx.windows.keys()].map((id) => {
			const w = ctx.windows.get(id);
			if (!w) return;
			return {
				id,
				focusWindow: focusWindow.bind(ctx, id),
				...w,
			};
		});
	}, [ctx.windows, ctx]);

	return { WindowsControlls };
}
