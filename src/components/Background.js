import React, { useRef, forwardRef, useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, GodRays } from '@react-three/postprocessing';
import { BlendFunction, KernelSize, Resizer } from 'postprocessing';
import ThreeDMovement from './ThreeDMovement';
import AsteroidField from './AsteroidField';
import { Mesh } from 'three';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { useLoader, useThree, useFrame } from '@react-three/fiber';


function CameraPosition({ gltf }) {
  const camera = useThree((state) => state.camera);
  const gltfPosition = useRef();

  useEffect(() => {
    // Find the position of the GLTF object
    gltfPosition.current = new THREE.Vector3().setFromMatrixPosition(
      gltf.scene.matrixWorld
    );

    // Find the position of the camera
    const cameraPosition = camera.position.clone();
    const cameraDirection = camera.getWorldDirection(new THREE.Vector3());

    // Calculate the new position of the GLTF object
    const offset = cameraDirection.clone().multiplyScalar(30);
    const newPosition = cameraPosition.clone().add(offset);

    // Move the GLTF object down and to the left
const downLeftOffset = new THREE.Vector3(0, -8, 0);
newPosition.add(downLeftOffset);
gltf.scene.rotation.y = Math.PI;

    // Move the GLTF object to the new position
    gltf.scene.position.copy(newPosition);
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.material.color.set('#9E9E9E');
      }
    });
    /* // Print out the position of the spaceman
    console.log('Spaceman position:', gltfPosition.current);
    console.log("Spaceman rotation: ", gltfPosition.rotation);

    console.log('gltf position:', gltf.scene.position);
    console.log("gltf rotation: ", gltf.scene.rotation);

    console.log("Camera position:", camera.position);
    console.log("Camera rotation: ", camera.rotation); */

  }, [camera, gltf]);

  return null;
}  


const Sun = forwardRef((props, forwardRef) => {
  useFrame(({ clock }) => {
    forwardRef.current.position.x = Math.sin(clock.getElapsedTime()/2) * -2;
    forwardRef.current.position.y = Math.cos(clock.getElapsedTime()/2) * -2;
   
/*   console.log("Sun position:", forwardRef.current.position);
  console.log("Sun position:", forwardRef.current.rotation); */
  });

  return (
    <mesh ref={forwardRef} position={[0, 200, -150]}>
      <sphereGeometry args={[32, 36, 36]} />
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
            samples={160}
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

function Scene({ gltf }) {
  return <primitive object={gltf.scene} />;
}

function Background() {
  const cameraRef = useRef();
  const gltf = useLoader(GLTFLoader, '/ASTRONAUT_HIGH_POLY5.gltf');
  
    


  return (
    <Canvas style={{ height: '100vh', width: '100vw' }} 
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('#000000'));
      }}
    >
      <ambientLight intensity={5} />
      {/* <pointLight position={[0, 0, -200]} intensity={2} rotation={[0, Math.PI/4, 0]} />  */}

      <Suspense fallback={null}>
        {/* Add the astronaut object to the scene */}
        <primitive
          object={gltf.scene}
          position={[0, 0, -200]}
          scale={[50, 50, 50]}
          
        />
        <ThreeDMovement cameraRef={cameraRef} />
        <AsteroidField />
        <CameraPosition gltf={gltf} />
      </Suspense>
      <Effects />
    </Canvas>
  );
}


export default Background;
