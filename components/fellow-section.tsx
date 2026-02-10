"use client"
import Link from "next/link"
import Image from "next/image"

export function FellowSection() {
  return (
    <section className="pt-section px-8 md:px-8 bg-bg-light">
      <div className="max-w-content mx-auto">
        <div className="mb-20 md:mb-24 bg-orange-blur">
          <div className="flex justify-center">
            <div className="relative w-full md:w-96">
              {/* Background only for video */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <Image
                  src="/images/Simbolo-logo.svg"
                  alt="Background decorativo"
                  fill
                  className="h-auto"
                />
              </div>

              {/* Video image placeholder */}
              <div className="relative z-10 aspect-[9/16] w-full max-w-xs mx-auto overflow-hidden rounded-2xl flex items-center justify-center">
                <Image
                  src="/images/image-video.png"
                  alt="Fellowship en Extensor Septal 593"
                  width={240}
                  height={320}
                  className="image-play m-auto h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
          {/* Left Column - Empty */}
          <div className="hidden md:block " />

          {/* Right Column - Text & CTA */}
          <div className="orange-border-left">
            <p className="font-inter text-base md:text-base text-zinc-900 mb-8 leading-relaxed">
              Más de 500 cirujanos ya han perfeccionado sus habilidades junto al Dr. Cristian Cordero. Aprende en vivo sus técnicas en rinoplastia: manejo de la punta nasal con extensor septal 593, mecánica valvular y obtención de cartílago costal por vía periareolar.
            </p>
            <Link
              href="/inscribirme"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-smooth inline-flex items-center gap-2 btn-cta"
            >
              Inscríbete all Fellow
              <span><Image src="/images/icon-cta.svg" alt="flecha derecha" width={16} height={16} /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
