'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeCardIconProps {
    color?: string;
}

function AnimatedIcon({ color = '#0070f3' }: { color: string }) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.5;
        meshRef.current.rotation.y = time * 0.5;

        // Scale effect on hover logic could go here if we passed state down
    });

    return (
        <Float speed={4} rotationIntensity={2} floatIntensity={2}>
            <Icosahedron
                ref={meshRef}
                args={[1, 0]}
                scale={2.2}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <MeshDistortMaterial
                    color={color}
                    speed={3}
                    distort={0.4}
                    radius={1}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Icosahedron>
        </Float>
    );
}

export function ThreeCardIcon({ color = '#0070f3' }: ThreeCardIconProps) {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <AnimatedIcon color={color} />
            </Canvas>
        </div>
    );
}
