import { MapPin } from "lucide-react"

export function InscribirmeHeader() {
  return (
    <section className="py-section px-8 md:px-8 bg-section1-follow">
      <div className="max-w-content mx-auto text-center">
        <h1 className="font-maven text-h4 font-semibold mb-6 letter-spacing--2 text-content-footer-section1-follow text-zinc-900">
          Elige tu camino hacia la maestría en rinoplastia
        </h1>
        <p className="font-inter text-base text-gray-text mb-6 text-content-footer-section1-follow text-zinc-900">
          Tres niveles de formación diseñados para adaptarse a tu experiencia y objetivos profesionales.
        </p>
        <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm text-zinc-500 bg-white">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="font-inter">Cuenca, Ecuador</span>
        </div>
      </div>
    </section>
  )
}
