import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Scene() {
  const icosahedronRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_state, delta) => {
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.y += delta * 0.09;
      icosahedronRef.current.rotation.x += delta * 0.04;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.018;
      pointsRef.current.rotation.x += delta * 0.005;
    }
  });

  // Reduced to 500 for performance; spread tighter for better composition
  const positions = useMemo(() => {
    const arr = new Float32Array(500 * 3);
    for (let i = 0; i < 500 * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[4, 4, 4]} intensity={2.5} color="#3b82f6" />
      <pointLight position={[-4, -2, 2]} intensity={0.8} color="#1d4ed8" />

      <mesh ref={icosahedronRef}>
        <icosahedronGeometry args={[1.9, 1]} />
        <meshStandardMaterial
          color="#2563eb"
          wireframe
          emissive="#1d4ed8"
          emissiveIntensity={0.6}
          transparent
          opacity={0.75}
        />
      </mesh>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          color="#60a5fa"
          transparent
          opacity={0.5}
          sizeAttenuation
        />
      </points>
    </>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
