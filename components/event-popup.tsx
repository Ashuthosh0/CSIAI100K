"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, MapPin, Building, ArrowRight } from "lucide-react"

// This variable will be reset on hard refresh, but persists across Next.js client-side navigations.
let hasShownThisSession = false

export function EventPopup() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // Only trigger the popup if it hasn't already shown during this hard page load lifecycle
        if (!hasShownThisSession) {
            hasShownThisSession = true
            const timer = setTimeout(() => {
                setIsOpen(true)
            }, 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like ease
                        className="fixed left-1/2 top-1/2 z-50 flex w-[95%] max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-lg bg-white shadow-2xl sm:flex-row border border-slate-100 font-sans"
                    >
                        {/* Left Graphic Section - Professional Minimalist */}
                        <div className="relative flex flex-col justify-between bg-slate-900 p-8 sm:w-[45%] lg:p-12 text-white overflow-hidden">
                            {/* Animated background gradient */}
                            <motion.div
                                animate={{
                                    backgroundPosition: ["0% 0%", "100% 100%"]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 20,
                                    ease: "linear"
                                }}
                                className="absolute inset-0 opacity-20"
                                style={{
                                    background: "radial-gradient(circle at center, #1e3a8a 0%, transparent 70%)",
                                    backgroundSize: "200% 200%",
                                }}
                            />

                            <div className="relative z-10 flex items-center gap-2 mb-8">
                                <div>
                                </div>
                                <span className="font-semibold tracking-wider text-md text-slate-300">CSI HYDERABAD CHAPTER</span>
                            </div>

                            <div className="relative z-10">
                                <h4 className="text-5xl font-bold font-heading mb-3 leading-tight tracking-tight">
                                    CSI AI 100K
                                </h4>
                                <h3 className="text-5xl font-medium text-slate-300 mb-6">
                                    Impact Summit 2026
                                </h3>
                                <div className="h-1 w-12 bg-blue-500 rounded" />
                            </div>

                            <div className="relative z-10 mt-12 sm:mt-0">
                                <p className="text-lg text-slate-400 font-medium tracking-wide uppercase">
                                    The world's largest AI readiness program
                                </p>
                            </div>
                        </div>

                        {/* Right Content Section */}
                        <div className="relative flex flex-col justify-center p-8 sm:w-[55%] lg:p-12">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute right-4 top-4 z-50 rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                                aria-label="Close popup"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="mb-8 mt-2 sm:mt-0">
                                <p className="mb-3 text-xs font-bold tracking-widest text-blue-600 uppercase">
                                    Guest Invitation
                                </p>
                                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-3 tracking-tight">
                                    You are cordially invited.
                                </h2>
                                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                                    Join us in this monumental event as we gather to celebrate and shape the future of AI.
                                </p>
                            </div>

                            <div className="mb-8 space-y-6">
                                <div className="group flex items-start gap-4">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900 transition-colors group-hover:text-blue-700">Anurag University</p>
                                        <p className="text-sm text-slate-500 mt-1">Hyderabad</p>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-4">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900 transition-colors group-hover:text-blue-700">14th March 2026</p>
                                        <p className="text-sm text-slate-500 mt-1">9:30 AM Onwards</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8 border-l-2 border-blue-500 bg-slate-50 p-4 rounded-r-md transition-all hover:bg-slate-100">
                                <p className="text-sm text-slate-700 leading-relaxed font-sans">
                                    We will be sharing details related to the delegate passes soon!
                                </p>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                            >
                                Continue to website
                                <div>
                                    {/* <ArrowRight className="h-4 w-4 relative top-[1px]" /> */}
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
