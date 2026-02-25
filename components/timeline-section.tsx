"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

type TimelineItem = {
  date: string
  fullDate: string
  title: string
  description: string
  images?: string[]
  stats?: string
  height?: string
  bullets?: string[]
}

const timelineData: TimelineItem[] = [
  {
    date: "Nov 2025",
    fullDate: "November 2025",
    title: "Program Launch",
    description:
      "Official launch of CSI AI100K program with nationwide registration opening. This marks the beginning of India's largest AI readiness initiative, bringing together educational institutions, industry partners, and government support.",
    images: [
      "/launch.jpg",
      "/csibanner.jpeg",
    ],
    stats: "10,000+ registrations",
    height: "120vh",
    bullets: ["Nationwide registration opens", "Partnership announcements", "Media coverage begins", "Initial cohort selection"],
  },
  {
    date: "Dec 2025",
    fullDate: "December 2025",
    title: "Telangana Rising Global Summit 2025",
    description:
      "AI fundamentals and core concepts training begins for the first cohort of learners. Comprehensive curriculum covering machine learning basics, mathematics, and practical applications with expert instructors.",
    images: [
      "/dec/summit2.jpeg",
      "/dec/summit3.jpeg",
      "/dec/summit4.jpeg",
      "/hero2.png"
    ],

    height: "140vh",
    bullets: ["Core ML concepts", "Mathematics refreshers", "Weekly labs and quizzes", "Peer learning groups", "Expert mentorship sessions"],
  },
  {
    date: "Jan 2026",
    fullDate: "January 2026",
    title: "AI 100K Program at multiple institutions",
    description:
      "Hands-on projects and real-world AI applications development phase starts. Students work on industry-relevant projects with mentorship from leading AI practitioners and build comprehensive portfolios.",
    images: [
      "/jan/icfai.jpeg",
      "/jan/jntu.jpeg",
      "/jan/mgit.jpeg",
      // "/jan/sru.jpeg",
      "/jan/vbit.jpeg",
    ],
    stats: "milestone",
    height: "130vh",
    bullets: ["Real-world project assignments", "Industry mentor guidance", "Portfolio development", "Technical skill assessments", "Team collaboration projects"],
  },
  {
    date: "Feb 2026",
    fullDate: "Febraury 2026",
    title: "50,000+ Students AI Ready",
    description:
      "Partnership with leading companies for internships and placement opportunities. Direct connection between learners and industry requirements through networking events and job fairs.",
    images: [
      "/feb/bvrit.jpg",
      "/feb/mvsr.jpg",
      "/feb/nrsm.jpg",
      "/feb/vasavi.jpg",
    ],
    stats: "200+ partner companies",
    height: "110vh",
    bullets: ["Company partnerships", "Internship programs", "Job placement drives", "Industry networking events"],
  },
  {
    date: "Mar 2026",
    fullDate: "March 2026",
    title: "Mega Event",
    description:
      "coming soon...",
    // images: [
    //   "/professional-indian-female-academic-portrait.jpg",
    //   "/indian-male-startup-cto-portrait.jpg",
    //   "/indian-female-data-scientist-portrait.jpg",
    // ],
    // stats: "75,000+ certified",
    height: "125vh",
    bullets: ["Comprehensive final assessments", "Industry-recognized CSI certification", "Career guidance sessions", "Alumni network access"],
  },
  // {
  //   date: "Mar 2026",
  //   fullDate: "March 2026",
  //   title: "Mission Complete",
  //   description:
  //     "Achievement of 100,000+ AI-ready professionals contributing to Bharat's digital future. Celebrating the success of India's largest AI readiness program and planning for future initiatives.",
  //   images: ["/indian-male-startup-cto-portrait.jpg", "/modern-conference-room-with-ai-presentation-screen.jpg"],
  //   stats: "100,000+ AI-ready professionals",
  //   height: "100vh",
  //   bullets: ["Mission accomplished", "100K+ certified professionals", "Industry impact assessment", "Future program planning"],
  // },
]

function useActiveIndexByIntersection(count: number) {
  const [active, setActive] = useState(0)
  const itemRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const els = itemRefs.current.filter(Boolean) as HTMLElement[]
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]

        if (!visible) return
        const idx = els.findIndex((el) => el === visible.target)
        if (idx !== -1) setActive(idx)
      },
      {
        root: null,
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
        rootMargin: "-30% 0px -30% 0px",
      }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [count])

  return { active, itemRefs }
}

export function TimelineSectionModern({
  data = timelineData,
  heading = "Milestones",
  subheading = "Milestones that build momentum",
}: {
  data?: TimelineItem[]
  heading?: string
  subheading?: string
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { active, itemRefs } = useActiveIndexByIntersection(data.length)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30 })
  const lineScaleY = useTransform(progress, [0, 1], [0, 1])
  const dotY = useTransform(progress, [0, 1], ["0%", "100%"])

  const activeItem = data[active]

  return (
    <section ref={sectionRef} className="bg-white text-black">
      {/* Top intro (bigger + centered) */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-3 text-base md:text-lg text-black/60">{subheading}</p>
        </div>
      </div>

      {/* Main timeline layout */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-8">
          {/* LEFT: Smaller month, moved towards left-center */}
          <div className="col-span-12 md:col-span-2">
            <div className="md:sticky md:top-24 md:h-[calc(100vh-6rem)] flex items-center">
              <div className="w-full text-center md:text-right pr-6 lg:pr-10">
                <motion.div
                  key={activeItem?.fullDate}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="select-none"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-black">
                    {activeItem?.fullDate}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* CENTER: Vertical line with moving dot */}
          <div className="hidden md:block md:col-span-1">
            <div className="md:sticky md:top-24 md:h-[calc(100vh-6rem)] flex items-center justify-center">
              <div className="relative h-[75vh] w-[3px] bg-black/10 rounded-full overflow-hidden">
                <motion.div
                  style={{ scaleY: lineScaleY, transformOrigin: "top" }}
                  className="absolute inset-x-0 top-0 h-full bg-black/70 rounded-full"
                />
                <motion.div
                  style={{ top: dotY }}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-black shadow-[0_0_0_8px_rgba(255,255,255,1),0_0_0_10px_rgba(0,0,0,0.1)]"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Flexible content */}
          <div className="col-span-12 md:col-span-9 pb-24">
            <div className="space-y-2">
              {data.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      itemRefs.current[idx] = el
                    }}
                    style={{ minHeight: item.height ?? "100vh" }}
                    className="flex items-center"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ amount: 0.3, once: true }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full space-y-8"
                    >
                      {/* Title and Description */}
                      <div className="space-y-6">
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-4">
                            {item.title}
                          </h3>
                          <p className="text-base md:text-lg text-black/70 leading-relaxed">{item.description}</p>
                        </div>

                        {/* Stats */}
                        {item.stats && (
                          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/5 border border-black/10">
                            <span className="relative flex h-3 w-3">
                              <span className="absolute inline-flex h-full w-full rounded-full bg-black/40 animate-ping" />
                              <span className="relative inline-flex h-3 w-3 rounded-full bg-black/70" />
                            </span>
                            <span className="text-base font-semibold text-black/80">{item.stats}</span>
                          </div>
                        )}
                      </div>

                      {/* Images */}
                      {item.images?.length ? (
                        <div className="space-y-6">
                          <div
                            className={[
                              "grid gap-4",
                              item.images.length === 1
                                ? "grid-cols-1"
                                : item.images.length === 2
                                  ? "grid-cols-1 lg:grid-cols-2"
                                  : item.images.length === 3
                                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                                    : item.images.length === 4
                                      ? "grid-cols-2 lg:grid-cols-4"
                                      : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                            ].join(" ")}
                          >
                            {item.images.map((src, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ amount: 0.3, once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={[
                                  "relative rounded-2xl overflow-hidden bg-black/5",
                                  item.images?.length === 1 ? "aspect-[16/9]" : item.images?.length === 2 ? "aspect-[4/3]" : "aspect-square",
                                ].join(" ")}
                              >
                                <Image
                                  src={src}
                                  alt={`${item.title} ${i + 1}`}
                                  fill
                                  className="object-cover hover:scale-105 transition-transform duration-500"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {/* Bullets */}
                      {item.bullets?.length ? (
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-black/80">Key Highlights</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {item.bullets.map((bullet, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ amount: 0.3, once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-black/[0.02] border border-black/5"
                              >
                                <span className="mt-2 h-2 w-2 rounded-full bg-black/60 shrink-0" />
                                <span className="text-base text-black/70 leading-relaxed">{bullet}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
