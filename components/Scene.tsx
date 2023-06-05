"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function Capsule() {
  const ref = useRef<Mesh>(null!);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
      ref.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <capsuleGeometry args={[5, 5, 10, 20]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default function Scene(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div {...props}>
      <Canvas camera={{ position: [0, 0, 20] }}>
        <ambientLight />

        <Capsule />
      </Canvas>
    </div>
  );
}
