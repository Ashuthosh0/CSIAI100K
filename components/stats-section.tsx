const stats = [
  { value: "100,000+", label: "Learners Enrolled" },
  { value: "500+", label: "Partner Institutions" },
  { value: "100", label: "Days of Learning" },
  { value: "50+", label: "Industry Mentors" },
]

export function StatsSection() {
  return (
    <section className="py-16 relative bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold gradient-text mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
