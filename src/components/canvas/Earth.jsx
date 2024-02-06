'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import CanvasLoader from '../core/Loader'
const Earth = () => {
  const Earth = useGLTF('./planet/scene.gltf')
  const ref = useRef()

  return (
    <mesh scale={3.65}>
      <primitive object={Earth.scene} />
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <hemisphereLight intensity={0.25} />
      <Earth />
      <Suspense fallback={<CanvasLoader />} />
      <OrbitControls
        autoRotate
        enableZoom={false}
        rotateSpeed={2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas
