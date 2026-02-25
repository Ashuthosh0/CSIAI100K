"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Award, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const carouselImages = [
  {
    id: 1,
    src: "/hero1.jpeg",
    alt: "Hero Image 1"
  },
  {
    id: 2,
    src: "/hero2.png",
    alt: "Hero Image 2"
  },
  {
    id: 3,
    src: "/hero3.png",
    alt: "Hero Image 3"
  }

]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? carouselImages.length - 1 : currentImageIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === carouselImages.length - 1 ? 0 : currentImageIndex + 1
    )
  }

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={carouselImages[currentImageIndex].src}
              alt={carouselImages[currentImageIndex].alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Carousel Navigation */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
              ? "bg-white scale-110"
              : "bg-white/50 hover:bg-white/70"
              }`}
          />
        ))}
      </div>

      {/* Left Bottom Corner Content - Telangana 2047 Style */}
      <div className="absolute bottom-16 left-12 z-20 max-w-2xl">
        <div className="space-y-1">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-normal text-white leading-none tracking-wide uppercase"
            style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.15em' }}>
            CSI AI
          </h1>

          {/* Large Number with Geometric Element */}
          <div className="flex items-center gap-6 mt-2">
            <div className="text-8xl md:text-9xl font-bold text-white leading-none"
              style={{ fontFamily: 'Arial, sans-serif' }}>
              100K
            </div>

          </div>

          {/* Subtitle */}
          <div className="mt-4 space-y-1">
            <p className="text-lg md:text-xl text-white font-normal"
              style={{ fontFamily: 'Arial, sans-serif' }}>
              Make Bharat AI ready by 2026
            </p>
            <p className="text-lg md:text-xl text-white font-normal"
              style={{ fontFamily: 'Arial, sans-serif' }}>
              World's largest AI readiness initiative
            </p>
          </div>
        </div>
      </div>

      {/* Right Bottom Corner Button - Telangana Style */}
      <div className="absolute bottom-16 right-12 z-20">
        <Button
          variant="outline"
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-base px-8 py-3 rounded-full font-normal transition-all duration-300"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Explore program →
        </Button>
      </div>
    </section>
  )
}
