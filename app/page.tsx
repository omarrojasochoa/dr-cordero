import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { MissionSection } from "@/components/mission-section"
import { FellowSection } from "@/components/fellow-section"
import { RhinoplastySection } from "@/components/rhinoplasty-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Dr. Cristian Cordero | Fellowship en Rinoplastia - Extensor Septal 593",
  description:
    "Aprende las técnicas más avanzadas en rinoplastia con el Dr. Cristian Cordero. Fellowship profesional con más de 15 años de experiencia.",
}

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <AboutSection />
      <MissionSection />
      <FellowSection />
      <RhinoplastySection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
