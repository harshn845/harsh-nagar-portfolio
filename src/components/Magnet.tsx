import { useRef, useState, type ReactNode, type CSSProperties } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
  style?: CSSProperties
}

export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  style,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const withinX = e.clientX > rect.left - padding && e.clientX < rect.right + padding
    const withinY = e.clientY > rect.top - padding && e.clientY < rect.bottom + padding

    if (withinX && withinY) {
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      setActive(true)
      setTranslate({ x: dx / strength, y: dy / strength })
    } else if (active) {
      setActive(false)
      setTranslate({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    setActive(false)
    setTranslate({ x: 0, y: 0 })
  }

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
