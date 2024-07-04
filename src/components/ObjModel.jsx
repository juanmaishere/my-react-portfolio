import React, { useRef, useEffect, useState } from 'react';
import { useLoader, useFrame, extend } from '@react-three/fiber';
import { OBJLoader, MTLLoader } from 'three-stdlib';
import * as THREE from 'three';

extend({ OBJLoader, MTLLoader });

export default function ObjModel(props) {
  const group = useRef();
  const [rotationSpeed, setRotationSpeed] = useState(0.002);
  const [modelDimensions, setModelDimensions] = useState({ width: 0, height: '100vh', depth: 0 });

  const materials = useLoader(MTLLoader, '/models2/Satellite_1236.mtl');
  const obj = useLoader(OBJLoader, '/models2/Satellite_1236.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useEffect(() => {
    if (obj) {
      const box = new THREE.Box3().setFromObject(obj);
      const size = box.getSize(new THREE.Vector3());
      setModelDimensions({ width: size.x, height: size.y, depth: size.z });

      group.current.add(obj);
    }

    const timer = setTimeout(() => {
      setRotationSpeed(0);
    }, 3300); // Stop rotation after 4 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [obj, setModelDimensions]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += rotationSpeed; // Adjust rotation speed here
    }
  });

  return <group ref={group} {...props} />;
}
