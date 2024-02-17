'use client'
import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from '@/styles/style'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import FadeImg from '../core/FadeImg'
import { experiences } from '@/constants'
import { StarIcon, TargetIcon } from 'lucide-react'
import { PinContainer } from '../ui/3dpinCard'
import Link from 'next/link'
const Experience = () => {
  return (
    <div className="relative mt-12 w-full h-auto">
      <span className={`${styles.sectionSubText}`}>
        What I have done so far
      </span>
      <h1 className={`${styles.sectionHeadText} font-poppins font-extrabold `}>
        Work Experience.
      </h1>

      <div className="mt-20 mx-auto w-full h-auto">
        <VerticalTimeline animate>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            visible={true}
            iconStyle={{ background: '#1D1836', color: '#fff' }}
            icon={<StarIcon color="yellow" fill="yellow" size={9} />}
          />
        </VerticalTimeline>
      </div>
    </div>
  )
}

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{
        borderRight: '7px solid  #1d1836',
      }}
      visible={true}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="w-full h-full flex justify-center items-center z-20">
          <Link target="_blank" href={experience.companyWebsite}>
            <FadeImg
              className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              src={experience.icon}
            />
          </Link>
        </div>
      }
    >
      <h3 className="text-[24px] font-bold text-white-100">
        {experience.title}
      </h3>
      <h4 className="vertical-timeline-element-subtitle text-secondary font-light">
        {experience.company_name}
      </h4>
      <ul className="mt-4 list-disc space-y-4">
        {experience.points.map((point, index) => (
          <li key={`point-${index}`} className="text-white-100 font-thin ">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export default SectionWrapper(Experience, 'experience')
