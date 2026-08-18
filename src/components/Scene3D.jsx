import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text3D, Center, Edges } from '@react-three/drei';
import * as THREE from 'three';

function Platform() {
  return (
    <group position={[0, -2.5, 0]}>
      {/* WIDER BASE */}
      <mesh receiveShadow>
        <cylinderGeometry args={[5.5, 6, 0.5, 64]} />
        <meshStandardMaterial color="#050505" metalness={1} roughness={0.2} />
      </mesh>
      
      {/* Base rings */}
      <mesh position={[0, 0.26, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.8, 3.85, 64]} />
        <meshBasicMaterial color="#FF1A1A" toneMapped={false} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0.26, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4.8, 4.88, 64]} />
        <meshBasicMaterial color="#E10600" toneMapped={false} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Intense red core light illuminating the letters from below */}
      <pointLight position={[0, 1, 0]} color="#FF1A1A" intensity={25} distance={10} />
    </group>
  );
}

function OrbitalRings() {
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  
  useFrame((state) => {
    ring1Ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.3 + 1.2;
    ring1Ref.current.rotation.y += 0.015;
    
    ring2Ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.3 + 1.5;
    ring2Ref.current.rotation.y -= 0.01;
  });

  return (
    <group>
      <group ref={ring1Ref}>
        <mesh>
          <torusGeometry args={[6.5, 0.02, 16, 128]} />
          <meshBasicMaterial color="#FF1A1A" toneMapped={false} />
        </mesh>
      </group>
      <group ref={ring2Ref}>
        <mesh>
          <torusGeometry args={[7, 0.01, 16, 128]} />
          <meshBasicMaterial color="#E10600" toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

function FloatingGeometry() {
  const geoRef = useRef();
  useFrame((state) => {
    geoRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });
  
  const positions = [
    [-5.5, 2.5, -2], [5.5, 3.5, 1], [-4.5, -1, 4], [6, -1.5, -2], [0, 5, -4]
  ];

  return (
    <group ref={geoRef}>
      {positions.map((pos, i) => (
        <Float key={i} speed={2} rotationIntensity={3} floatIntensity={3}>
          <mesh position={pos} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
            <octahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial color="#050505" metalness={1} roughness={0.1} />
            <Edges threshold={15} color="#FF1A1A" toneMapped={false} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function JAMonogram() {
  // FIXED: Using a highly reliable, permanent CDN link for the 3D font!
  const fontUrl = "https://unpkg.com/three@0.160.0/examples/fonts/helvetiker_bold.typeface.json";
  
  const darkMetal = <meshStandardMaterial color="#111111" metalness={1} roughness={0.05} envMapIntensity={3} />;
  
  const logoRef = useRef();
  const auraRef = useRef();

  useFrame((state, delta) => {
    if (logoRef.current) {
      logoRef.current.rotation.y -= delta * 0.3; 
    }
    if (auraRef.current) {
      auraRef.current.scale.x = auraRef.current.scale.y = auraRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.4}>
      <Center position={[0, 0, 0]}>
        <group ref={logoRef}>
          <Text3D 
            font={fontUrl} size={3.5} height={1} curveSegments={32} 
            bevelEnabled bevelThickness={0.1} bevelSize={0.03} 
            position={[-1.2, 0.2, 0.4]} rotation={[0, 0.1, -0.15]}
          >
            J
            {darkMetal}
            <Edges threshold={20} color="#FF1A1A" toneMapped={false} />
          </Text3D>
          
          <Text3D 
            font={fontUrl} size={4.2} height={1} curveSegments={32} 
            bevelEnabled bevelThickness={0.1} bevelSize={0.03} 
            position={[0.2, -0.5, 0]} rotation={[0, -0.1, -0.15]}
          >
            A
            {darkMetal}
            <Edges threshold={20} color="#E10600" toneMapped={false} />
          </Text3D>

          <mesh ref={auraRef} position={[0, 1.5, -1]}>
            <sphereGeometry args={[3.5, 32, 32]} />
            <meshBasicMaterial color="#FF1A1A" transparent opacity={0.06} toneMapped={false} blending={THREE.AdditiveBlending} />
          </mesh>
        </group>
      </Center>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas 
      camera={{ position: [0, 1.5, 11], fov: 45 }} 
      gl={{ antialias: true, alpha: true }} 
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('#000000'), 0);
      }}
      className="w-full h-full outline-none"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} color="#ffffff" />
        <directionalLight position={[5, 5, 8]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#444444" />
        <spotLight position={[-5, 0, 8]} angle={0.5} penumbra={1} intensity={20} color="#FF1A1A" />
        
        <Environment preset="city" />
        
        <group position={[0, 0, 0]} scale={0.5}>
          <Platform />
          <OrbitalRings />
          <FloatingGeometry />
          <JAMonogram />
        </group>

        <OrbitControls 
          enableZoom={false} enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.1} minPolarAngle={Math.PI / 3}
          minAzimuthAngle={-Math.PI / 8} maxAzimuthAngle={Math.PI / 8}
        />
      </Suspense>
    </Canvas>
  );
}