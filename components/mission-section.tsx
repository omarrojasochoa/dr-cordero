import Image from "next/image"

export function MissionSection() {
  return (
    <section className="pt-section px-8 md:px-8 bg-bg-light">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h3 className="font-inter text-zinc-500 text-base title-section w-fit mb-4">
              Misión
            </h3>
            <h2 className="font-maven text-h4 font-semibold text-dark mb-6 text-balance">
              Donde la técnica<br></br> y la empatía operan juntas
            </h2>
            <p className="text-base text-zinc-500 font-regular mb-6 leading-relaxed">
              Nuestra filosofía se centra en lograr el mejor resultado para cada paciente, este enfoque implica dedicar el tiempo necesario tanto en la etapa de consulta como durante la cirugía, sin limitaciones de tiempo. Logrando un diseño de narices personalizadas que aseguren:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Image src="/images/check.svg" alt="Check" width={24} height={24} />
                <span className="text-zinc-900">Respiración saludable</span>
              </li>
              <li className="flex gap-3">
                <Image src="/images/check.svg" alt="Check" width={24} height={24} />
                <span className="text-zinc-900">Armonía con los rasgos faciales</span>
              </li>
            </ul>
          </div>

          <div className="relative w-full h-full ">
            <div className="w-full overflow-hidden rounded-lg">
              {/* Use correct blob URL for mission image */}
              <Image src="/images/mission-dr.svg" alt="Doctor realizando consulta" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
