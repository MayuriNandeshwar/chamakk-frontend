"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect, Suspense } from 'react';
import * as THREE from 'three';

/**
 * Golden Particles Component
 * Creates floating particles matching CHAMAKK's gold/amber brand colors
 */
function GoldenParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  // Use STATE instead of ref for particle data (React 19 compliant)
  const [particleData] = useState(() => {
    const count = 80;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    // Deterministic pseudo-random generation
    let seed = 12345;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    
    for (let i = 0; i < count; i++) {
      // Spread particles across the screen
      positions[i * 3] = (random() - 0.5) * 10;     // X
      positions[i * 3 + 1] = (random() - 0.5) * 10; // Y
      positions[i * 3 + 2] = (random() - 0.5) * 5;  // Z
      
      // Golden amber colors (matching CHAMAKK brand)
      const goldVariation = random();
      colors[i * 3] = 0.85 + goldVariation * 0.15;     // R (gold)
      colors[i * 3 + 1] = 0.65 + goldVariation * 0.15; // G (amber)
      colors[i * 3 + 2] = 0.2 + goldVariation * 0.1;   // B (warm)
    }
    
    return { positions, colors };
  });

  // Animation loop
  useFrame((state) => {
    if (!particlesRef.current) return;

    // Gentle rotation
    particlesRef.current.rotation.y += 0.0003;
    
    const posArray = particlesRef.current.geometry.attributes.position.array as Float32Array;
    
    // Animate each particle
    for (let i = 0; i < posArray.length; i += 3) {
      // Slow upward drift
      posArray[i + 1] += 0.002;
      
      // Gentle horizontal wave motion
      posArray[i] += Math.sin(state.clock.elapsedTime + i) * 0.0005;
      
      // Reset particles that float off screen (infinite loop)
      if (posArray[i + 1] > 5) {
        posArray[i + 1] = -5;
      }
    }
    
    // Update geometry
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particleData.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particleData.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/**
 * Particle Background Component
 * Renders 3D canvas with floating golden particles
 */
export default function ParticleBackground() {
  return (
    <Suspense fallback={<div className="bg-transparent" />}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          alpha: true,
          antialias: false,
          powerPreference: "high-performance"
        }}
        dpr={[1, 1.5]}
      >
        <GoldenParticles />
      </Canvas>
    </Suspense>
  );
}