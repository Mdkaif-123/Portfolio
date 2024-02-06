'use client'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import CanvasLoader from '../core/Loader'

const Computer = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const ref = useRef()

  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={2} groundColor={'black'} />
      <pointLight position={[-1, 3.5, 0]} intensity={1.45} />
      <spotLight
        position={[3, 3, 2]}
        angle={0.12}
        penumbra={1}
        intensity={3}
        castShadow
      />
      <primitive
        position={isMobile ? [1.1, 0.5, -2] : [0, -1, -1.5]}
        object={computer.scene}
        scale={isMobile ? 0.75 : 1}
        rotation={[0, -0.3, -0.18]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 500px)')
    setIsMobile(media.matches)
    console.log(isMobile)
    const handleIsMediaChanged = (event) => {
      setIsMobile(event.matches)
    }

    media.addEventListener('change', handleIsMediaChanged)
    return () => {
      media.removeEventListener('change', handleIsMediaChanged)
    }
  }, [isMobile])
  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{ position: [20, 3, 7], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computer isMobile={isMobile} />
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default ComputerCanvas
