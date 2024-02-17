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
  redux,
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
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
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
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
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
    name: 'next',
    icon: nextJs,
  },
  {
    name: 'docker',
    icon: docker,
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
    date: 'Oct 2023 - Present',
    points: [
      `Enhanced ListingInk Backend: Led microservices development using Azure,
      achieving a 40% boost in AI-generated content productivity`,
      `Revolutionized UI with Next.js: Innovated responsive interfaces, resulting in a
      30% user experience improvement`,
      `AI Content Generator Development: Collaboratively engineered a multi-format
      AI content generation tool, increasing production efficiency by 50%`,
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
    id: 'blog12127813',
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
