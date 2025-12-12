import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Target, Eye, Heart, Award } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Democratizing AI education for every Indian learner, regardless of background.",
  },
  {
    icon: Eye,
    title: "Visionary",
    description: "Building a future where India leads the global AI revolution.",
  },
  {
    icon: Heart,
    title: "Inclusive",
    description: "Creating opportunities for learners from all walks of life.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining the highest standards in AI education and certification.",
  },
]

const milestones = [
  { year: "2024", title: "Program Launch", description: "CSI AI100K initiative announced" },
  { year: "2025", title: "100K Enrollments", description: "Reached enrollment milestone" },
  { year: "2026", title: "Certification", description: "First batch of certified AI practitioners" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero - Light theme */}
      <section className="pt-28 pb-16 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
        <div className="absolute top-1/4 -right-64 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium mb-3 block text-sm">About Us</span>
            <h1 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4 tracking-tight">
              Empowering India's <span className="gradient-text">AI Future</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              CSI AI100K is a flagship initiative by the Computer Society of India, dedicated to making 100,000+ Indians
              AI-ready by 2026 through comprehensive education and industry-recognized certification.
            </p>
          </div>
        </div>
      </section>

      {/* About CSI */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-medium mb-3 block text-sm">Computer Society of India</span>
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 tracking-tight">
                India's Premier IT Professional Body
              </h2>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Founded in 1965, the Computer Society of India (CSI) is the largest association of IT professionals in
                India. With over 100,000 members and 500+ chapters, CSI has been at the forefront of advancing IT
                education and research.
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                The AI100K initiative represents CSI's commitment to preparing India for the AI-driven future, ensuring
                that our nation has the skilled workforce needed to lead in this transformative technology.
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="text-2xl font-semibold gradient-text">59+</div>
                  <div className="text-xs text-muted-foreground">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold gradient-text">100K+</div>
                  <div className="text-xs text-muted-foreground">Members</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold gradient-text">500+</div>
                  <div className="text-xs text-muted-foreground">Chapters</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border">
                <img
                  src="/modern-conference-room-with-ai-presentation-screen.jpg"
                  alt="CSI Conference"
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Light theme */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary font-medium mb-3 block text-sm">Our Values</span>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-5 text-center border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{value.title}</h3>
                <p className="text-xs text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary font-medium mb-3 block text-sm">Our Journey</span>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">Key Milestones</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative pl-16 pb-8 last:pb-0">
                  <div className="absolute left-3 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-border shadow-sm">
                    <span className="text-primary font-semibold text-sm">{milestone.year}</span>
                    <h3 className="text-base font-semibold text-foreground mt-0.5">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
