import FadeImg from '@/components/core/FadeImg'
import { SparklesCore } from '@/components/ui/sparkles'
import { Blogs } from '@/constants'
import { capitalizeFirstLetter, cn } from '@/lib/utils'
import { styles } from '@/styles/style'

function Page({ params }) {
  const blogId = params.id

  const blog = Blogs.reduce((item) => blogId === item.id)
  if (!blog) return null
  return (
    <section className={`${styles.padding} mx-auto max-w-7xl pt-20 md:pt-24`}>
      <div className="pb-10">
        <FadeImg className="w-full h-auto my-5" src={blog.blogImage} />
        <h1 className={cn(`${styles.pageHeadText} font-poppins font-bold`)}>
          {blog.title}
        </h1>
        {blog.tags.map((tag, index) => (
          <span
            key={'tag' + index}
            className="text-sm text-primary-purple font-medium mx-2"
          >
            {capitalizeFirstLetter(tag.name)}
          </span>
        ))}
      </div>
      <SparkleSpaceEffect />
      <div className="relative -top-20 max-w-3xl mx-auto">
        <div className="whitespace-pre-line font-poppins text-xl font-normal ">
          {blog.description}
        </div>
      </div>
    </section>
  )
}
function SparkleSpaceEffect() {
  return (
    <div className="!relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="!w-full h-40">
        {/* Gradients */}
        <div className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
        <div className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
        <div className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-[#050816] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  )
}
export default Page
