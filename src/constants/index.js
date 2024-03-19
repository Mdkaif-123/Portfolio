import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextJs,
  reactQuery,
  zudstand,
  azure,
} from '../../public/assets'

export const APP_NAME = 'Md Kaif | Portfolio'

export const APP_DESCRIPTION =
  "As a passionate Full Stack Developer, I bring expertise in a variety of technologies, including JavaScript, React, Node.js, and more. With hands-on experience in crafting innovative and seamless web solutions, my portfolio showcases a diverse range of projects that demonstrate my skills and commitment to excellence. Explore the intersection of creativity and technology through my work and discover how I can contribute to your projects. Let's connect and explore the possibilities together!"

export const ABOUT_DESCRIPTION = `At 18, I'm not just navigating the world of technology; I'm actively
shaping it. With an internship in backend development under my belt
and currently thriving as a Full Stack Developer, I bring a youthful
passion coupled with profound proficiency. Eager to learn and
contribute, I'm excited about the journey ahead, committed to making
impactful strides in every project and organization I delve into.`

export const RESUME_URL =
  'https://drive.google.com/file/d/1NZ6QFC1u73R6hcvXwYNw0xMa8y6yI7Ch/view?usp=sharing'

export const navLinks = [
  {
    id: 'project',
    href: '/projects',
    title: 'Project',
  },
  {
    id: 'blog',
    href: '/blogs',
    title: 'Blog',
  },
  {
    id: 'contact',
    href: '/#contact',
    title: 'Contact',
  },
]
export const mobNavLinks = [
  {
    id: 'home',
    href: '/',
    title: 'Home',
  },
  {
    id: 'project',
    href: '/projects',
    title: 'Project',
  },
  {
    id: 'blog',
    href: '/blogs',
    title: 'Blog',
  },
  {
    id: 'contact',
    href: '#contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'next',
    icon: nextJs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'react-quey',
    icon: reactQuery,
  },
  {
    name: 'zudstand',
    icon: zudstand,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'azure',
    icon: azure,
  },
]

const experiences = [
  {
    title: 'Backend developer',
    company_name: 'Namlsoft',
    icon: './assets/namlsoftLogo.png',
    companyWebsite: 'https://namlsoft.com/',
    iconBg: '#f6f6f6',
    date: 'June 2023 - October 2023',
    points: [
      `Revolutionize customer reach: Propel your company's website with a cutting-
      edge contact service leveraging SMTP email, resulting in an incredible 80%
      increase in customer engagement`,
      `Developed the end-to-end integration backend of mechanic-online application,
      responsible for over 90% of all API services`,
      `Boosted company profits 2x by launching "Mechanic Online" platform, connecting customers with mechanics instantly using real-time geolocation`,
    ],
    link: 'https://namlsoft.com/',
  },
  {
    title: 'Fullstack developer',
    company_name: 'OptiwiseIT',
    icon: './assets/optiwiseLogo.png',
    iconBg: '#181c21',
    companyWebsite: 'https://optiwiseit.com/',
    date: 'Oct 2023 - Feb 2024',
    points: [
      `Enhanced ListingInk Backend: Led microservices development using Azure,
      achieving a 40% boost in AI-generated content productivity`,
      `Revolutionized UI with Next.js: Innovated responsive interfaces, resulting in a
      30% user experience improvement`,
      `AI Content Generator Development: Collaboratively engineered a multi-format
      AI content generation tool, increasing production efficiency by 50%`,
    ],
  },
  {
    title: 'Fullstack developer',
    company_name: 'Catalyst Group',
    icon: './assets/catalyst-group.svg',
    iconBg: '#181c21',
    className: '!size-9',
    companyWebsite: 'https://www.catalystgroup.solutions/',
    date: 'Feb 2023 - Present',
    points: [
      `Led a team to develop TradeOxy, an AI-driven trading platform, using Next.js for a better user interface.`,
      `Created an AI tender proposal generator using OpenAI and microservices for a SaaS project.`,
      `Built a Q&A web system that lets admins create questions and generate PDF reports based on user input.`,
    ],
  },
]

const projects = [
  {
    title: 'Thread Clone',
    tags: [
      {
        name: 'Next.js',
      },
      {
        name: 'Tailwind',
      },
      {
        name: 'Clerk',
      },
      {
        name: 'MongoDB',
      },
    ],
    hoverImage:
      'https://plus.unsplash.com/premium_photo-1683402693577-035defb30159?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRocmVhZHMlMjBhcHB8ZW58MHx8MHx8fDA%3D',
    source_code_link: 'https://thread-clone-mauve.vercel.app/',
  },
  {
    title: 'AI Scribe',
    tags: [
      {
        name: 'React.js',
      },
      {
        name: 'Open AI API',
      },
      {
        name: 'MongoDB',
      },
      {
        name: 'Redux',
      },
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpJTIwYXBwfGVufDB8fDB8fHww',
    source_code_link: 'https://aiscribe-v7me.onrender.com/',
  },
  {
    title: 'Word Waves',
    tags: [
      {
        name: 'Node.js',
      },
      {
        name: 'Express',
      },
      {
        name: 'EJS',
      },
      {
        name: 'MongoDB',
      },
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D',
    source_code_link: 'https://word-waves.onrender.com/',
  },
  {
    title: 'Task Unity',
    tags: [
      {
        name: 'React',
      },
      {
        name: 'Redux',
      },
      {
        name: 'MongoDB',
      },
      {
        name: 'Chart.js',
      },
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D',
    source_code_link: 'https://task-unity.onrender.com/admin-login',
  },
  {
    title: 'MD Manager',
    tags: [
      {
        name: 'Node.js',
      },
      {
        name: 'EJS',
      },
      {
        name: 'SMTP',
      },
      {
        name: 'MongoDB',
      },
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuYWdlbWVudCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D',
    source_code_link: 'https://md-manager.onrender.com/Login',
  },
]

export const Blogs = [
  {
    id: 'blog_001',
    title: 'Habits of TOP 1% Developer',
    description: `I have some insights to share on achieving success as a developer. Although I am only 19 years old, I have accomplished significant results by following certain principles. These have helped put me ahead of over 99% of the people in my circle.

    📍 Maintain a checklist of things to do
    
    In life, we have many things to accomplish but often fail to attempt them or even forget about them. To help with this, we should maintain a checklist of todos or similar tasks, which will be highly beneficial in the long run.
    
    📍 Surround yourself with smart people
    
    As the saying goes, "It is not your environment, it is you." The quality of your mind, the integrity of your soul, and the determination of your will decide your future and shape your life. To achieve success, it's important to surround yourself with smart, like-minded people who can inspire and motivate you.
    
    📍 Get out of your comfort zone
    
    It's easy to live life on our terms, but it's much harder to lead a disciplined life with a consistent schedule. Most successful people follow a disciplined routine and dedicate 100% to their work without making excuses. Breaking out of your comfort zone means pushing your efforts to the breaking point.
    
    These are the insights that have worked for me so far. As a new member of the community, I welcome your constructive criticism, which will help me improve.`,
    tags: [
      {
        name: 'dev',
      },
      {
        name: 'programming',
      },
      {
        name: 'habbit',
      },
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1502465771179-51f3535da42c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsb2dzfGVufDB8fDB8fHww',
    blogImage:
      'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsltodf6tikd8srf6699k.jpg',
  },
  {
    id: 'blog_002',
    title: 'Building in public - A simple guide',
    description: `Building in public is a very peculiar concept that many people are not familiar with. However, by the end of this article, you will understand what "Building in public" means and how it can benefit you in the long term.

    What does building in public mean ?
    It involves sharing your thoughts, activities, practices, methods, and resources with the world regarding the development of your products or services. This allows others to benefit from your experiences and also gain insights from them.
    
    Getting insights is not just the goal of sharing your activity in public but sharing consistent content will lead to multiple opportunities out there.
    
    Here are some listed below :
    
    Recognition: Sharing your activities publicly can make you known as an enthusiastic individual passionate about technology, opening up opportunities for you.
    Brand Popularization: Generating excitement for upcoming products or MVP launches is crucial for creating a brand image, attracting attention, and introducing the product to potential supporters during the creation process.
    More Opportunities: Consistently updating platforms like Twitter and LinkedIn can put you in the spotlight for hiring managers, increasing your chances of getting more opportunities.
    Easy Referrals: Having a portfolio of your work available can make it easier for you to receive referrals.
    Expand Your Network: Building in public helps you connect with a wider range of people globally, leading to more opportunities.
    and many more..
    
    How can I start my own journey?
    Here are the steps on how you can begin your journey of building things in public.
    
    1. Set up your Social Media
    This step is quite obvious, but social media is the primary platform through which you can share your journey of building things. So, create an account on some popular social media platforms. You might wonder why you should share your personal information. Well, all hiring managers and company CEOs are present on these platforms, so having your account there can be a significant advantage.
    
    Twitter
    LinkedIn
    Discord
    Github
    2. Post / Share Content
    Just creating an account on social media is not sufficient; you should be very active by sharing posts or useful content that will benefit people worldwide.
    
    This could include:
    
    Sharing your experiences and learnings of using web technologies through blog posts or YouTube videos
    Sharing popular book summaries
    Discussing mistakes you made in the past
    Sharing insights on "How to contribute to open source"
    Documenting your project building process
    Sharing your insights about large open source projects
    3. Engage with the community
    Engaging with the community involves not only posting content but also interacting with others' posts, asking questions, commenting with your suggestions, and sharing your thoughts. This is how you will get noticed by people.
    
    You can also summarize content, add your perspective, and comment on posts. Consistently engaging with a specific person's posts will create a strong connection, and if you ask for help, they will likely be available to assist you.
    
    You can also engage in resolving issues within any organization. This can lead to recognition by the organization's mentor, and if you meet the organization's criteria, you might even receive an offer letter, although this is quite rare.
    
    NOTE: You contribution to open source should not be README update !
    
    You can make in even further by participating in any local meetups, events, fest or hackathons this is also help you expand you connection.
    
    4. Showcase your work
    This is the stage where people begin to notice you. Start sharing your projects and accomplishments on social media and other platforms.
    
    Whether it's personal projects, announcements, or blog posts, the goal is to establish your presence in the community.
    
    Keep in mind
    
    The larger your social media presence, the more opportunities you are likely to attract!
    
    Another strategy is to transform a blog post into a video tutorial or a video tutorial into short and engaging Tik Toks or reels. Aim to create a substantial amount of content.
    
    4. Develop a routine
    While it may be easy to create content or write a blog post occasionally, consistently posting and creating content can become monotonous. However, if you stop, you risk losing all the progress you have made so far.
    
    Strive to post once or twice a week. Establish a schedule and stick to it.
    
    We don't necessarily need a massive audience of thousands or millions; even a few hundred followers can be valuable. Make it a habit to create content whenever you have the opportunity, whether it's videos or other forms of content.`,
    tags: [
      {
        name: 'building in public',
      },
      {
        name: 'community engagement',
      },
      {
        name: 'personal branding',
      },
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1500049242364-5f500807cdd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd1aWRlfGVufDB8fDB8fHww',
    blogImage:
      'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqjsncxo0yl7e3bp6nmk9.png',
  },
]

export const SocialLinks = [
  {
    url: '',
    name: 'Github',
  },
  {
    url: '',
    name: 'LinkedIn',
  },
  {
    url: '',
    name: 'Twitter',
  },
  {
    url: '',
    name: 'Youtube',
  },
]

export { services, technologies, experiences, projects }
