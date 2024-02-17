'use client'
import { capitalizeFirstLetter } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import { motion, spring } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
// import { useRef } from 'react'

const CARD_VARIANT = {
  hidden: {
    y: '10vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.01,
      type: 'spring',
      duration: 0.5,
      stiffness: 100,
    },
  },
}

const SectionCard = ({
  project,
  isBlog,
  setCurrentItem,
  componentRef,
  index,
  setIsHovering,
}) => {
  return (
    <Link
      target="_blank"
      href={isBlog ? '/blog/' + project.id : project.source_code_link}
    >
      <motion.li
        variants={CARD_VARIANT}
        initial={'hidden'}
        animate={'visible'}
        className="py-9 border-b border-b-dark-3"
        ref={componentRef}
        onMouseEnter={() => (setCurrentItem(index), setIsHovering(true))}
        onMouseLeave={() => setIsHovering(false)}
      >
        <article className="flex justify-between items-center">
          <div className="flex flex-col">
            <h4 className="font-semibold text-2xl font-poppins">
              {project.title}
            </h4>
            <div className="flex gap-3 mt-1">
              {project.tags.map((tag, index) => (
                <span
                  key={'tag' + index}
                  className="text-sm text-primary-purple font-medium"
                >
                  {capitalizeFirstLetter(tag.name)}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <p className="hidden md:block font-medium">
              {isBlog ? 'Read More' : 'View Project'}
            </p>
            <ArrowUpRight color="white" />
          </div>
        </article>
      </motion.li>
    </Link>
  )
}

export default SectionCard
