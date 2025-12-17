'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, Stars, Torus } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function AnimatedShape({ position, color, scale }: { position: [number, number, number], color: string, scale: number }) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Icosahedron ref={meshRef} args={[1, 0]} position={position} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    transparent
                    opacity={0.4}
                    distort={0.4}
                    speed={2}
                    wireframe
                />
            </Icosahedron>
        </Float>
    );
}

function FloatingRing() {
    return (
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
            <Torus args={[3, 0.2, 16, 100]} position={[0, 0, -2]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color="#0070f3" transparent opacity={0.1} wireframe />
            </Torus>
        </Float>
    )
}

function FloatingParticles() {
    const ref = useRef<THREE.Group>(null!);
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    })
    return (
        <group ref={ref}>
            <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    )

}

export function ThreeBackground() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />

                <AnimatedShape position={[-4, 2, -5]} color="#0070f3" scale={2} />
                <AnimatedShape position={[4, -2, -6]} color="#7928ca" scale={2.5} />
                <AnimatedShape position={[0, 0, -10]} color="#00ffff" scale={1.5} />

                <FloatingRing />
                <FloatingParticles />
            </Canvas>
        </div>
    );
}
