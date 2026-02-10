import { Check } from "lucide-react"
import Image from "next/image"

const plans = [
  {
    id: "fellow-express",
    title: "Fellow Express",
    description: "Experiencia intensiva de 1 semana con observación activa.",
    price: 4500,
    benefits: [
      "Técnica Extensor Septal 593",
      "1 semana de duración",
      "Capacitación técnica avanzada",
      "Casos clínicos reales",
      "Entorno colaborativo"
    ],
    cta:"Inscribirme a Express"
  },
  {
    id: "fellow-extendido",
    title: "Fellow Extendido",
    description: "Experiencia inmersiva de 2 semanas para afianzar conocimientos.",
    price: 5500,
    benefits: [
      "Técnica Extensor Septal 593",
      "2 semana de duración",
      "Capacitación técnica avanzada",
      "Casos clínicos reales",
      "Entorno colaborativo"
    ],
    cta:"Inscribirme a Extendido"
  },
  {
    id: "fellow-vip",
    title: "Fellow VIP",
    description: "Formación práctica intensiva de 2 semanas con participación activa.",
    price: 8800,
    benefits: [
      "Técnica Extensor Septal 593",
      "2 semana de duración",
      "Capacitación técnica avanzada",
      "Casos clínicos reales",
      "Entorno colaborativo",
      "Mentoría personalizada",
      "Participación activa en cirugía"
    ],
    cta:"Inscribirme a VIP",
    popular: true
  },
]

export function InscribirmePlans() {
  return (
    <section className="px-8 bg-bg-light">
      <div className="px-0 md:px-8 max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-24 border border-gray-200 bg-white p-6 flex flex-col card-regular ${plan.popular ? 'active' : ''}`}
            >
              {plan.popular ? (
                <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                  Popular
                </div>
              ) : null}
              <h3 className="font-maven text-h5 font-bold text-zinc-900 mb-3 letter-spacing--2">{plan.title}</h3>
              <p className="font-inter text-body-base text-zinc-500 mb-4">{plan.description}</p>
              <p className="font-maven text-h5 font-semibold text-zinc-900 mb-6 letter-spacing--2">$ {plan.price}</p>
              <ul className="flex flex-col gap-3 mb-6">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-body-base text-zinc-500">
                    <span className="h-6 w-6 rounded-full text-primary flex items-center justify-center">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="font-inter">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`flex items-center justify-center gap-2 mt-auto text-white px-6 py-3 transition-smooth btn-card-regular ${plan.popular ? 'active' : ''}`}
              >
                {plan.cta}
                <span><Image src="/images/icon-cta.svg" alt="flecha derecha" width={18} height={18} /></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
