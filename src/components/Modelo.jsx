import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ObjModel from './FbxModel'; // Adjust the path as necessary

function Model() {
  return (
    <div className="section" style={{ height: '60vh' }}>
      <Canvas
        camera={{ position: [50, 125, 950], fov: 40 }}
        style={{ background: '#EEEEEE', width: '100%', height: '90vh', marginTop: '0rem' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.55} penumbra={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <directionalLight position={[0, 32, 5]} intensity={1} />

        <ObjModel />

        <OrbitControls
          enablePan={true}
          enableZoom={false}
          enableRotate={true}
          enableDamping={false}
          dampingFactor={0.1}
          maxPolarAngle={Math.PI / 2}
        />

      </Canvas>
    </div>
  );
}

export default Model;