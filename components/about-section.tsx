import Image from "next/image"

export function AboutSection() {
  return (
    <section className="px-8 md:px-8 bg-bg-light">
      <div className="max-w-content mx-auto">
        {/* Half Icon Row */}
       <div className="mb-12 md:mb-16">
                <Image
                  src="/images/half-20icon.png"
                  alt="Icono decorativo"
                  width={1200}
                  height={697}
                  className="h-auto icon-doctor"
                />
            </div>

        {/* Content Grid */}
        <div id="sobre" className="grid grid-cols-1 md:grid-cols-2 mb-4 md:mb-4">
          {/* Left Column - Title */}
          <div className="h-10">
            <h2 className="font-inter text-zinc-500 text-base title-section w-fit">
              Sobre Cristian Cordero
            </h2>
          </div>

          {/* Right Column - Content with Orange Border */}
          <div className="orange-border-left pl-3 md:pl-6 font-inter">
            <p className="text-base text-zinc-900 mb-8 leading-relaxed">
              Ha estado especializado exclusivamente en rinoplastia durante 15 años, siendo pionero en numerosas innovaciones tanto en rinoplastia primaria como en rinoplastia de revisión. <span className="text-zinc-500">Ha alcanzado una alta tasa de éxito, lo que se traduce en una gran satisfacción entre sus pacientes, tanto en Turquía como en todo el mundo, con sus nuevos resultados nasales.</span>
            </p>

            <p className="text-base text-zinc-900 mb-12 leading-relaxed">
              Es ampliamente reconocido, tanto a nivel nacional como internacional, por lograr una satisfacción excepcional entre sus pacientes.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="font-maven text-h3 font-bold text-brand-300 mb-2 font-weight-bold">10K+</div>
                <p className="font-inter text-base text-gray-text">Clientes satisfechos</p>
              </div>
              <div>
                <div className="font-maven text-h3 font-bold text-brand-400 mb-2 font-weight-bold">25+</div>
                <p className="font-inter text-base text-gray-text">Años de experiencia</p>
              </div>
              <div>
                <div className="font-maven text-h3 font-bold text-brand-500 mb-2 font-weight-bold">300+</div>
                <p className="font-inter text-base text-gray-text">Charlas en conferencias</p>
              </div>
              <div>
                <div className="font-maven text-h3 font-bold text-brand-600 mb-2 font-weight-bold">500+</div>
                <p className="font-inter text-base text-gray-text">Doctores entrenados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
