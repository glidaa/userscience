import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function Sun() {
  const meshRef = useRef<Mesh>();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial emissive="#FFEB3B" />
      <pointLight distance={100} intensity={2} color="#FFC107" />
      <pointLight distance={50} intensity={5} color="#FFC107" />
      <pointLight distance={20} intensity={10} color="#FFC107" />
      <meshBasicMaterial transparent depthWrite={false} />
    </mesh>
  );
}

export default Sun;
