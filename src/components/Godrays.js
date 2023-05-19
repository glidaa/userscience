<EffectComposer>
{renderPass}
  <GodRays
    blendFunction={BlendFunction.Screen}
    samples={30}
    density={0.97}
    decay={0.96}
    weight={0.6}
    exposure={0.4}
    clampMax={1}
    renderToScreen
    width={Resizer.AUTO_SIZE}
    height={Resizer.AUTO_SIZE}
    kernelSize={KernelSize.SMALL}
    blur
  />
  <Bloom
    luminanceThreshold={0}
    luminanceSmoothing={0.9}
    height={300}
    opacity={1}
    width={300}
    kernelSize={KernelSize.SMALL}
    luminanceGamma={2.2}
  />
</EffectComposer>

import React, { useRef } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, GodRays } from '@react-three/postprocessing';
import { BlendFunction, KernelSize, Resizer } from 'postprocessing';
import ThreeDMovement from './ThreeDMovement';
import AsteroidField from './AsteroidField';
import { Mesh } from 'three';

function Background() {
  const cameraRef = useRef();
  const meshRef = useRef<Mesh>();

  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[15, 15, 15]} intensity={1} />
      <Suspense fallback={null}>
        <ThreeDMovement cameraRef={cameraRef} />
        <AsteroidField />
        <mesh ref={meshRef}>
          <sphereGeometry args={[3, 32, 32]} />
          <meshStandardMaterial emissive="#FFEB3B" />
          <pointLight distance={100} intensity={2} color="#FFC107" />
          <pointLight distance={50} intensity={5} color="#FFC107" />
          <pointLight distance={20} intensity={10} color="#FFC107" />
          <meshBasicMaterial transparent depthWrite={false} />
        </mesh>
      </Suspense>
      <EffectComposer>
        {meshRef && (
          <GodRays
            sun={meshRef}
            camera={cameraRef.current}
            lightSource={meshRef.current}
            blendFunction={BlendFunction.ADD}
            samples={30}
            density={0.97}
            decay={0.96}
            weight={0.6}
            exposure={0.4}
            clampMax={1}
            renderToScreen={true} 
            width={Resizer.AUTO_SIZE}
            height={Resizer.AUTO_SIZE}
            kernelSize={KernelSize.SMALL}
            blur={true} 
          />
        )}
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={1}
          width={300}
          kernelSize={KernelSize.SMALL}
          luminanceGamma={2.2}
        />
      </EffectComposer>
    </Canvas>
  );
}

export default Background;


this works
import React, { useRef, forwardRef } from 'react';
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, GodRays } from '@react-three/postprocessing';
import { BlendFunction, KernelSize, Resizer } from 'postprocessing';
import ThreeDMovement from './ThreeDMovement';
import AsteroidField from './AsteroidField';
import { Mesh } from 'three';
import * as THREE from 'three';

const Sun = forwardRef((props, forwardRef) => {
  useFrame(({ clock }) => {
    forwardRef.current.position.x = Math.sin(clock.getElapsedTime()/2) * -2;
    forwardRef.current.position.y = Math.cos(clock.getElapsedTime()/2) * -2;
  });

  return (
    <mesh ref={forwardRef} position={[0, 200, -150]}>
      <sphereGeometry args={[30, 36, 36]} />
      <meshBasicMaterial color={"#FFFF00"} />
    </mesh>
  );
});

function Effects() {
  const sunRef = useRef();

  return (
    <>
      <Sun ref={sunRef} />
      {sunRef.current && (
        <EffectComposer multisampling={0}>
          <GodRays
            sun={sunRef.current}
            blendFunction={BlendFunction.Screen}
            samples={30}
            density={0.97}
            decay={0.96}
            weight={0.6}
            exposure={0.4}
            clampMax={1}
            width={Resizer.SCREEN_SIZE}
            height={Resizer.SCREEN_SIZE}
            kernelSize={KernelSize.SMALL}
            blur={true}
          />
     
        </EffectComposer>
      )}
    </>
  );
}

function Background() {
  const cameraRef = useRef();


  return (
    <Canvas style={{ height: '100vh', width: '100vw' }} 
    onCreated={({ gl }) => {
      gl.setClearColor(new THREE.Color('#000000'));
    }}

    >
      <ambientLight intensity={0.3} />
      <pointLight position={[15, 15, 15]} intensity={1} />
      <Suspense fallback={null}>
        <ThreeDMovement cameraRef={cameraRef} />
        <AsteroidField />
      </Suspense>
      <Effects />
    </Canvas>
  );
}

export default Background;


import React, { useRef, forwardRef, useState } from 'react';
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, GodRays } from '@react-three/postprocessing';
import { BlendFunction, KernelSize, Resizer } from 'postprocessing';
import ThreeDMovement from './ThreeDMovement';
import AsteroidField from './AsteroidField';
import { Mesh } from 'three';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';

const Sun = forwardRef((props, forwardRef) => {
  useFrame(({ clock }) => {
    forwardRef.current.position.x = Math.sin(clock.getElapsedTime()/2) * -2;
    forwardRef.current.position.y = Math.cos(clock.getElapsedTime()/2) * -2;
  });

  return (
    <mesh ref={forwardRef} position={[0, 200, -150]}>
      <sphereGeometry args={[30, 36, 36]} />
      <meshBasicMaterial color={"#FFFF00"} />
    </mesh>
  );
});

function Effects() {
  const sunRef = useRef();

  return (
    <>
      <Sun ref={sunRef} />
      {sunRef.current && (
        <EffectComposer multisampling={0}>
          <GodRays
            sun={sunRef.current}
            blendFunction={BlendFunction.Screen}
            samples={30}
            density={0.97}
            decay={0.96}
            weight={0.6}
            exposure={0.4}
            clampMax={1}
            width={Resizer.SCREEN_SIZE}
            height={Resizer.SCREEN_SIZE}
            kernelSize={KernelSize.SMALL}
            blur={true}
          />
     
        </EffectComposer>
      )}
    </>
  );
}

function Background() {
  const cameraRef = useRef();

  // Load the astronaut object using useLoader hook
  const astronaut = useLoader(OBJLoader, "./ASTRONAUT_HIGH_POLY4.obj");

  // Set the position and scale of the astronaut object
  astronaut.position.set(0, 0, -250);
  astronaut.scale.set(100, 100, 100);

  // Create a black material for the astronaut object
  const material = new THREE.MeshBasicMaterial({ color: "white" });

  // Apply the material to all the astronaut object's children
  astronaut.traverse(child => {
    if (child instanceof THREE.Mesh) {
      child.material = material;
    }
  });

  return (
    <Canvas style={{ height: '100vh', width: '100vw' }} 
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('#000000'));
      }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[15, 15, 15]} intensity={1} />
      <Suspense fallback={null}>
        <ThreeDMovement cameraRef={cameraRef} />
        <AsteroidField />
        {/* Add the astronaut object to the scene */}
        <primitive object={astronaut} />
      </Suspense>
      <Effects />
    </Canvas>
  );
}


export default Background;
