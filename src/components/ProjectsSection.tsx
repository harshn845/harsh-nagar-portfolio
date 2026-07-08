import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, ScanFace, Gamepad2 } from 'lucide-react'
import FadeIn from './FadeIn'
import LiveProjectButton from './LiveProjectButton'
import { projects, type ProjectData } from '../data/content'

const icons = { mail: Mail, 'scan-face': ScanFace, gamepad: Gamepad2 }

function VisualTile({
  project,
  variant,
}: {
  project: ProjectData
  variant: 'top' | 'bottom' | 'tall'
}) {
  const Icon = icons[project.icon]
  const heights: Record<typeof variant, string> = {
    top: 'clamp(130px, 16vw, 230px)',
    bottom: 'clamp(160px, 22vw, 340px)',
    tall: '100%',
  }
  return (
    <div
      className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex items-center justify-center overflow-hidden"
      style={{
        height: heights[variant],
        background: `linear-gradient(150deg, ${project.accent}33 0%, #0C0C0C 100%)`,
        border: '1px solid rgba(215,226,234,0.15)',
      }}
    >
      <Icon size={variant === 'tall' ? 72 : 44} color="#D7E2EA" strokeWidth={1.25} />
    </div>
  )
}

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: ProjectData
  index: number
  totalCards: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  })
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.div
        style={{ scale, background: '#0C0C0C' }}
        className="relative h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col gap-6"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black leading-none"
              style={{ color: '#D7E2EA', fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.liveHref} />
        </div>

        {/* Description + tags */}
        <p className="text-[#D7E2EA]/70 font-light max-w-2xl text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.65rem] sm:text-xs uppercase tracking-wide text-[#D7E2EA]/80 border border-[#D7E2EA]/25 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom row: image grid */}
        <div className="flex-1 flex gap-3 min-h-0">
          <div className="w-[40%] flex flex-col gap-3">
            <VisualTile project={project} variant="top" />
            <VisualTile project={project} variant="bottom" />
          </div>
          <div className="w-[60%]">
            <VisualTile project={project} variant="tall" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const totalCards = projects.length

  return (
    <section
      id="projects"
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Projects
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} totalCards={totalCards} />
        ))}
      </div>
    </section>
  )
}
