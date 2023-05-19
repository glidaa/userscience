//userscience/src/components/ThreeDMovement.js
import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';

function ThreeDMovement() {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  useEffect(() => {
    const onScroll = (event) => {
      cameraRef.current.position.z += event.deltaY * 0.03;
    };

    const onMouseMove = (event) => {
      cameraRef.current.position.x += event.movementX * 0.01;
      cameraRef.current.position.y -= event.movementY * 0.01;
    };

    document.addEventListener('wheel', onScroll);
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('wheel', onScroll);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return null;
}

export default ThreeDMovement;
