import { NavbarHome } from "@/components/navbar-home"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CollegeLogosSection } from "@/components/college-logos-section"
import { StatsSection } from "@/components/stats-section"
import { TimelineSectionModern } from "@/components/timeline-section"
import { CTASection } from "@/components/cta-section"
import { EventPopup } from "@/components/event-popup"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <EventPopup />
      <NavbarHome />
      <HeroSection />
      <FeaturesSection />
      <CollegeLogosSection />
      {/* <StatsSection /> */}
      <TimelineSectionModern />
      <CTASection />
      <Footer />
    </main>
  )
}
