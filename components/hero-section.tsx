"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, BookOpen, Award } from "lucide-react"

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 99,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const targetDate = new Date("2026-03-21T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
      {/* Background Effects - Lighter, more subtle */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      {/* Grid Pattern - Very subtle for light theme */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(37, 99, 235, 0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge - Smaller, cleaner */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              <span className="text-xs font-medium text-primary">World's Largest AI Readiness Program</span>
            </div>

            {/* Main Heading - Smaller, professional sizing */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-5 tracking-tight">
              <span className="text-foreground">CSI AI100K</span>
              <br />
              <span className="gradient-text">Make Bharat</span>
              <br />
              <span className="gradient-text">AI-Ready by 2026</span>
            </h1>

            {/* Description - Smaller text */}
            <p className="text-base lg:text-lg text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A nationwide initiative equipping 100,000+ learners with practical AI literacy, hands-on demos, and a
              verifiable CSI credential.
            </p>

            {/* CTA Buttons - Smaller, cleaner buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Button
                size="default"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 shadow-md group"
              >
                Register Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button
                size="default"
                variant="outline"
                className="border-border hover:bg-secondary font-medium group bg-transparent"
              >
                <Play className="mr-2 w-4 h-4" />
                Explore Program
              </Button>
            </div>

            {/* Stats - Smaller, cleaner stats */}
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-0.5">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-xl lg:text-2xl font-semibold text-foreground">100K+</span>
                </div>
                <span className="text-xs text-muted-foreground">Learners</span>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-0.5">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-xl lg:text-2xl font-semibold text-foreground">100</span>
                </div>
                <span className="text-xs text-muted-foreground">Days Program</span>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-0.5">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-xl lg:text-2xl font-semibold text-foreground">CSI</span>
                </div>
                <span className="text-xs text-muted-foreground">Certified</span>
              </div>
            </div>
          </div>

          {/* Right Content - AI Visual + Countdown */}
          <div className="relative">
            {/* Main Visual Card - Light theme card */}
            <div className="relative glass-card rounded-2xl p-6 lg:p-8 animate-float">
              <div className="relative">
                {/* AI Visual */}
                <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-center justify-center mb-6 overflow-hidden">
                  <img
                    src="/futuristic-ai-robot-head-with-glowing-blue-eyes-an.jpg"
                    alt="AI Robot"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Countdown Timer - Smaller, cleaner */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-border">
                  <p className="text-center text-muted-foreground mb-3 text-sm font-medium">
                    100-Day Program Starts In
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { value: timeLeft.days, label: "Days" },
                      { value: timeLeft.hours, label: "Hours" },
                      { value: timeLeft.minutes, label: "Mins" },
                      { value: timeLeft.seconds, label: "Secs" },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="bg-secondary rounded-lg py-2 px-1 mb-1">
                          <span className="text-lg lg:text-xl font-semibold gradient-text">
                            {String(item.value).padStart(2, "0")}
                          </span>
                        </div>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements - Smaller */}
            <div
              className="absolute -top-4 -left-4 w-14 h-14 glass-card rounded-xl flex items-center justify-center animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-2xl">🤖</span>
            </div>
            <div
              className="absolute -bottom-3 -right-3 w-12 h-12 glass-card rounded-xl flex items-center justify-center animate-float"
              style={{ animationDelay: "1s" }}
            >
              <span className="text-xl">🧠</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
