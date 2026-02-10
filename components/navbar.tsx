"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useSmoothScroll } from "@/lib/lenis"

export function Navbar() {
  useSmoothScroll()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-smooth`}
    >
      <div className="max-w-content mx-auto py-6 md:py-6">
        <div className="flex items-center justify-between h-15 md:h-15 p-2 rounded-32 navbar-border">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Dr. Cristian Cordero"
              width={120}
              height={40}
              className="h-10 md:h-10 w-auto pl-4"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12 text-base">
            <Link href="#sobre" className="hover:text-primary transition-smooth text-foreground text-white h-10 flex items-center text-base">
              Sobre Cristian
            </Link>
            <Link href="#rinoplastias" className="hover:text-primary transition-smooth text-foreground text-white h-10 flex items-center text-base">
              Rinoplastias
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 text-base">
            <Link
              href="/login"
              className="border border-secundary text-foreground px-4 py-2 rounded-full text-white text-base"
            >
              Ingresar
            </Link>
            <Link
              href="/inscribirme"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-smooth flex items-center gap-2 btn-cta"
            >
              Fellow 593
              <span><Image src="/images/icon-cta.svg" alt="flecha derecha" width={16} height={16} /></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-gray-200 animate-in fade-in duration-200 bg-background/95 backdrop-blur">
            <div className="flex flex-col gap-4 mt-4 text-base">
              <Link href="#sobre" className="hover:text-primary transition-smooth px-2 text-foreground">
                Sobre Cristian
              </Link>
              <Link href="#rinoplastias" className="hover:text-primary transition-smooth px-2 text-foreground">
                Rinoplastias
              </Link>
              <Link
                href="/login"
                className="border border-gray-200 text-foreground px-6 py-3 rounded-full font-semibold transition-smooth inline-block "
              >
                Ingresar
              </Link>
              <Link
                href="/inscribirme"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-smooth inline-block"
              >
                Fellow 593
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
