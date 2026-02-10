"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const rhinoplastyCards = [
  {
    id: 1,
    title: "Rinoplastia Primaria",
    description: "Procedimiento realizado por primera vez para mejorar la forma o función de la nariz. Busca lograr armonía facial y resultados naturales sin intervenciones previas.",
    image: "/images/tratamiento-1.svg",
  },
  {
    id: 2,
    title: "Rinoplastia Secundaria",
    description: "Procedimiento realizado por primera vez para mejorar la forma o función de la nariz. Busca lograr armonía facial y resultados naturales sin intervenciones previas.",
    image: "/images/tratamiento-2.svg",
  },
  {
    id: 3,
    title: "Rinoplastia Funcional",
    description: "Procedimiento realizado por primera vez para mejorar la forma o función de la nariz. Busca lograr armonía facial y resultados naturales sin intervenciones previas.",
    image: "/images/tratamiento-1.svg",
  },
  {
    id: 4,
    title: "Rinoplastia Estética",
    description: "Procedimiento realizado por primera vez para mejorar la forma o función de la nariz. Busca lograr armonía facial y resultados naturales sin intervenciones previas.",
    image: "/images/tratamiento-2.svg",
  },
  {
    id: 5,
    title: "Rinoplastia Funcional",
    description: "Procedimiento realizado por primera vez para mejorar la forma o función de la nariz. Busca lograr armonía facial y resultados naturales sin intervenciones previas.",
    image: "/images/tratamiento-1.svg",
  },
]

export function RhinoplastySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % rhinoplastyCards.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + rhinoplastyCards.length) % rhinoplastyCards.length)
  }

  return (
    <section id="rinoplastias" className="pt-section px-8 md:px-8 bg-bg-light">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <h3 className="font-inter text-zinc-500 text-base title-section w-fit mb-4">
              Rinoplastias
        </h3>
        <h2 className="font-maven text-h4 font-semibold text-dark mb-6 text-balance">
          Una inmersión en el arte <br></br>y la ciencia de la Rinoplastia
        </h2>

        {/* Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {rhinoplastyCards.slice(currentIndex, currentIndex + 1).map((card) => (
              <div key={card.id} className="group cursor-pointer">
                <div className="relative aspect-square md:aspect-auto h-80 overflow-hidden mb-4 rounded-24">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-smooth duration-300 "
                  />
                </div>
                <h3 className="font-inter text-base font-bold text-zinc-900 mb-2">{card.title}</h3>
                <p className="font-inter text-base text-zinc-500">{card.description}</p>
              </div>
            ))}
            {rhinoplastyCards[currentIndex + 1] && (
              <div className="hidden md:block group cursor-pointer">
                <div className="relative aspect-square md:aspect-auto h-80 overflow-hidden mb-4 rounded-24">
                  <Image
                    src={rhinoplastyCards[currentIndex + 1].image || "/placeholder.svg"}
                    alt={rhinoplastyCards[currentIndex + 1].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-smooth duration-300"
                  />
                </div>
                <h3 className="font-inter text-base font-bold text-zinc-900 mb-2">{rhinoplastyCards[currentIndex + 1].title}</h3>
                <p className="font-inter text-base text-zinc-500">{rhinoplastyCards[currentIndex + 1].description}</p>
              </div>
            )}
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: rhinoplastyCards.length }).map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    i === currentIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
