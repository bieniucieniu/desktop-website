"use client";
import { useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MutableRefObject, useLayoutEffect, useRef } from "react";
import type {
	BufferGeometry,
	Material,
	Mesh,
	NormalBufferAttributes,
} from "three";

function Capsule({
	position,
	ref,
}: {
	position: [number, number, number];
	ref: MutableRefObject<
		Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>
	>;
}) {
	return (
		<mesh ref={ref} position={position}>
			<capsuleGeometry args={[5, 5, 10, 20]} />
			<meshNormalMaterial />
		</mesh>
	);
}

function Scene() {
	const viewport = useThree((state) => state.viewport);
	const { scrollYProgress } = useScroll();
	const ref = useRef<Mesh>(null!);

	useFrame(() => {
		if (ref.current)
			ref.current.position.y = (viewport.width / 2) * scrollYProgress.get();
	});

	return (
		<group>
			<Capsule ref={ref} position={[0, 0, 0]} />
		</group>
	);
}

export default function Background(props: React.HTMLProps<HTMLDivElement>) {
	return (
		<div {...props}>
			<Canvas camera={{ position: [0, 0, 20] }}>
				<ambientLight />
				<Scene />
			</Canvas>
		</div>
	);
}
