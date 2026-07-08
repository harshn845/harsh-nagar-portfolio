import { Code2, Database, BrainCircuit, Terminal } from 'lucide-react'
import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'
import { aboutText } from '../data/content'

function DecoIcon({
  Icon,
  label,
  className,
}: {
  Icon: typeof Code2
  label: string
  className: string
}) {
  return (
    <div className={`absolute hidden sm:flex flex-col items-center gap-3 ${className}`}>
      <div
        className="w-[100px] sm:w-[130px] md:w-[160px] aspect-square rounded-3xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(160deg, rgba(215,226,234,0.08) 0%, rgba(12,12,12,0.3) 100%)',
          border: '1px solid rgba(215,226,234,0.16)',
        }}
      >
        <Icon size={48} color="#D7E2EA" strokeWidth={1.5} />
      </div>
      <span className="text-[#D7E2EA]/60 text-[0.65rem] uppercase tracking-widest">{label}</span>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
        <DecoIcon Icon={Code2} label="Java · OOP" className="top-[4%] left-[1%] sm:left-[2%] md:left-[4%]" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
        <DecoIcon
          Icon={Database}
          label="MySQL · SQL"
          className="bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
        />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
        <DecoIcon Icon={BrainCircuit} label="AI / ML" className="top-[4%] right-[1%] sm:right-[2%] md:right-[4%]" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
        <DecoIcon
          Icon={Terminal}
          label="REST APIs"
          className="bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
        />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={aboutText}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24">
        <ContactButton />
      </div>
    </section>
  )
}
