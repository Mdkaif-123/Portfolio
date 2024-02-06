'use client'
import { motion } from 'framer-motion'
function ScrollButton() {
  return (
    <motion.div
      animate={{
        y: [0, 20, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className="w-3 h-3 rounded-full bg-white "
    />
  )
}

export default ScrollButton
