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

function Capsule({ position }: { position: [number, number, number] }) {
	const ref = useRef<Mesh>(null!);

	useFrame((_, delta) => {
		if (ref.current) {
			ref.current.rotation.x += delta;
			ref.current.rotation.y += delta;
			ref.current.rotation.z += delta;
		}
	});
	return (
		<mesh ref={ref} position={position}>
			<capsuleGeometry args={[5, 5, 10, 20]} />
			<meshNormalMaterial />
		</mesh>
	);
}

function Scene() {
	return (
		<group>
			<Capsule position={[0, 0, 0]} />
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
