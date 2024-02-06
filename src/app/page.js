import ComputerCanvas from '@/components/canvas/Computers'
import FadeImg from '@/components/core/FadeImg'
import { styles } from '@/styles/style'
import ScrollButton from '@/components/ui/scrollButton'
import Link from 'next/link'
import { About, Contact, Experience, Tech } from '@/components/section'
import TypeAnimatedText from '@/components/core/TextTypeAnimation'
export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <About />
      <Experience />
      <Tech />
      <Contact />
    </main>
  )
}

const HeroSection = () => {
  return (
    <section className="!relative w-full h-screen">
      <FadeImg
        className="absolute -z-10 w-full h-screen object-cover"
        src="./assets/herobg.png"
      />
      <div
        className={`${styles.padding} max-w-7xl mx-auto flex gap-x-4 md:gap-x-7 items-center`}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-primary-purple" />
          <div className="h-28 md:h-44 w-[2px] violet-gradient " />
        </div>
        <div className="flex flex-col">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm{' '}
            <span className="text-primary-purple">
              <TypeAnimatedText />
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} py-3 md:py-5 text-secondary text-`}
          >
            Your Innovative Full Stack Developer Building Tomorrow's{' '}
            <br className="hidden md:block" /> Digital Landscape.
          </p>
        </div>
      </div>
      <ComputerCanvas />

      <div className="relative flex bottom-80 md:bottom-32 w-full justify-center items-center">
        <div className="w-5 h-10 md:w-8 md:h-14 flex justify-center items-start p-2 rounded-3xl border-[2px] border-white cursor-pointer">
          <Link href={`#about`}>
            <ScrollButton />
          </Link>
        </div>
      </div>
    </section>
  )
}
