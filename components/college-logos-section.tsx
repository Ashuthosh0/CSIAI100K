"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const collegeLogos = [
  { id: 1, name: "ICFAI University", logo: "/icfai.png" },
  { id: 2, name: "Osmania University", logo: "/osmania.png" },
  { id: 3, name: "JNTU", logo: "/jntu.png" },
  { id: 4, name: "CMR College", logo: "/cmr.png" },
  { id: 5, name: "SRU", logo: "/sru.png" },
  { id: 6, name: "GNI", logo: "/gni.png" },
  { id: 7, name: "St. Peter's College", logo: "/stpeter.png" },
  { id: 8, name: "MVSR Engineering College", logo: "/mvsr.png" },
  { id: 9, name: "SPHN", logo: "/sphn.png" },
]

export function CollegeLogosSection() {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-black/80 mb-2">
            Partner Colleges
          </h2>
          <p className="text-sm text-black/60">
            Collaborating with leading educational institutions across India
          </p>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Scrolling logos */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -100 * collegeLogos.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {collegeLogos.map((college) => (
                <div
                  key={college.id}
                  className="flex-shrink-0 w-24 h-16 flex items-center justify-center bg-white rounded-lg border border-black/10 hover:border-black/20 transition-colors duration-300"
                >
                  <Image
                    src={college.logo}
                    alt={college.name}
                    width={80}
                    height={50}
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {collegeLogos.map((college) => (
                <div
                  key={`duplicate-${college.id}`}
                  className="flex-shrink-0 w-24 h-16 flex items-center justify-center bg-white rounded-lg border border-black/10 hover:border-black/20 transition-colors duration-300"
                >
                  <Image
                    src={college.logo}
                    alt={college.name}
                    width={80}
                    height={50}
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}