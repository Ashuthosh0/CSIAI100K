"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, CheckCircle, Mail } from "lucide-react"

const learningModules = [
  {
    title: "Introduction & Context",
    description: "Demystify AI with real-world relevance and responsible use.",
  },
  {
    title: "Hands-on Demo",
    description: "Build a simple AI example on real-world data using beginner-friendly tools.",
  },
  {
    title: "Industry Insights",
    description: "Hear practitioner stories, case studies, and career pathways.",
  },
]

const learningTracks = [
  {
    title: "AI Fundamentals",
    duration: "2 Weeks",
    modules: 8,
    description: "Introduction to AI, history, types, and real-world applications.",
    topics: ["What is AI?", "Machine Learning Basics", "AI in Daily Life", "Future of AI"],
  },
  {
    title: "Machine Learning",
    duration: "3 Weeks",
    modules: 12,
    description: "Supervised, unsupervised learning, neural networks, and model building.",
    topics: ["Regression & Classification", "Decision Trees", "Neural Networks", "Model Evaluation"],
  },
  {
    title: "Deep Learning",
    duration: "3 Weeks",
    modules: 10,
    description: "CNNs, RNNs, transformers, and advanced neural architectures.",
    topics: ["Deep Neural Networks", "CNNs for Vision", "RNNs for Sequences", "Attention Mechanisms"],
  },
  {
    title: "Generative AI & LLMs",
    duration: "2 Weeks",
    modules: 8,
    description: "Large Language Models, prompt engineering, and AI creativity.",
    topics: ["GPT & Transformers", "Prompt Engineering", "AI Image Generation", "Ethical Considerations"],
  },
  {
    title: "AI Applications",
    duration: "2 Weeks",
    modules: 6,
    description: "Industry-specific AI applications and implementation strategies.",
    topics: ["AI in Healthcare", "AI in Finance", "AI in Manufacturing", "AI Startups"],
  },
  {
    title: "AI Ethics & Future",
    duration: "1 Week",
    modules: 4,
    description: "Responsible AI, bias, privacy, and the future of AI governance.",
    topics: ["AI Ethics", "Bias in AI", "Privacy & Security", "AI Regulations"],
  },
]

const experienceHighlights = [
  "Inclusive curriculum—no prior AI/programming needed",
  "Community access to the nationwide CSI AI-100K network",
  "Recognition that strengthens CVs and portfolios",
]

export default function LearningPage() {
  const scrollToCurriculum = () => {
    const curriculumSection = document.getElementById('curriculum-section')
    if (curriculumSection) {
      curriculumSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
        <div className="absolute top-1/4 -right-64 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium mb-3 block text-sm">Learning Path</span>
            <h1 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4 tracking-tight">
              Learning Journey & Modules
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              Accessible, inclusive, and hands-on—designed to spark AI readiness for all backgrounds.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="default" variant="outline" onClick={scrollToCurriculum}>
                View Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Modules - New Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary font-medium mb-3 block text-sm">Overview</span>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3 tracking-tight">Program Modules</h2>
            <p className="text-sm text-muted-foreground">
              Three core modules designed to build comprehensive AI understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningModules.map((module) => (
              <div
                key={module.title}
                className="bg-white rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">{module.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tracks - Original Curriculum */}
      <section className="py-16" id="curriculum-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary font-medium mb-3 block text-sm">Curriculum</span>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3 tracking-tight">Program Format</h2>
            <p className="text-sm text-muted-foreground">
              Focused on covering everything from AI basics to advanced applications and Career Pathways.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningTracks.map((track, index) => (
              <div
                key={track.title}
                className="bg-white rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{track.title}</h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{track.description}</p>
                <ul className="space-y-1.5">
                  {track.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">Experience Highlights</h2>
                <ul className="space-y-4">
                  {experienceHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">Session Structure</h2>
                <p className="text-muted-foreground leading-relaxed">
                 Total Duration
~ 2 hours AI Readiness<br/>
Mode
Hybrid (online/offline)<br/>
Schedule
Shared by email upon registration<br/>
Certification
CSI-AI100K digital credential
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl p-6 lg:p-10 border border-border max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-xs text-muted-foreground mb-2">
                  © Computer Society of India, Hyderabad Chapter
                </p>
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground">Ready to join AI100K?</h2>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <span className="text-sm text-muted-foreground">Questions?</span>
                <a
                  href="mailto:ai100k@csihydchapter.org"
                  className="text-primary hover:underline font-medium"
                >
                  ai100k@csihydchapter.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
