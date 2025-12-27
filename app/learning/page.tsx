import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, CheckCircle, Play, Download, ArrowRight } from "lucide-react"

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

const resources = [
  { title: "Video Lectures", count: "200+", icon: Play },
  { title: "Practice Labs", count: "50+", icon: BookOpen },
  { title: "Case Studies", count: "30+", icon: Download },
  { title: "Live Sessions", count: "Weekly", icon: Users },
]

export default function LearningPage() {
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
              100-Day AI <span className="gradient-text">Learning Journey</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              A Standardized 2-hour AI Awareness Session delivered by industry experts
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="default" className="bg-primary hover:bg-primary/90 text-white font-medium">
                Start Learning
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="default" variant="outline">
                View Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Overview */}
      <section className="py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {resources.map((resource) => (
                <div key={resource.title} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <resource.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xl font-semibold text-foreground">{resource.count}</div>
                  <div className="text-xs text-muted-foreground">{resource.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-16">
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
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{track.title}</h3>
                    {/* <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-0.5">
                        <Clock className="w-3 h-3" /> {track.duration}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <BookOpen className="w-3 h-3" /> {track.modules} Modules
                      </span>
                    </div> */}
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

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 lg:p-10 text-center max-w-2xl mx-auto border border-primary/10">
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 tracking-tight">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Join 100,000+ learners and become AI-ready with our comprehensive program.
            </p>
            <Button size="default" className="bg-primary hover:bg-primary/90 text-white font-medium">
              Enroll Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
