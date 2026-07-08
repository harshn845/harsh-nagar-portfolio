export const profile = {
  name: 'Harsh Nagar',
  role: 'Software Engineer · Java Developer · Backend Developer',
  email: 'harshn845@gmail.com',
  phone: '+91 7819981941',
  location: 'Haridwar, UK, India',
  github: 'https://github.com/harshn845',
  linkedin: 'https://www.linkedin.com/in/harsh-nagar-012bb3307/',
  leetcode: 'https://leetcode.com/u/Harsh_Nagar25/',
  availability: 'Available for Full-Time Software Engineering Opportunities · 2026 Graduate',
}

export const heroDescription =
  'A software engineer passionate about building scalable backend systems, AI-powered applications, and impactful digital experiences.'

export const aboutText =
  "I'm a Computer Science student graduating in 2026 with a CGPA of 8.02, specializing in Java, Spring Boot, REST APIs, and backend development. My internships at BHEL and Edunet Foundation gave me hands-on experience shipping enterprise payroll systems and AI-powered conversational tools. I care about clean data structures, thoughtful problem solving, and building real-world software that holds up under real use. Let's build something incredible together!"

// Two marquee rows of technologies — mirrors the original 21-tile, two-row scroll
export const techRow1 = [
  'Java',
  'Spring Boot',
  'REST APIs',
  'MySQL',
  'SQL',
  'Git',
  'GitHub',
  'Postman',
  'Data Structures',
  'OOP',
  'Multithreading',
]

export const techRow2 = [
  'Python',
  'OpenCV',
  'FaceNet',
  'Gemini API',
  'JavaScript',
  'HTML/CSS',
  'Design Patterns',
  'TDD',
  'VS Code',
  'PyCharm',
]

export const aboutDecorations = [
  { key: 'code', label: 'Java · OOP' },
  { key: 'database', label: 'MySQL · SQL' },
  { key: 'brain', label: 'AI / ML' },
  { key: 'terminal', label: 'REST APIs' },
]

export const services = [
  {
    number: '01',
    name: 'Java Development',
    description:
      'Building robust, well-structured applications in Java, applying OOP principles, design patterns, and multithreading for reliable, maintainable code.',
  },
  {
    number: '02',
    name: 'Backend Development',
    description:
      'Designing and implementing backend systems with Spring Boot, handling business logic, data flow, and integrations that scale with real usage.',
  },
  {
    number: '03',
    name: 'AI & Machine Learning',
    description:
      'Applying deep learning and computer vision techniques, from CNN-based face recognition to LLM-powered content generation, to solve practical problems.',
  },
  {
    number: '04',
    name: 'API Development',
    description:
      'Architecting RESTful APIs with clear contracts and proper HTTP semantics, integrating external services like Gemini API for AI-powered features.',
  },
  {
    number: '05',
    name: 'Problem Solving',
    description:
      'Approaching challenges with strong data structures and algorithms fundamentals — 5-star rated on HackerRank, 90+ problems solved on LeetCode.',
  },
]

export interface ProjectData {
  number: string
  category: string
  name: string
  description: string
  tags: string[]
  liveHref: string
  icon: 'mail' | 'scan-face' | 'gamepad'
  accent: string
}

export const projects: ProjectData[] = [
  {
    number: '01',
    category: 'Backend · AI',
    name: 'Smart Email Assistant',
    description:
      'An AI-powered email generator built with Spring Boot and the Gemini API. Optimized API call performance and designed RESTful endpoints across GET, POST, PUT and DELETE.',
    tags: ['Java', 'Spring Boot', 'Gemini API', 'REST APIs', 'Postman'],
    liveHref: 'https://github.com/harshn845',
    icon: 'mail',
    accent: '#7621B0',
  },
  {
    number: '02',
    category: 'AI / Computer Vision',
    name: 'AI Campus Security Face Recognition',
    description:
      'A CNN-based deep learning face recognition system using FaceNet and OpenCV, boosting campus security through feature extraction and classification.',
    tags: ['Python', 'OpenCV', 'FaceNet', 'Deep Learning'],
    liveHref: 'https://github.com/harshn845',
    icon: 'scan-face',
    accent: '#B600A8',
  },
  {
    number: '03',
    category: 'Java · OOP',
    name: 'PacMan Game',
    description:
      'A classic PacMan game built in Java Swing with full player movement, collision handling, and ghost AI using pathfinding algorithms across multiple difficulty levels.',
    tags: ['Java', 'Java Swing', 'OOP', 'Game Loops'],
    liveHref: 'https://github.com/harshn845',
    icon: 'gamepad',
    accent: '#BE4C00',
  },
]
