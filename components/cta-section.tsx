import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent mb-6">
            <Sparkles className="w-6 h-6 text-white" />
          </div>

          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground mb-4 tracking-tight">
            Ready to Become <span className="gradient-text">AI-Ready?</span>
          </h2>

          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Join India's largest AI literacy movement. Register now and be part of the 100,000+ learners shaping the
            future of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="default"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 shadow-md group"
            >
              Register for Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button
              size="default"
              variant="outline"
              className="border-border hover:bg-secondary font-medium bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
