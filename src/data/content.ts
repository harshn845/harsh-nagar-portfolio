export const profile = {
  name: 'Harsh Nagar',
  role: 'Backend & Full-Stack Developer · Python & Java · AI Systems',
  email: 'harshn845@gmail.com',
  phone: '+91-7819981941',
  location: 'Haridwar, Uttarakhand, India',
  github: 'https://github.com/harshn845',
  linkedin: 'https://www.linkedin.com/in/harsh-nagar-012bb3307/',
  leetcode: 'https://leetcode.com/u/Harsh_Nagar25/',
  availability: 'Available for Full-Time Software Engineering Opportunities · 2026 Graduate',
}

export const heroDescription =
  'Backend and full-stack developer passionate about building scalable web platforms, robust REST APIs, and AI-powered intelligent systems.'

export const aboutText =
  "I'm a Computer Science student at CGC University, Mohali graduating in July 2026 with a CGPA of 8.02. With strong hands-on experience in Python, Django, Java, and Spring Boot, I build high-performance backend systems, REST APIs, and AI-powered applications. As a Backend Developer Contributor at Zynclave Tech (Vync), I contributed to core social media services using Django and Go. I care about clean architecture, scalable databases, and solving real-world engineering challenges."

// Two marquee rows of technologies — mirrors the original 21-tile, two-row scroll
export const techRow1 = [
  'Python',
  'Django',
  'FastAPI',
  'Java',
  'Spring Boot',
  'Go',
  'REST APIs',
  'MySQL',
  'SQL',
  'Docker',
  'Postman',
]

export const techRow2 = [
  'OpenAI SDK',
  'Gemini API',
  'OpenCV',
  'FaceNet',
  'C++',
  'Git',
  'GitHub',
  'Linux',
  'HTML5/CSS3',
  'Bootstrap',
  'VS Code',
]

export const aboutDecorations = [
  { key: 'code', label: 'Python · Django · Java' },
  { key: 'database', label: 'MySQL · SQL' },
  { key: 'brain', label: 'AI · OpenAI · Vision' },
  { key: 'terminal', label: 'REST APIs · Docker' },
]

export const services = [
  {
    number: '01',
    name: 'Backend Architecture & REST APIs',
    description:
      'Designing and developing scalable backend systems using Django, Spring Boot, FastAPI, and Go. Implementing robust RESTful endpoints with clean HTTP semantics and reliable database integration.',
  },
  {
    number: '02',
    name: 'AI & Computer Vision Engineering',
    description:
      'Building intelligent systems integrating LLMs via OpenAI SDK and Gemini API, along with computer vision pipelines using FaceNet embeddings and OpenCV for real-time facial recognition.',
  },
  {
    number: '03',
    name: 'Full-Stack & Web Development',
    description:
      'Engineering performant, responsive web applications leveraging Python, Java, MySQL, HTML5, CSS3, and Bootstrap for seamless end-to-end functionality from database queries to front-facing interfaces.',
  },
  {
    number: '04',
    name: 'DevOps & Modern Tooling',
    description:
      'Containerizing backend services with Docker, managing version control via Git & GitHub, conducting thorough API testing using Postman, and working proficiently across Linux and Windows.',
  },
  {
    number: '05',
    name: 'Data Structures & Algorithms',
    description:
      'Strong problem-solving foundation with 100+ Data Structures and Algorithms problems solved, solid understanding of OOP, DBMS, Operating Systems, and Computer Networks.',
  },
]

export interface ProjectData {
  number: string
  category: string
  name: string
  description: string
  tags: string[]
  liveHref: string
  icon: 'bot' | 'scan-face' | 'mail'
  accent: string
}

export const projects: ProjectData[] = [
  {
    number: '01',
    category: 'AI & Automation · Python',
    name: 'HX Agent',
    description:
      'Developed an AI-powered assistant using Python, FastAPI, and the OpenAI SDK. Implemented conversational workflows and task automation capabilities, designed with a modular architecture to support future tool integrations.',
    tags: ['Python', 'FastAPI', 'OpenAI SDK', 'AI Agent', 'Task Automation'],
    liveHref: 'https://github.com/harshn845',
    icon: 'bot',
    accent: '#7621B0',
  },
  {
    number: '02',
    category: 'Computer Vision · Deep Learning',
    name: 'Face Recognition System',
    description:
      'Developed a face recognition system using FaceNet embeddings and OpenCV. Implemented face detection, recognition, and identity matching workflows, with integrated database storage and retrieval for real-time recognition.',
    tags: ['Python', 'OpenCV', 'FaceNet', 'Computer Vision', 'MySQL'],
    liveHref: 'https://github.com/harshn845',
    icon: 'scan-face',
    accent: '#B600A8',
  },
  {
    number: '03',
    category: 'Backend · Generative AI',
    name: 'Smart Email Assistant',
    description:
      'Built an AI-powered email generator by integrating the Gemini API into a Spring Boot backend. Designed and implemented RESTful APIs (GET, POST, PUT, DELETE) tested via Postman, and optimized API performance for fast, reliable responses.',
    tags: ['Java', 'Spring Boot', 'Gemini API', 'REST APIs', 'Postman'],
    liveHref: 'https://github.com/harshn845',
    icon: 'mail',
    accent: '#BE4C00',
  },
]

export interface ExperienceItem {
  role: string
  company: string
  project?: string
  description: string[]
  technologies: string[]
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Backend Developer Contributor',
    company: 'Zynclave Tech Private Limited',
    project: 'Vync (Social Media Platform)',
    description: [
      'Contributed to backend development of a social media platform alongside the core development team.',
      'Worked with Django, Go, REST APIs, and database integration.',
      'Assisted in API design, feature development, debugging, and deployment-related tasks.',
    ],
    technologies: ['Django', 'Go', 'REST APIs', 'MySQL', 'Python', 'Docker'],
  },
]

export interface EducationData {
  institution: string
  location: string
  degree: string
  graduation: string
  cgpa: string
  coursework: string[]
}

export const educationData: EducationData = {
  institution: 'CGC University',
  location: 'Mohali, Punjab, India',
  degree: 'Bachelor of Technology in Computer Science',
  graduation: 'July 2026',
  cgpa: '8.02 / 10.0',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
  ],
}

export interface CertificationItem {
  title: string
  issuer: string
  badge?: string
}

export const certifications: CertificationItem[] = [
  {
    title: 'Foundation Course on AI Readiness',
    issuer: 'IICT & AI Skills House (in partnership with Google & YouTube)',
    badge: 'AI & Machine Learning',
  },
  {
    title: 'Young Turks (Certificate Of Merit)',
    issuer: 'HCLTech & Naukri Campus',
    badge: 'Excellence Merit',
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    badge: 'AI Engineering',
  },
  {
    title: 'MySQL',
    issuer: 'Kaggle',
    badge: 'Database & SQL',
  },
]

export const achievements: string[] = [
  'Solved 100+ Data Structures and Algorithms problems across competitive programming platforms.',
  'Participated in college hackathons and collaborative software development events.',
  'Developed multiple AI, backend, and full-stack projects available open-source on GitHub.',
]
