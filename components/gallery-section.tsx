"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Masonry from "react-masonry-css"
import { X, Menu } from "lucide-react"

type ImageData = {
  src: string
  alt: string
}

type EventData = {
  name: string
  displayName: string
  images: ImageData[]
}

// Define the events in the specified order
const eventOrder = ["aika", "governor", "summit", "ttt"]

const allEvents: EventData[] = [
  {
    name: "aika",
    displayName: "AIKA Cohort",
    images: [
      { src: "/csiai100k/aika/aika (1).jpeg", alt: "AIKA Event 1" },
      { src: "/csiai100k/aika/aika (2).jpeg", alt: "AIKA Event 2" },
      { src: "/csiai100k/aika/aika (3).jpeg", alt: "AIKA Event 3" },
      { src: "/csiai100k/aika/aika (4).jpeg", alt: "AIKA Event 4" },
      { src: "/csiai100k/aika/aika (5).jpeg", alt: "AIKA Event 5" },
    ],
  },
  {
    name: "governor",
    displayName: "Governor Meet",
    images: [
      { src: "/csiai100k/governor/gvr (1).png", alt: "Governor Event 1" },
      { src: "/csiai100k/governor/gvr (2).png", alt: "Governor Event 2" },
      { src: "/csiai100k/governor/gvr (3).png", alt: "Governor Event 3" },
      { src: "/csiai100k/governor/gvr (4).png", alt: "Governor Event 4" },
    ],
  },
  {
    name: "summit",
    displayName: "Telangana Rising Global Summit 2025",
    images: [
      { src: "/csiai100k/summit/summit (1).jpeg", alt: "Summit Event 1" },
      { src: "/csiai100k/summit/summit (5).jpeg", alt: "Summit Event 5" },
      { src: "/csiai100k/summit/summit (7).jpeg", alt: "Summit Event 7" },
      { src: "/csiai100k/summit/summit (8).jpeg", alt: "Summit Event 8" },
      { src: "/csiai100k/summit/summit.jpeg", alt: "Summit Event" },
    ],
  },
  {
    name: "ttt",
    displayName: "Train The Trainer Program",
    images: [
      { src: "/csiai100k/ttt/ttt (1).jpeg", alt: "TTT Event 1" },
      { src: "/csiai100k/ttt/ttt (2).jpeg", alt: "TTT Event 2" },
      { src: "/csiai100k/ttt/ttt (3).jpeg", alt: "TTT Event 3" },
      { src: "/csiai100k/ttt/ttt (4).jpeg", alt: "TTT Event 4" },
      { src: "/csiai100k/ttt/ttt (5).jpeg", alt: "TTT Event 5" },
      { src: "/csiai100k/ttt/ttt (6).jpeg", alt: "TTT Event 6" },
    ],
  },
  {
    name: "cmr",
    displayName: "AI 100K Program at CMR",
    images: [
      { src: "/csiai100k/cmr/cmr (1).jpg", alt: "CMR Event 1" },
      { src: "/csiai100k/cmr/cmr (2).jpg", alt: "CMR Event 2" },
      { src: "/csiai100k/cmr/cmr (3).jpg", alt: "CMR Event 3" },
    ],
  },
  {
    name: "icfai",
    displayName: "AI 100K Program at ICFAI",
    images: [
      { src: "/csiai100k/icfai/icfai (1).jpeg", alt: "ICFAI Event 1" },
      { src: "/csiai100k/icfai/icfai (2).jpeg", alt: "ICFAI Event 2" },
      { src: "/csiai100k/icfai/icfai (3).jpeg", alt: "ICFAI Event 3" },
      { src: "/csiai100k/icfai/icfai (4).jpeg", alt: "ICFAI Event 4" },
      { src: "/csiai100k/icfai/icfai (5).jpeg", alt: "ICFAI Event 5" },
      { src: "/csiai100k/icfai/icfai (6).jpeg", alt: "ICFAI Event 6" },
      { src: "/csiai100k/icfai/icfai (7).jpeg", alt: "ICFAI Event 7" },
    ],
  },
  {
    name: "jntu",
    displayName: "AI 100K Program at JNTU",
    images: [
      { src: "/csiai100k/jntu/jntu (1).jpeg", alt: "JNTU Event 1" },
      { src: "/csiai100k/jntu/jntu (2).jpeg", alt: "JNTU Event 2" },
      { src: "/csiai100k/jntu/jntu (3).jpeg", alt: "JNTU Event 3" },
      { src: "/csiai100k/jntu/jntu (4).jpeg", alt: "JNTU Event 4" },
      { src: "/csiai100k/jntu/jntu (5).jpeg", alt: "JNTU Event 5" },
      { src: "/csiai100k/jntu/jntu (6).jpeg", alt: "JNTU Event 6" },
      { src: "/csiai100k/jntu/jntu (7).jpeg", alt: "JNTU Event 7" },
    ],
  },
  {
    name: "mgit",
    displayName: "AI 100K Program at MGIT",
    images: [
      { src: "/csiai100k/mgit/mgit (1).jpeg", alt: "MGIT Event 1" },
      { src: "/csiai100k/mgit/mgit (2).jpeg", alt: "MGIT Event 2" },
      { src: "/csiai100k/mgit/mgit (3).jpeg", alt: "MGIT Event 3" },
      { src: "/csiai100k/mgit/mgit (4).jpeg", alt: "MGIT Event 4" },
      { src: "/csiai100k/mgit/mgit (5).jpeg", alt: "MGIT Event 5" },
    ],
  },
  {
    name: "mvsr",
    displayName: "AI 100K Program at MVSR",
    images: [
      { src: "/csiai100k/mvsr/mvsr (1).jpg", alt: "MVSR Event 1" },
      { src: "/csiai100k/mvsr/mvsr (2).jpg", alt: "MVSR Event 2" },
      { src: "/csiai100k/mvsr/mvsr (3).jpg", alt: "MVSR Event 3" },
      { src: "/csiai100k/mvsr/mvsr (4).jpg", alt: "MVSR Event 4" },
      { src: "/csiai100k/mvsr/mvsr (5).jpg", alt: "MVSR Event 5" },
    ],
  },
  {
    name: "sphn",
    displayName: "AI 100K Program at SPHN",
    images: [
      { src: "/csiai100k/sphn/sphn (1).jpg", alt: "SPHN Event 1" },
      { src: "/csiai100k/sphn/sphn (2).jpg", alt: "SPHN Event 2" },
      { src: "/csiai100k/sphn/sphn (3).jpg", alt: "SPHN Event 3" },
    ],
  },
  {
    name: "stpeter",
    displayName: "AI 100K Program at St Peter",
    images: [
      { src: "/csiai100k/stpeter/st (1).jpeg", alt: "St Peter Event 1" },
      { src: "/csiai100k/stpeter/st (2).jpeg", alt: "St Peter Event 2" },
      { src: "/csiai100k/stpeter/st (5).jpeg", alt: "St Peter Event 5" },
      { src: "/csiai100k/stpeter/st (6).jpeg", alt: "St Peter Event 6" },
    ],
  },
  {
    name: "vasavi",
    displayName: "AI 100K Program at Vasavi",
    images: [
      { src: "/csiai100k/vasavi/vasavi (1).jpg", alt: "Vasavi Event 1" },
      { src: "/csiai100k/vasavi/vasavi (2).jpg", alt: "Vasavi Event 2" },
      { src: "/csiai100k/vasavi/vasavi (3).jpg", alt: "Vasavi Event 3" },
      { src: "/csiai100k/vasavi/vasavi (4).jpg", alt: "Vasavi Event 4" },
      { src: "/csiai100k/vasavi/vasavi (5).jpg", alt: "Vasavi Event 5" },
    ],
  },
  {
    name: "vignan",
    displayName: "AI 100K Program at Vignan",
    images: [
      { src: "/csiai100k/vignan/vignan (1).jpg", alt: "Vignan Event 1" },
      { src: "/csiai100k/vignan/vignan (2).jpg", alt: "Vignan Event 2" },
      { src: "/csiai100k/vignan/vignan (3).jpg", alt: "Vignan Event 3" },
      { src: "/csiai100k/vignan/vignan (4).jpg", alt: "Vignan Event 4" },
      { src: "/csiai100k/vignan/vignan (5).jpg", alt: "Vignan Event 5" },
      { src: "/csiai100k/vignan/vignan (6).jpg", alt: "Vignan Event 6" },
      { src: "/csiai100k/vignan/vignan (7).jpg", alt: "Vignan Event 7" },
    ],
  },
]

// Sort events: priority events first, then alphabetically
const sortedEvents = [
  ...allEvents.filter((e) => eventOrder.includes(e.name)),
  ...allEvents.filter((e) => !eventOrder.includes(e.name)).sort((a, b) => a.displayName.localeCompare(b.displayName)),
]

export function GallerySection() {
  const [selectedEvent, setSelectedEvent] = useState<EventData>(sortedEvents[0])
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [imageLoading, setImageLoading] = useState<{ [key: string]: boolean }>({})

  const breakpointColumns = {
    default: 3,
    1024: 2,
    640: 1,
  }

  const openLightbox = (image: ImageData) => {
    setSelectedImage(image)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const handleEventChange = (event: EventData) => {
    setSelectedEvent(event)
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <section className="bg-white text-black min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.2em] text-black/60 mb-4"
          >
            THE LIBRARY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
          >
            — GALLERY
          </motion.h1>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-2">
              {sortedEvents.map((event) => (
                <button
                  key={event.name}
                  onClick={() => handleEventChange(event)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    selectedEvent.name === event.name
                      ? "bg-black text-white"
                      : "bg-black/5 text-black/70 hover:bg-black/10"
                  }`}
                >
                  {event.displayName}
                </button>
              ))}
            </div>
          </aside>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-4 rounded-full bg-black text-white shadow-lg hover:bg-black/90 transition-all"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
                onClick={() => setMobileMenuOpen(false)}
              >
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25 }}
                  className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-xl font-semibold mb-6">Events</h3>
                  <div className="space-y-2">
                    {sortedEvents.map((event) => (
                      <button
                        key={event.name}
                        onClick={() => handleEventChange(event)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                          selectedEvent.name === event.name
                            ? "bg-black text-white"
                            : "bg-black/5 text-black/70 hover:bg-black/10"
                        }`}
                      >
                        {event.displayName}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Gallery Content */}
          <div className="flex-1">
            <motion.h2
              key={selectedEvent.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-semibold mb-8"
            >
              {selectedEvent.displayName}
            </motion.h2>

            <Masonry
              breakpointCols={breakpointColumns}
              className="flex -ml-4 w-auto"
              columnClassName="pl-4 bg-clip-padding"
            >
              {selectedEvent.images.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="mb-4 cursor-pointer group"
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-black/5">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                      onLoadingComplete={() => setImageLoading({ ...imageLoading, [image.src]: false })}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
