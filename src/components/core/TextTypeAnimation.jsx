'use client'
import { styles } from '@/styles/style'
import { TypeAnimation } from 'react-type-animation'

const TypeAnimatedText = () => {
  return (
    <TypeAnimation
      className={`${styles.heroHeadText} !text-primary-purple`}
      sequence={[
        'Kaif',
        1000,
        'a web developer',
        1000,
        'a content creator',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  )
}

export default TypeAnimatedText
