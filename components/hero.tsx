import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative w-full h-screen md:h-[100vh] overflow-hidden bg-dark">
      <Image src="/images/background-test2.png" alt="Cirugía de rinoplastia" fill className="object-cover" priority />

      {/* Overlay gradient */}
      {/* <div className="hero-overlay" /> */}

      {/* Content */}
      <div className="relative h-full flex items-center justify-start">
        <div className="max-w-content mx-auto px-8 md:px-8 w-full">
          <div className="max-w-[600px]">
            <h1 className="text-5xl md:text-5xl text-white mb-6 text-balance font-maven font-bold">
              Fellowship en
              <br />
              Extensor Septal 593
            </h1>
            <p className="text-lg text-white/90 mb-8 text-balance font-inter">
              Participa con el Dr. Cristian Cordero y vive la experiencia en rinoplastia avanzada
            </p>
            <Link
              href="/inscribirme"
              className="btn-cta relative z-10 text-white px-8 py-4 rounded-full transition-smooth inline-flex items-center gap-2 text-body-lg h-10"
            >
              Inscríbete all Fellow
              <span><Image src="/images/icon-cta.svg" alt="flecha derecha" width={18} height={18} /></span>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  )
}
