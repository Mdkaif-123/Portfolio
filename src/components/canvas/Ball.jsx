'use client'
import {
  Decal,
  Float,
  Icosahedron,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from '../core/Loader'

const Ball = ({ icon }) => {
  const [decal] = useTexture([icon])

  return (
    <Float speed={1.75} floatIntensity={2} rotationIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh scale={2.75} castShadow receiveShadow>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          color={'#4e5577'}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ techIcon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <Ball icon={techIcon.src} />
        <OrbitControls enableZoom={false} />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default BallCanvas
