'use client'
import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'

import { styles } from '@/styles/style'
import FadeImg from '../core/FadeImg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, MoveUpRightIcon } from 'lucide-react'
import { ABOUT_DESCRIPTION, RESUME_URL } from '@/constants'
import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 30, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.04, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
}

function About() {
  return (
    <div className="pt-10 md:pt-72 w-full flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-y-6">
      <div className="w-full md:w-1/2 ">
        <span className={`${styles.sectionSubText}`}>Introduction</span>
        <h1 className={`${styles.sectionHeadText} font-poppins font-extrabold`}>
          Overview.
        </h1>

        <p className="text-sm text-secondary leading-6 mt-6">
          {ABOUT_DESCRIPTION}
        </p>

        <ResumeViewButton />
      </div>
      <div className="w-full md:w-1/2 justify-center items-center transition-all ease-in-out">
        <Tilt options={defaultOptions}>
          <motion.div
            animate={{
              y: [0, 10, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-full h-full rounded-full z-10"
          >
            <FadeImg
              className="md:w-full md:h-full object-cover rounded-full"
              src="./assets/profile.png"
            />
          </motion.div>
        </Tilt>
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')

const ResumeViewButton = () => {
  return (
    <Link target="_blank" href={`${RESUME_URL}`}>
      <div className="relative w-48 mt-7 flex justify-center items-center cursor-pointer">
        <FadeImg
          className="w-44 h-44 relative animate-spin-slow rounded-full -ml-5"
          src="./assets/text-animate.png"
        />
        <div className="w-10 h-10 bg-white rounded-full absolute -ml-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-7 text-black">
          <MoveUpRightIcon
            className="w-7 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            color="black"
          />
        </div>
      </div>
    </Link>
  )
}
