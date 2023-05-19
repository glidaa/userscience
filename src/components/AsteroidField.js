import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useMemo } from 'react';


function Asteroid(props) {
  const { position, scale } = props;
  const asteroidRef = useRef();

  useFrame(() => {
    if (asteroidRef.current) {
      asteroidRef.current.rotation.x += 0.01;
      asteroidRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={asteroidRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshPhysicalMaterial
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0}
        roughness={0.5}
        color={'#000'}
        transparent opacity={0.5}
      />
    </mesh>
  );
}

function AsteroidField() {
  const count = 2000;
  const radius = 200;

  const asteroids = useMemo(() => {
    const asteroidsArray = [];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * radius;
      const x = Math.sin(angle) * distance;
      const y = (Math.random() - 0.5) * 2 * 25;
      const z = Math.cos(angle) * distance * (Math.random() - 0.5) * 2 * 5;
      const scale = Math.random() * 0.8 + 0.1;

      asteroidsArray.push({
        position: [x, y, z],
        scale: [scale, scale, scale],
      });
    }

    return asteroidsArray;
  }, [count, radius]);

  return (
    <>
      {asteroids.map((props, index) => (
        <Asteroid key={index} {...props} />
      ))}
    </>
  );
}


export default AsteroidField;
