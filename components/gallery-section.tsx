"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

type GalleryItem = {
  id: string
  title: string
  image: string
  width: string
  height: string
}

type EventSection = {
  eventName: string
  images: GalleryItem[]
}

const galleryData: EventSection[] = [
  {
    eventName: "CSIAI100K at Bhojreddy College of engineering",
    images: [
      {
        id: "ev1",
        title: "Event Highlights",
        image: "/ev1.jpeg",
        width: "col-span-1",
        height: "aspect-[4/3]"
      },
      {
        id: "ev2",
        title: "Special Moments",
        image: "/ev2.jpeg",
        width: "col-span-2",
        height: "aspect-[16/9]"
      },
      {
        id: "ev3",
        title: "Team Collaboration",
        image: "/ev3.jpeg",
        width: "col-span-1",
        height: "aspect-[4/3]"
      },
      {
        id: "ev4",
        title: "Celebration Time",
        image: "/ev4.jpeg",
        width: "col-span-3",
        height: "aspect-[21/9]"
      }
    ]
  },
  {
    eventName: "Met with Governor of Telangana",
    images: [
      {
        id: "4",
        title: "Hands-on Coding Sessions",
        image: "/placeholder.jpg",
        width: "col-span-2",
        height: "aspect-[3/2]"
      },
      {
        id: "5",
        title: "Team Project Presentations",
        image: "/placeholder.jpg",
        width: "col-span-1",
        height: "aspect-square"
      },
      {
        id: "6",
        title: "Mentor Guidance Sessions",
        image: "/placeholder.jpg",
        width: "col-span-1",
        height: "aspect-square"
      }
    ]
  },
  {
    eventName: "Telangana Global summit",
    images: [
      {
        id: "7",
        title: "Industry Panel Discussion",
        image: "/placeholder.jpg",
        width: "col-span-1",
        height: "aspect-[3/4]"
      },
      {
        id: "8",
        title: "Research Paper Presentations",
        image: "/placeholder.jpg",
        width: "col-span-1",
        height: "aspect-square"
      },
      {
        id: "9",
        title: "Awards Ceremony",
        image: "/placeholder.jpg",
        width: "col-span-1",
        height: "aspect-[4/3]"
      },
      {
        id: "10",
        title: "Closing Reception",
        image: "/placeholder.jpg",
        width: "col-span-3",
        height: "aspect-[21/9]"
      }
    ]
  },
  {
    eventName: "CSI AI100K at IFCAI",
    images: [
      {
        id: "11",
        title: "Pitch Competition Finals",
        image: "/placeholder.jpg",
        width: "col-span-2",
        height: "aspect-[16/9]"
      },
      {
        id: "12",
        title: "Investor Meet & Greet",
        image: "/placeholder.jpg",
        width: "col-span-1",
        height: "aspect-[3/4]"
      },
      {
        id: "13",
        title: "Product Demo Booths",
        image: "/placeholder.jpg",
        width: "col-span-1",
        height: "aspect-square"
      },
      {
        id: "14",
        title: "Winner Announcement",
        image: "/placeholder.jpg",
        width: "col-span-2",
        height: "aspect-[3/2]"
      }
    ]
  }
]

export function GallerySection() {
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

        {/* Gallery Events */}
        <div className="space-y-20">
          {galleryData.map((event, eventIndex) => (
            <motion.div
              key={event.eventName}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.8, delay: eventIndex * 0.1 }}
              className="space-y-8"
            >
              {/* Event Name */}
              <h2 className="text-2xl md:text-3xl font-semibold text-black/80 mb-8">
                {event.eventName}
              </h2>

              {/* Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
                {event.images.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ amount: 0.3, once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`${item.width} group cursor-pointer`}
                  >
                    <div className={`relative ${item.height} rounded-2xl overflow-hidden bg-black/5`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 ease-out" />

                      {/* Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <h3 className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}