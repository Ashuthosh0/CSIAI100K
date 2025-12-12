import { Brain, Lightbulb, Code, Users, Award, Rocket } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Fundamentals",
    description: "Master the core concepts of artificial intelligence and machine learning from industry experts.",
  },
  {
    icon: Code,
    title: "Hands-on Projects",
    description: "Build real-world AI applications with guided projects and practical exercises.",
  },
  {
    icon: Lightbulb,
    title: "Industry Insights",
    description: "Learn from leading AI practitioners and understand industry best practices.",
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Join a community of 100,000+ learners and collaborate on AI initiatives.",
  },
  {
    icon: Award,
    title: "CSI Certification",
    description: "Earn a verifiable credential from the Computer Society of India.",
  },
  {
    icon: Rocket,
    title: "Career Ready",
    description: "Get prepared for AI-driven careers with placement support and mentorship.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header - Smaller text */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium mb-3 block text-sm">Why Choose AI100K</span>
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            Transform Your Career with <span className="gradient-text">AI Skills</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our comprehensive program covers everything from AI basics to advanced applications.
          </p>
        </div>

        {/* Features Grid - Light theme cards with smaller text */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
