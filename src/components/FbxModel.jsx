import React, { useRef, useEffect, useState } from 'react';
import { useLoader, useFrame, extend } from '@react-three/fiber';
import { FBXLoader } from 'three-stdlib';
import * as THREE from 'three';

extend({ FBXLoader });

export default function FbxModel(props) {
  const group = useRef();
  const mixer = useRef();
  const [rotationSpeed, setRotationSpeed] = useState(0.002);
  const [modelDimensions, setModelDimensions] = useState({ width: 0, height: '30vh', depth: 0 });

  const fbx = useLoader(FBXLoader, '/models2/Character.fbx');

  useEffect(() => {
    if (fbx) {
      const box = new THREE.Box3().setFromObject(fbx);
      const size = box.getSize(new THREE.Vector3());
      setModelDimensions({ width: size.x, height: size.y, depth: size.z });

      group.current.add(fbx);

      // Initialize the AnimationMixer
      mixer.current = new THREE.AnimationMixer(fbx);

      // Find and play the first animation clip
      if (fbx.animations && fbx.animations.length > 0) {
        const firstClip = fbx.animations[0];
        const action = mixer.current.clipAction(firstClip);
        action.play();
      }
    }

    // Stop rotation after 3.3 seconds

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
      }
    };
  }, [fbx]);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += 0.007; // Adjust rotation speed here
    }
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return <group ref={group} {...props} />;
}