import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GallerySection } from "@/components/gallery-section"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <GallerySection />
      <Footer />
    </main>
  )
}