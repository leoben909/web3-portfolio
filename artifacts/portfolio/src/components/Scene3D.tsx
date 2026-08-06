import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Scene() {
  const icosahedronRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.y += delta * 0.1;
      icosahedronRef.current.rotation.x += delta * 0.05;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.02;
    }
  });

  const particlesCount = 800;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, [particlesCount]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#3b82f6" />
      
      <mesh ref={icosahedronRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial 
          color="#2563eb" 
          wireframe={true} 
          emissive="#2563eb"
          emissiveIntensity={0.5}
          transparent={true}
          opacity={0.8}
        />
      </mesh>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#3b82f6" transparent opacity={0.6} sizeAttenuation={true} />
      </points>
    </>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-80 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
}