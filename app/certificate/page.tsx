import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Award, Shield, CheckCircle, Download, Share2, QrCode, BadgeCheck, FileCheck } from "lucide-react"

const certificationBenefits = [
  {
    icon: Shield,
    title: "Industry Recognized",
    description: "Backed by CSI, India's premier IT professional body with 59+ years of legacy.",
  },
  {
    icon: BadgeCheck,
    title: "Verifiable Credential",
    description: "Digital certificate with unique ID for instant verification by employers.",
  },
  {
    icon: QrCode,
    title: "Blockchain Secured",
    description: "Tamper-proof certification stored on blockchain for permanent record.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share on LinkedIn, resume, and job portals with one click.",
  },
]

const requirements = [
  "Complete all 6 learning tracks",
  "Score 70% or above in assessments",
  "Submit capstone project",
  "Attend minimum 80% of live sessions",
  "Complete peer review activities",
]

const levels = [
  {
    title: "AI Practitioner",
    description: "Foundation level certification for AI fundamentals.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Specialist",
    description: "Intermediate level with hands-on project experience.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "AI Expert",
    description: "Advanced level with industry-ready skills.",
    color: "from-primary to-accent",
  },
]

export default function CertificatePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
        <div className="absolute top-1/4 -right-64 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary font-medium mb-3 block text-sm">Certification</span>
              <h1 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                Earn Your <span className="gradient-text">CSI AI100K</span> Certificate
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Get recognized for your AI skills with an industry-standard certification from the Computer Society of
                India.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="default" className="bg-primary hover:bg-primary/90 text-white font-medium">
                  Start Certification Path
                </Button>
                <Button size="default" variant="outline">
                  <Download className="mr-2 w-4 h-4" />
                  Sample Certificate
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border animate-float">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 text-center">
                  <Award className="w-16 h-16 text-primary mx-auto mb-3" />
                  <h3 className="text-base font-semibold text-foreground mb-1">CSI AI100K Certificate</h3>
                  <p className="text-sm text-muted-foreground">AI Readiness Certification</p>
                  <div className="mt-4 p-3 bg-white rounded-lg">
                    <div className="w-16 h-16 mx-auto bg-slate-100 rounded-lg flex items-center justify-center">
                      <QrCode className="w-10 h-10 text-slate-400" />
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1.5">Scan to verify</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary font-medium mb-3 block text-sm">Why Get Certified</span>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">
              Certification Benefits
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificationBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-5 text-center border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Levels */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary font-medium mb-3 block text-sm">Levels</span>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">Certification Tiers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {levels.map((level, index) => (
              <div
                key={level.title}
                className="bg-white rounded-xl p-5 text-center border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center mx-auto mb-3`}
                >
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-primary font-medium">Level {index + 1}</span>
                <h3 className="text-sm font-semibold text-foreground mt-0.5 mb-1.5">{level.title}</h3>
                <p className="text-xs text-muted-foreground">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            <div>
              <span className="text-primary font-medium mb-3 block text-sm">Requirements</span>
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 tracking-tight">
                How to Get Certified
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Complete the following requirements to earn your CSI AI100K certification.
              </p>
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <FileCheck className="w-10 h-10 text-primary" />
                <div>
                  <h3 className="text-base font-semibold text-foreground">Verify Certificate</h3>
                  <p className="text-xs text-muted-foreground">Check authenticity instantly</p>
                </div>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter Certificate ID"
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-border focus:border-primary focus:outline-none transition-colors text-sm"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-white text-sm">Verify Certificate</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
