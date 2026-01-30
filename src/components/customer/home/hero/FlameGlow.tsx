"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function PulsingGlow() {
  const mainLightRef = useRef<THREE.PointLight>(null);
  const secondaryLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (!mainLightRef.current || !secondaryLightRef.current) return;
    
    const primaryFlicker = Math.sin(state.clock.elapsedTime * 3) * 0.2;
    const secondaryFlicker = Math.sin(state.clock.elapsedTime * 7) * 0.1;
    const tertiaryFlicker = Math.sin(state.clock.elapsedTime * 11) * 0.05;
    
    const combinedFlicker = primaryFlicker + secondaryFlicker + tertiaryFlicker + 1;
    
    mainLightRef.current.intensity = combinedFlicker * 0.8;
    secondaryLightRef.current.intensity = (combinedFlicker * 0.3) + 0.1;
  });

  return (
    <>
      <pointLight 
        ref={mainLightRef}
        position={[0, 0, 2]} 
        color="#d97706"
        distance={8}
        decay={2}
      />
      
      <pointLight 
        ref={secondaryLightRef}
        position={[-3, 2, 1]} 
        color="#fbbf24"
        distance={6}
        decay={2}
      />
      
      <pointLight 
        position={[3, -1, 2]} 
        intensity={0.2}
        color="#fff5e6"
        distance={5}
      />
    </>
  );
}

export default function FlameGlow() {
  return (
    <Suspense fallback={<div className="bg-transparent" />}>
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        gl={{ 
          alpha: true,
          antialias: false,
          powerPreference: "high-performance"
        }}
        dpr={[1, 1.5]}
      >
        <PulsingGlow />
      </Canvas>
    </Suspense>
  );
}