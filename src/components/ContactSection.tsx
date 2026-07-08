import { Github, Linkedin, Code2, Mail, FileDown } from 'lucide-react'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import { profile } from '../data/content'

const links = [
  { label: 'GitHub', href: profile.github, Icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, Icon: Linkedin },
  { label: 'LeetCode', href: profile.leetcode, Icon: Code2 },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

export default function ContactSection() {
  return (
    <section id="contact" className="px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36" style={{ background: '#0C0C0C' }}>
      <FadeIn className="flex flex-col items-center gap-8 sm:gap-10 text-center">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
        <p className="text-[#D7E2EA]/70 font-light max-w-xl text-sm sm:text-base leading-relaxed">
          Open to full-time Software Engineering roles. Reach out and let&apos;s build something
          real together.
        </p>

        <ContactButton label="Email Me" href={`mailto:${profile.email}`} />

        <a
          href={`${import.meta.env.BASE_URL}Harsh_Nagar_Resume.pdf`}
          download
          className="inline-flex items-center gap-2 text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm hover:opacity-70 transition-opacity duration-200"
        >
          <FileDown size={16} />
          Download Resume
        </a>

        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors duration-200"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="mt-20 sm:mt-24 flex flex-col sm:flex-row justify-between items-center gap-2 text-[#D7E2EA]/40 text-xs uppercase tracking-widest">
        <span>{profile.name}</span>
        <span>Haridwar, Uttarakhand, India</span>
      </div>
    </section>
  )
}
