'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, TorusKnot } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function MovingShape({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;
    });

    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
            <TorusKnot ref={meshRef} args={[0.5, 0.2, 100, 16]} position={position}>
                <MeshDistortMaterial
                    color={color}
                    transparent
                    opacity={0.3}
                    distort={0.3}
                    speed={2}
                    wireframe
                />
            </TorusKnot>
        </Float>
    );
}

export function ThreeProcessBg() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <Canvas camera={{ position: [0, 0, 15], fov: 40 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />

                <MovingShape position={[-6, 0, 0]} color="#0070f3" speed={1} />
                <MovingShape position={[6, 2, -2]} color="#06b6d4" speed={1.2} />
                <MovingShape position={[0, -4, -5]} color="#a855f7" speed={0.8} />
                <MovingShape position={[5, -5, -2]} color="#f97316" speed={1.5} />
                <MovingShape position={[-5, 5, -5]} color="#22c55e" speed={1.1} />
            </Canvas>
        </div>
    );
}
