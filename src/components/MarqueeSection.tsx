import { useEffect, useRef, useState } from 'react'
import { techRow1, techRow2 } from '../data/content'

function Tile({ label }: { label: string }) {
  return (
    <div
      className="flex-shrink-0 h-[110px] sm:h-[140px] px-8 sm:px-10 flex items-center justify-center rounded-2xl"
      style={{
        width: 260,
        background: 'linear-gradient(160deg, rgba(215,226,234,0.06) 0%, rgba(12,12,12,0.2) 100%)',
        border: '1px solid rgba(215,226,234,0.14)',
      }}
    >
      <span className="text-[#D7E2EA] font-medium uppercase tracking-wide text-base sm:text-lg text-center whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(value)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const row1 = [...techRow1, ...techRow1, ...techRow1]
  const row2 = [...techRow2, ...techRow2, ...techRow2]

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {row1.map((label, i) => (
            <Tile key={`r1-${i}`} label={label} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {row2.map((label, i) => (
            <Tile key={`r2-${i}`} label={label} />
          ))}
        </div>
      </div>
    </section>
  )
}
