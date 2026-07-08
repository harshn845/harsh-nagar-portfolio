import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'
import { heroDescription, profile } from '../data/content'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      {/* Availability badge */}
      <FadeIn delay={0.08} y={-10} className="flex justify-center mt-4 sm:mt-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/30 px-4 py-1.5 text-[0.65rem] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/80">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B600A8] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B600A8]" />
          </span>
          {profile.availability}
        </span>
      </FadeIn>

      {/* Heading */}
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[13.5vw]">
            Hi, I&apos;m Harsh
          </h1>
        </FadeIn>
      </div>

      {/* Hero portrait */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <FadeIn delay={0.6} y={30}>
          <div className="relative">
            <div
              className="absolute inset-0 blur-3xl opacity-40"
              style={{ background: 'radial-gradient(circle at 50% 40%, #7621B0 0%, transparent 65%)' }}
            />
            <img
              src={`${import.meta.env.BASE_URL}images/harsh-portrait.png`}
              alt="Harsh Nagar"
              className="relative w-full h-auto select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </FadeIn>
      </Magnet>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {heroDescription}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
