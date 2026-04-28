import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center, PresentationControls, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function Model(props: any) {
  const { scene } = useGLTF('/futuristic_free-standing_terminal.glb');
  return <primitive object={scene} {...props} />;
}

const Terminal3D = () => {
  return (
    <div className="w-full h-[700px] cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 35 }}>
        <color attach="background" args={['#050505']} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

        <Suspense fallback={null}>
          <PresentationControls
            speed={1.5}
            global
            zoom={0.8}
            polar={[-0.1, Math.PI / 4]}
          >
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <Center>
                <Model scale={6} />
              </Center>
            </Float>
          </PresentationControls>
        </Suspense>
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default Terminal3D;

// Preload the model
useGLTF.preload('/futuristic_free-standing_terminal.glb');
