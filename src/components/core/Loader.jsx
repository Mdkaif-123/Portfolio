import { Html, useProgress } from '@react-three/drei'
import React from 'react'
const CanvasLoader = ({ showCompleted }) => {
  const { progress } = useProgress()

  return (
    <Html className="w-full h-full flex justify-center items-center">
      <span className="text-sm font-normal flex text-center">
        {progress.toFixed(2)}% &nbsp;{' '}
        <span className={`hidden ${showCompleted && 'block'}`}>Completed</span>
      </span>
    </Html>
  )
}

export default CanvasLoader
