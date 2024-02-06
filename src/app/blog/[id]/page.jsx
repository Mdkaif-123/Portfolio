import FadeImg from '@/components/core/FadeImg'
import { Blogs } from '@/constants'
import { capitalizeFirstLetter, cn } from '@/lib/utils'
import { styles } from '@/styles/style'

function page({ params }) {
  const blogId = params.id

  const blog = Blogs.reduce((item) => blogId === item.id)
  if (!blog) return null
  return (
    <section className={`${styles.padding} mx-auto max-w-7xl pt-20 md:pt-24`}>
      <div className="border-b border-b-gray-200 pb-10">
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
      <div className="py-11 max-w-3xl mx-auto">
        <div className="whitespace-pre-line font-poppins text-xl font-normal ">
          {blog.description}
        </div>
      </div>
    </section>
  )
}

export default page
