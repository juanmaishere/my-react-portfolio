import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ObjModel from './ObjModel'; // Adjust the path as necessary
import CameraAnimation from './CameraAnimation'; // Adjust the path as necessary

function Model() {
  return (
    <div className="section" style={{ height: '100vh' }}>
      <Canvas
        camera={{ position: [-70, -0, 560], fov: 50 }}
        style={{ background: 'none', width: '100%', height: '100vh' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.55} penumbra={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <directionalLight position={[0, 32, 5]} intensity={1} />

        <ObjModel />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          enableDamping={false}
          dampingFactor={0.1}
          maxPolarAngle={Math.PI / 2}
        />

        <CameraAnimation />
      </Canvas>
    </div>
  );
}

export default Model;