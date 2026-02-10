import { Footer } from "@/components/footer"
import { InscribirmeHeader } from "@/components/inscribirme/inscribirme-header"
import { InscribirmePlans } from "@/components/inscribirme/inscribirme-plans"
import { InscribirmeFaq } from "@/components/inscribirme/inscribirme-faq"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-bg-light">
      <InscribirmeHeader />
      <InscribirmePlans />
      <InscribirmeFaq />
      <Footer />
    </main>
  )
}
