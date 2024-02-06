'use client'
import { technologies } from '@/constants'
import SectionWrapper from '../hoc/SectionWrapper'
import BallCanvas from '../canvas/Ball'

const Tech = (props) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <div className="w-24 h-24 md:w-40 md:h-40" key={`ball-${index}`}>
          <BallCanvas techIcon={tech.icon} />
        </div>
      ))}
    </div>
  )
}
export default SectionWrapper(Tech, 'tech')
