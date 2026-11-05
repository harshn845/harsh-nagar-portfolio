import { Briefcase, GraduationCap, Award, Trophy, CheckCircle2 } from 'lucide-react'
import FadeIn from './FadeIn'
import {
  experiences,
  educationData,
  certifications,
  achievements,
} from '../data/content'

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-16"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col gap-14 sm:gap-20">
        {/* Work Experience */}
        <div>
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(182,0,168,0.2) 0%, rgba(118,33,176,0.2) 100%)',
                  border: '1px solid rgba(215,226,234,0.15)',
                }}
              >
                <Briefcase size={20} color="#D7E2EA" />
              </div>
              <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-lg sm:text-xl md:text-2xl">
                Work Experience
              </h3>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={0.15 + i * 0.1}>
                <div
                  className="rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(160deg, rgba(215,226,234,0.05) 0%, rgba(12,12,12,0.6) 100%)',
                    border: '1px solid rgba(215,226,234,0.16)',
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-6">
                    <div>
                      <span className="inline-block text-[#B600A8] uppercase tracking-widest text-xs font-semibold mb-1">
                        {exp.project || 'Backend Engineering'}
                      </span>
                      <h4 className="text-[#D7E2EA] font-medium text-xl sm:text-2xl md:text-3xl">
                        {exp.role}
                      </h4>
                      <p className="text-[#D7E2EA]/70 font-light text-base sm:text-lg mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-3 mb-8">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#D7E2EA]/80 font-light text-sm sm:text-base leading-relaxed">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#B600A8]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#D7E2EA]/10">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[0.65rem] sm:text-xs uppercase tracking-wide text-[#D7E2EA]/80 border border-[#D7E2EA]/20 rounded-full px-3 py-1 bg-[#D7E2EA]/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Education & Coursework */}
        <div>
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(118,33,176,0.2) 0%, rgba(190,76,0,0.2) 100%)',
                  border: '1px solid rgba(215,226,234,0.15)',
                }}
              >
                <GraduationCap size={20} color="#D7E2EA" />
              </div>
              <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-lg sm:text-xl md:text-2xl">
                Education
              </h3>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div
              className="rounded-3xl p-6 sm:p-8 md:p-10"
              style={{
                background: 'linear-gradient(160deg, rgba(215,226,234,0.05) 0%, rgba(12,12,12,0.6) 100%)',
                border: '1px solid rgba(215,226,234,0.16)',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-[#D7E2EA] font-medium text-xl sm:text-2xl">
                    {educationData.degree}
                  </h4>
                  <p className="text-[#D7E2EA]/70 font-light text-base sm:text-lg mt-1">
                    {educationData.institution} · {educationData.location}
                  </p>
                </div>
                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2">
                  <span className="inline-flex items-center rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-xs uppercase tracking-widest text-[#D7E2EA]">
                    Graduation: {educationData.graduation}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-[#B600A8]/20 border border-[#B600A8]/50 px-3 py-1 text-xs uppercase tracking-widest text-[#D7E2EA] font-semibold">
                    CGPA: {educationData.cgpa}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs mb-3 font-medium">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-[0.7rem] sm:text-xs text-[#D7E2EA]/85 border border-[#D7E2EA]/20 rounded-full px-3 py-1 bg-[#D7E2EA]/5"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Certifications & Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(182,0,168,0.2) 0%, rgba(118,33,176,0.2) 100%)',
                    border: '1px solid rgba(215,226,234,0.15)',
                  }}
                >
                  <Award size={20} color="#D7E2EA" />
                </div>
                <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-lg sm:text-xl">
                  Certifications
                </h3>
              </div>
            </FadeIn>

            <div className="flex flex-col gap-4">
              {certifications.map((cert, idx) => (
                <FadeIn key={cert.title} delay={0.15 + idx * 0.08}>
                  <div
                    className="rounded-2xl p-5 flex flex-col gap-2 transition-transform duration-200 hover:translate-x-1"
                    style={{
                      background: 'linear-gradient(160deg, rgba(215,226,234,0.04) 0%, rgba(12,12,12,0.5) 100%)',
                      border: '1px solid rgba(215,226,234,0.12)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-[#D7E2EA] font-medium text-base sm:text-lg leading-snug">
                        {cert.title}
                      </h4>
                      {cert.badge && (
                        <span className="text-[0.6rem] uppercase tracking-wider text-[#D7E2EA]/60 border border-[#D7E2EA]/20 rounded-full px-2 py-0.5 whitespace-nowrap">
                          {cert.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(190,76,0,0.2) 0%, rgba(182,0,168,0.2) 100%)',
                    border: '1px solid rgba(215,226,234,0.15)',
                  }}
                >
                  <Trophy size={20} color="#D7E2EA" />
                </div>
                <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-lg sm:text-xl">
                  Achievements & Activities
                </h3>
              </div>
            </FadeIn>

            <div className="flex flex-col gap-4">
              {achievements.map((item, idx) => (
                <FadeIn key={idx} delay={0.15 + idx * 0.08}>
                  <div
                    className="rounded-2xl p-5 flex items-start gap-3.5 transition-transform duration-200 hover:translate-x-1"
                    style={{
                      background: 'linear-gradient(160deg, rgba(215,226,234,0.04) 0%, rgba(12,12,12,0.5) 100%)',
                      border: '1px solid rgba(215,226,234,0.12)',
                    }}
                  >
                    <CheckCircle2 size={18} className="text-[#B600A8] flex-shrink-0 mt-0.5" />
                    <p className="text-[#D7E2EA]/85 font-light text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
