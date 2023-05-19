import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';

function Scene({ gltf }) {
  return <primitive object={gltf.scene} />;
}

function CameraPoint({ target }) {
  const cameraRef = useRef();
  cameraRef.current.lookAt(target.current.position);

  return <perspectiveCamera ref={cameraRef} />;
}

function Spaceman() {
  const gltf = useLoader(GLTFLoader, '/ASTRONAUT_HIGH_POLY5.gltf');
  const astronautRef = useRef();

  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[15, 15, 15]} intensity={1} />
      <Scene gltf={gltf} ref={(node) => (astronautRef.current = node)} />


      <OrbitControls />
    </Canvas>
  );
}

export default Spaceman;
