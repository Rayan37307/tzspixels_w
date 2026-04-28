import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Center, PresentationControls, Environment, Float } from '@react-three/drei';

function Model(props: any) {
  const { scene } = useGLTF('/futuristic_free-standing_terminal.glb');
  return <primitive object={scene} {...props} />;
}

const Terminal3D = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveScale = () => {
    if (windowWidth < 640) return 0.15; // Mobile
    if (windowWidth < 1024) return 0.22; // Tablet
    return 0.3; // Desktop
  };

  const getResponsiveHeight = () => {
    if (windowWidth < 640) return '400px';
    if (windowWidth < 1024) return '550px';
    return '700px';
  };

  return (
    <div className="w-full cursor-grab active:cursor-grabbing" style={{ height: getResponsiveHeight() }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 35 }}>
        <color attach="background" args={['#050505']} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

        <Suspense fallback={null}>
          <PresentationControls
            speed={1.5}
            global
            zoom={1}
            polar={[-0.1, Math.PI / 4]}
          >
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <Center>
                <Model scale={getResponsiveScale()} />
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
