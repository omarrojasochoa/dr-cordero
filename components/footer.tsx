import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="pt-section relative bg-bg-light text-white overflow-hidden">
      {/* Background decoration (U shape) */}
      <div className="absolute top-[8rem] inset-0 cover no-repeat pointer-events-none">
        <Image src="/images/bg-footer.webp" alt="" fill className="object-contain object-center" />
      </div>

      <div className="mx-auto relative z-10">
        {/* First Row - CTA Section */}
        <div className="mb-footer-mobile md:mb-footer-desktop md:text-center text-left">
          <h2 className="max-w-content font-maven text-h4 font-semibold text-dark text-center text-content-footer-section1 mb-2">
            Perfecciona tu técnica con el Dr. Cristian Cordero 
          </h2>
          <p className="font-inter text-body-base md:text-body-base text-gray-text mb-8 text-center w-full text-content-footer-section1">
            Participa en una experiencia de aprendizaje avanzada que transformará tu práctica quirúrgica
          </p>
          
          <Link
              href="/inscribirme"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-smooth inline-flex items-center gap-2 btn-cta"
            >
              Inscríbete all Fellow
              <span><Image src="/images/icon-cta.svg" alt="flecha derecha" width={16} height={16} /></span>
            </Link>
        </div>

        {/* Second Row - Info */}
        <div className="bg-footer-section2 flex flex-col md:flex-col gap-4  md:gap-6 items-start md:items-center border-t border-white/20 pt-12 md:pt-8 pb-4 md:pb-4">
          {/* Logo & Branding */}
          <div className="text-center">
            <Image
              src="/images/logo-black.svg"
              alt="Dr. Cristian Cordero"
              height={64}
              width={300}
              className=""
            />
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-smooth"
              aria-label="Facebook"
            >
              <Image
                src="/images/fb.webp"
                alt="Facebook"
                height={40}
                width={40}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-smooth"
              aria-label="Instagram"
            >
              <Image
                src="/images/ig.webp"
                alt="Instagram"
                height={40}
                width={40}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Image
                src="/images/lkd.webp"
                alt="LinkedIn"
                height={40}
                width={40}
              />
            </a>
          </div>

          {/* Links */}
          <div className="max-w-content flex flex-col md:flex-row w-full justify-between">
            {/* Copyright */}
            <div className="text-center text-zinc-500 text-body-sm border-t border-white/20">
              <p>Copyright © 2026 Dr. Cristian Cordero C. Todos los derechos reservados.</p>
            </div>
            <div className="flex text-zinc-500 justify-center md:justify-end gap-6 text-sm">
              <Link href="/terminos-y-condiciones" className="hover:text-primary transition-smooth">
                Términos y Condiciones
              </Link>
              <Link href="/politica-de-privacidad" className="hover:text-primary transition-smooth">
                Política de Privacidad
              </Link>
              <Link href="/libro-de-reclamaciones" className="hover:text-primary transition-smooth">
                Libro de Reclamaciones
              </Link>
            </div>            
          </div>
        </div>

        
      </div>
    </footer>
  )
}
