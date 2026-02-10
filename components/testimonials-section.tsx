"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "María García",
    title: "Paciente satisfecha",
    image: "/images/video-20vertical-0.png",
  },
  {
    id: 2,
    name: "Juan López",
    title: "Caso de éxito",
    image: "/images/video-20vertical-1.png",
  },
  {
    id: 3,
    name: "Laura Martínez",
    title: "Transformación total",
    image: "/images/video-20vertical-2.png",
  },
  {
    id: 4,
    name: "Carlos Rodríguez",
    title: "Resultados naturales",
    image: "/images/video-20vertical-3.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobileView, setIsMobileView] = useState(false)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="pt-section px-8 md:px-8 bg-bg-light">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <h3 className="font-inter text-zinc-500 text-base title-section w-fit mb-4">
              Testimoniales
        </h3>
        <h2 className="font-maven text-h4 font-semibold text-dark mb-6 text-balance">
          Historias que respiran confianza
        </h2>
        <p className="font-inter text-body-base md:text-body-base text-gray-text mb-12 text-balance w-1/2">
          Más allá de la técnica, son las experiencias reales las que confirman por qué tantos pacientes recomiendan al Dr. Cristian Cordero.
        </p>

        <div className="relative">
          {/* Desktop: Show all 4 testimonials */}
          <div className="hidden md:grid grid-cols-4 gap-4 md:gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="group">
                <div className="relative aspect-[34/55] overflow-hidden rounded-24 mb-4 bg-gray-200">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-smooth flex items-center justify-center">
                    <div className="btn-play-video h-16 w-16 flex items-center justify-center">
                      {/* <Play className="text-white" size={32} fill="white" /> */}
                      <Image src="/images/play.svg" alt="Reproducir video" width={32} height={32} />
                    </div>                  
                  </div>
                </div>
                {/* <h3 className="font-bold text-dark text-body-lg">{testimonial.name}</h3>
                <p className="text-body-sm text-gray-text">{testimonial.title}</p> */}
              </div>
            ))}
          </div>

          {/* Mobile: Show 1 testimonial with slider */}
          <div className="md:hidden">
            <div className="group">
              <div className="relative aspect-[34/55] overflow-hidden rounded-lg mb-4 bg-gray-200">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-smooth flex items-center justify-center">
                  <div className="btn-play-video h-16 w-16 flex items-center justify-center">
                    <Play className="text-white" size={32} fill="white" />
                  </div>                  
                </div>
              </div>
              <h3 className="font-bold text-dark text-body-lg">{testimonials[currentIndex].name}</h3>
              <p className="text-body-sm text-gray-text">{testimonials[currentIndex].title}</p>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`w-3 h-3 rounded-full transition-smooth ${
                      i === currentIndex ? "bg-primary" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
