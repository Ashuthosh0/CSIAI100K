import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          

          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground mb-4 tracking-tight">
            Ready to Become <span className="gradient-text">AI-Ready?</span>
          </h2>

          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Join India's largest AI literacy movement. Register now and be part of the 100,000+ learners shaping the
            future of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/brochure.jpeg" download="CSI-AI100K-Brochure.jpeg">
              <Button
                size="default"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 shadow-md group"
              >
                Download Brochure
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
