'use client'
import { motion } from 'framer-motion'
import { styles } from '@/styles/style'
import { staggerContainer } from '@/lib/motion'
import { useEffect } from 'react'

const SectionWrapper = (Component, sectionId) => {
  function HOC() {
    useEffect(() => {
      const handleContextmenu = (e) => {
        e.preventDefault()
      }
      document.addEventListener('contextmenu', handleContextmenu)
      return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
      }
    }, [])
    return (
      <motion.section
        variants={staggerContainer()}
        initial={'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} mx-auto max-w-7xl`}
      >
        <span id={`${sectionId}`}></span>
        <Component />
      </motion.section>
    )
  }

  return HOC
}

export default SectionWrapper
