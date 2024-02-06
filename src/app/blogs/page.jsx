'use client'
import { styles } from '@/styles/style'
import { cn } from '@/lib/utils'
import { Blogs } from '@/constants'
import SectionCard from '@/components/shared/SectionCard'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
function Page() {
  const PARENT_VARIANT = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 2, duration: 2 },
    },
  }

  const [currentItem, setCurrentItem] = useState(null)
  const [isHovering, setIsHovering] = useState(false)
  const component = useRef(null)
  const revealRef = useRef(null)

  let lastMousePos = useRef({ x: 0, y: 0 })
  let currentImage = Blogs.map((project, index) => {
    return project.hoverImage
  })
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY }
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2))

      let ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350
          const maxX = window.innerWidth - 250

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
            duration: 0.3,
          })
          gsap.to(revealRef.current, {
            opacity: isHovering ? 1 : 0,
            visibility: 'visible',
            ease: 'power3.out',
            duration: 0.2,
          })
        }
        lastMousePos.current = mousePos
        return () => ctx.revert() // cleanup!
      }, component)
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [currentItem, isHovering])
  return (
    <section className={`${styles.padding} mx-auto max-w-7xl pt-20`}>
      <div className="border-b border-b-gray-200 pb-10">
        <h1 className={cn(`${styles.pageHeadText} font-poppins font-bold`)}>
          Blogs
        </h1>
        <p className={`text-sm text-white-100 font-normal tracking-wide my-1`}>
          Crafting Knowledge Nuggets for All to Discover.
        </p>
      </div>
      <div>
        <motion.ul
          variants={PARENT_VARIANT}
          initial={'hidden'}
          animate={'visible'}
          onMouseLeave={() => setCurrentItem(null)}
        >
          {Blogs.map((project, index) => (
            <SectionCard
              key={'section-card' + index}
              index={index}
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
              componentRef={component}
              isBlog={true}
              project={project}
              setIsHovering={setIsHovering}
            />
          ))}
        </motion.ul>
      </div>

      {/* Motion Image  */}
      <div
        ref={revealRef}
        className="pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-center duration-300 object-cover"
        style={{
          background: `url(${currentImage[currentItem]})`,
        }}
      >
        {/* <div className="w-full h-full bg-[#02020256]"></div> */}
      </div>
    </section>
  )
}

export default Page
