'use client'
import { styles } from '@/styles/style'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeAnimatedText = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 500px)')
    setIsMobile(media.matches)
    const handleIsMediaChanged = (event) => {
      setIsMobile(event.matches)
    }

    media.addEventListener('change', handleIsMediaChanged)

    return () => {
      media.removeEventListener('change', handleIsMediaChanged)
    }
  }, [isMobile])

  const mobileArray = ['Kaif', 1000, 'Kaif', 1000, 'Kaif', 1000]
  const desktopArray = [
    'Kaif',
    1000,
    'a Web Developer',
    1000,
    'a Content Maven',
    1000,
  ]
  return (
    <TypeAnimation
      className={`${styles.heroHeadText} !text-primary-purple`}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      sequence={desktopArray}
    />
  )
}

export default TypeAnimatedText
