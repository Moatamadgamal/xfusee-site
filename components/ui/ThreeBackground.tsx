'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, Stars, Torus } from '@react-three/drei';
import * as THREE from 'three';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(!!mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  return reduced;
}

function useIsDarkMode() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const el = document.documentElement;
    const check = () => setIsDark(el.classList.contains('dark'));
    check();

    // Observe class changes on <html>
    const obs = new MutationObserver(check);
    obs.observe(el, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  return isDark;
}

function useIsVisible(ref: React.RefObject<HTMLElement>) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [ref]);

  return visible;
}

function AnimatedShape({
  position,
  color,
  scale,
  speed = 1,
  distort = 0.35,
  opacity = 0.35,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed?: number;
  distort?: number;
  opacity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.12;
    meshRef.current.rotation.y = time * 0.18;
  });

  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={0.7}>
      <Icosahedron ref={meshRef} args={[1, 0]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={opacity}
          distort={distort}
          speed={speed}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
}

function FloatingRing({ lightMode }: { lightMode: boolean }) {
  return (
    <Float speed={lightMode ? 0.6 : 1.0} rotationIntensity={0.9} floatIntensity={0.9}>
      <Torus args={[3, 0.18, 12, 80]} position={[0, 0, -2]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color={lightMode ? '#2563eb' : '#0070f3'}
          transparent
          opacity={lightMode ? 0.08 : 0.12}
          wireframe
        />
      </Torus>
    </Float>
  );
}

function Scene({ isDark, reducedMotion }: { isDark: boolean; reducedMotion: boolean }) {
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 768px)').matches;
  }, []);

  // اخف في اللايت + اخف في الموبايل
  const starsCount = reducedMotion ? 0 : isMobile ? (isDark ? 900 : 600) : isDark ? 2200 : 1400;
  const starsSpeed = isDark ? 0.25 : 0.12;

  return (
    <>
      <ambientLight intensity={isDark ? 0.55 : 0.75} />
      <directionalLight position={[8, 8, 6]} intensity={isDark ? 0.9 : 0.65} />
      <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.45 : 0.25} color="#00ffff" />

      {/* Shapes - in light mode make them smaller + less */}
      {!reducedMotion && (
        <>
          <AnimatedShape
            position={[-4, 2, -5]}
            color={isDark ? '#0070f3' : '#2563eb'}
            scale={isDark ? 2 : 1.6}
            speed={isDark ? 1.2 : 0.8}
            distort={isDark ? 0.35 : 0.22}
            opacity={isDark ? 0.35 : 0.22}
          />
          <AnimatedShape
            position={[4, -2, -6]}
            color={isDark ? '#7928ca' : '#7c3aed'}
            scale={isDark ? 2.4 : 1.8}
            speed={isDark ? 1.1 : 0.75}
            distort={isDark ? 0.35 : 0.22}
            opacity={isDark ? 0.33 : 0.20}
          />

          {/* الشكل التالت نخليه يظهر في الدارك أو الديسكتوب فقط عشان الموبايل يبقى أخف */}
          {(!isMobile || isDark) && (
            <AnimatedShape
              position={[0, 0, -10]}
              color={isDark ? '#00ffff' : '#06b6d4'}
              scale={isDark ? 1.5 : 1.2}
              speed={isDark ? 1.0 : 0.7}
              distort={isDark ? 0.3 : 0.18}
              opacity={isDark ? 0.28 : 0.16}
            />
          )}

          <FloatingRing lightMode={!isDark} />
        </>
      )}

      {/* Stars */}
      {starsCount > 0 && (
        <Stars
          radius={50}
          depth={50}
          count={starsCount}
          factor={isDark ? 4 : 3.2}
          saturation={0}
          fade={false}
          speed={starsSpeed}
        />
      )}
    </>
  );
}

function ThreeBackgroundInner() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(wrapperRef);
  const reducedMotion = usePrefersReducedMotion();
  const isDark = useIsDarkMode();

  // dpr أقل = أداء أفضل
  const dpr: [number, number] = useMemo(() => {
    // light mode أقل عشان الري-بينت يكون أسرع
    return isDark ? [1, 1.5] : [1, 1.2];
  }, [isDark]);

  return (
    <div ref={wrapperRef} className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {/* لما الجزء ده مش ظاهر (سكرول بعيد) نقفل الـCanvas نهائيًا */}
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          dpr={dpr}
          gl={{
            alpha: true,
            antialias: false, // مهم للأداء
            powerPreference: 'high-performance',
          }}
        >
          <Scene isDark={isDark} reducedMotion={reducedMotion} />
        </Canvas>
      )}
    </div>
  );
}

export const ThreeBackground = React.memo(ThreeBackgroundInner);
