// src/components/CameraAnimation.jsx
import React, { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CameraAnimation = () => {
  const [startZoom, setStartZoom] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartZoom(true);
    }, 2000); // Wait for 2 seconds before starting the zoom
    return () => clearTimeout(timeout);
  }, []);

  useFrame((state) => {
    if (startZoom) {
      state.camera.position.lerp(new THREE.Vector3(35, 110, -60), 0.02);
      state.camera.updateProjectionMatrix();
    }
  });

  return null;
};

export default CameraAnimation;