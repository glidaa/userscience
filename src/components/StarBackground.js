import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './StarBackground.scss';

const StarBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = containerRef.current;
    container.appendChild(renderer.domElement);

    // Create and add stars to the scene
    const createStar = () => {
      const geometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);
      star.position.x = Math.random() * 10 - 5;
      star.position.y = Math.random() * 10 - 5;
      star.position.z = Math.random() * 10 - 5;
      scene.add(star);
    };

    for (let i = 0; i < 1000; i++) {
      createStar();
    }

    // Animate the scene
    const animate = () => {
      requestAnimationFrame(animate);
      // Rotate the stars
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.x += 0.01;
          child.rotation.y += 0.01;
        }
      });
      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="star-background" />;
};

export default StarBackground;
