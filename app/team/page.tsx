import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Linkedin, Twitter, Mail } from "lucide-react"

const leadership = [
  {
    name: "Dr. Anirban Basu",
    role: "President, CSI",
    image: "/professional-indian-male-executive-portrait.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Program Director",
    image: "/professional-indian-female-professor-portrait.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Technical Lead",
    image: "/professional-indian-male-tech-leader-portrait.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Meera Patel",
    role: "Curriculum Head",
    image: "/professional-indian-female-academic-portrait.jpg",
    linkedin: "#",
    twitter: "#",
  },
]

const mentors = [
  {
    name: "Arun Krishnamurthy",
    role: "AI Research Lead, Google",
    expertise: "Machine Learning",
    image: "/indian-male-tech-professional-portrait.jpg",
  },
  {
    name: "Sneha Reddy",
    role: "Data Science Director, Microsoft",
    expertise: "Deep Learning",
    image: "/indian-female-data-scientist-portrait.jpg",
  },
  {
    name: "Vikram Singh",
    role: "CTO, AI Startup",
    expertise: "Generative AI",
    image: "/indian-male-startup-cto-portrait.jpg",
  },
  {
    name: "Dr. Kavitha Nair",
    role: "Professor, IIT Delhi",
    expertise: "NLP & LLMs",
    image: "/indian-female-professor-portrait.jpg",
  },
  {
    name: "Rohit Agarwal",
    role: "ML Engineer, Amazon",
    expertise: "Computer Vision",
    image: "/indian-male-ml-engineer-portrait.jpg",
  },
  {
    name: "Ananya Iyer",
    role: "AI Consultant",
    expertise: "AI Ethics",
    image: "/indian-female-ai-consultant-portrait.jpg",
  },
]

const coordinators = [
  { name: "Mumbai Chapter", lead: "Mr. Sunil Deshmukh" },
  { name: "Delhi Chapter", lead: "Ms. Neha Gupta" },
  { name: "Bangalore Chapter", lead: "Mr. Karthik Rajan" },
  { name: "Chennai Chapter", lead: "Dr. Lakshmi Venkat" },
  { name: "Hyderabad Chapter", lead: "Mr. Prasad Rao" },
  { name: "Kolkata Chapter", lead: "Ms. Ritika Sen" },
  { name: "Pune Chapter", lead: "Mr. Amit Joshi" },
  { name: "Ahmedabad Chapter", lead: "Dr. Hitesh Patel" },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
        <div className="absolute top-1/4 -right-64 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium mb-3 block text-sm">Our Team</span>
            <h1 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4 tracking-tight">
              Meet the <span className="gradient-text">Visionaries</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A dedicated team of industry leaders, educators, and AI experts committed to making India AI-ready by
              2026.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary font-medium mb-3 block text-sm">Leadership</span>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">Program Leadership</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl p-5 text-center border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
              >
                <div className="relative w-24 h-24 mx-auto mb-3 overflow-hidden rounded-xl">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{member.name}</h3>
                <p className="text-xs text-primary mb-3">{member.role}</p>
                <div className="flex justify-center gap-2">
                  <a
                    href={member.linkedin}
                    className="w-7 h-7 rounded-md bg-slate-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-7 h-7 rounded-md bg-slate-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary font-medium mb-3 block text-sm">Industry Experts</span>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">Our Mentors</h2>
            <p className="text-sm text-muted-foreground mt-3">Learn from industry leaders shaping the future of AI.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className="bg-white rounded-xl p-4 flex items-center gap-3 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={mentor.image || "/placeholder.svg"}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{mentor.name}</h3>
                  <p className="text-xs text-muted-foreground">{mentor.role}</p>
                  <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium">
                    {mentor.expertise}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Coordinators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary font-medium mb-3 block text-sm">Nationwide Network</span>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">Chapter Coordinators</h2>
            <p className="text-sm text-muted-foreground mt-3">Regional leaders driving AI education across India.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {coordinators.map((coord) => (
              <div
                key={coord.name}
                className="bg-white rounded-lg p-3 border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="text-sm font-semibold text-foreground">{coord.name}</h3>
                <p className="text-xs text-muted-foreground">{coord.lead}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 lg:p-10 text-center max-w-2xl mx-auto border border-primary/10">
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 tracking-tight">
              Want to Join Our Team?
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              We're looking for passionate educators, mentors, and volunteers to help make India AI-ready.
            </p>
            <a
              href="mailto:ai100k@csi-india.org"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
