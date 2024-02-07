'use client'
import React, { useRef, useState, useLayoutEffect, useEffect } from 'react'

import { styles } from '../../styles/style'
import FadeImg from '../core/FadeImg'
import { SocialLinks, mobNavLinks, navLinks } from '@/constants/index'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { X } from 'lucide-react'
import { gsap } from 'gsap'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const comp = useRef(null)

  const handleOpenMenu = (e) => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.to(comp.current, {
        xPercent: '-100',
        duration: 0.9,
        borderRadius: 0,
        ease: 'expo.inOut(2)',
        stagger: 0.1,
      }).from(['#title1', '#title2', ' #title3', ' #title4'], {
        x: '+=40',
        duration: 0.2,
        ease: 'back.inOut(2)',
        stagger: 0.1,
      })
    }, comp)

    return () => ctx.revert()
  }

  const handleCloseMenu = () => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.to(comp.current, {
        xPercent: '100',
        duration: 0.9,
      })
    })

    return () => ctx.revert()
  }

  // useEffect(() => {}, [])

  return (
    <nav
      className={`${styles.paddingX} w-full max-w-7xl mx-auto py-5 flex justify-between items-center fixed backdrop-blur-md z-50`}
    >
      <Link href={`/`}>
        <div className="flex gap-x-3 items-center">
          <span className="text-white font-poppins font-semibold">
            <FadeImg className="w-32" src="./logo2.png" />
            {/* Kaif <span className="text-primary-purple">Ansari</span> */}
          </span>
        </div>
      </Link>
      <div className="hidden md:flex">
        <MenuItems isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      <div
        ref={comp}
        className="absolute top-0 left-0 h-screen w-full bg-black text-white z-50 flex flex-col justify-between p-7 overflow-hidden translate-x-[100vw] rounded-l-xl"
        id="sidebarMenu"
      >
        <div className="w-full h-auto flex justify-between items-baseline border-b-2 border-b-dark-3 pb-5">
          <span className="text-sm font-semibold tracking-tight text-dark-3 uppercase">
            Navigation
          </span>
          <div
            onClick={handleCloseMenu}
            className="w-20 h-20 bg-primary-purple rounded-full flex justify-center items-center cursor-pointer"
          >
            <X strokeWidth={1.1} className="w-10 h-10" />
          </div>
        </div>
        <div className="py-5">
          <MenuItems
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isVertical={true}
            handleCloseMenu={handleCloseMenu}
          />
        </div>
        <div className="flex flex-col py-5 border-t-2 border-t-dark-3">
          <span className="text-sm font-semibold tracking-tight text-dark-3 uppercase">
            Socials
          </span>
          <ul className="flex gap-x-2 mt-2">
            {SocialLinks.map((item, index) => (
              <Link key={`social-item-${index}`} href={`${item.url}`}>
                <li
                  className={cn(
                    'text-white-100 text-base font-medium cursor-pointer duration-200 transition-all '
                  )}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div
        onClick={handleOpenMenu}
        className="flex md:hidden active:border-[0.005px] w-10 h-10 active:border-dark-1 rounded-full  cursor-pointer justify-center items-center"
      >
        <FadeImg className="w-5 h-5" src="./assets/menu.svg" />
      </div>
    </nav>
  )
}

const MenuItems = ({ isVertical, handleCloseMenu }) => {
  const path = usePathname()
  return (
    <ul
      className={cn(`flex`, {
        'flex-col  gap-y-3': isVertical,
        'flex-row gap-x-14': !isVertical,
      })}
    >
      {(isVertical ? mobNavLinks : navLinks).map((link, index) => (
        <Link
          key={`menu-item-${index}`}
          onClick={handleCloseMenu}
          href={`${link.href}`}
          className="group flex justify-between md:flex-col md:justify-center items-center "
        >
          <li
            id={`title${index + 1}`}
            className={cn(
              'group-hover:text-white-100 text-sm font-medium cursor-pointer duration-200 transition-all ',
              {
                'text-slate-500 ': path !== link.href,
                'text-white-100 scale-[1.003]': path === link.href,
                'text-5xl text-white': isVertical,
              }
            )}
          >
            {link.title}
          </li>
          <div
            className={cn(
              'w-1 h-1 rounded-full bg-white mt-1 opacity-0 group-hover:opacity-100',
              {
                'opacity-100': path === link.href,
                'w-2 h-2': isVertical,
              }
            )}
          />
        </Link>
      ))}
    </ul>
  )
}

export default Navbar
