import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  { question:"¿Qué tipo de operaciones podré experimentar durante el fellowship?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Pharetra sed massa in elit. Ullamcorper lectus massa tellus donec facilisis in. Tristique nunc eu pharetra eget tellus pellentesque nisl curabitur. Justo neque amet nec risus pharetra diam sed vestibulum."
  },
  { question:"¿Qué incluye cada modalidad?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Pharetra sed massa in elit. Ullamcorper lectus massa tellus donec facilisis in. Tristique nunc eu pharetra eget tellus pellentesque nisl curabitur. Justo neque amet nec risus pharetra diam sed vestibulum."
  },
  { question:"¿Cuál es la duración promedio de cada procedimiento?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Pharetra sed massa in elit. Ullamcorper lectus massa tellus donec facilisis in. Tristique nunc eu pharetra eget tellus pellentesque nisl curabitur. Justo neque amet nec risus pharetra diam sed vestibulum."
  },
  { question:"¿Se pueden tomar notas o grabar fragmentos con autorización?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Pharetra sed massa in elit. Ullamcorper lectus massa tellus donec facilisis in. Tristique nunc eu pharetra eget tellus pellentesque nisl curabitur. Justo neque amet nec risus pharetra diam sed vestibulum."
  },
  { question:"¿Es necesario tener experiencia previa en rinoplastia?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Pharetra sed massa in elit. Ullamcorper lectus massa tellus donec facilisis in. Tristique nunc eu pharetra eget tellus pellentesque nisl curabitur. Justo neque amet nec risus pharetra diam sed vestibulum."
  },
  { question:"¿Se requiere licencia médica local o permiso especial para participar?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Pharetra sed massa in elit. Ullamcorper lectus massa tellus donec facilisis in. Tristique nunc eu pharetra eget tellus pellentesque nisl curabitur. Justo neque amet nec risus pharetra diam sed vestibulum."
  },
  { question:"¿El alojamiento o transporte están incluidos?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Pharetra sed massa in elit. Ullamcorper lectus massa tellus donec facilisis in. Tristique nunc eu pharetra eget tellus pellentesque nisl curabitur. Justo neque amet nec risus pharetra diam sed vestibulum."
  },
  {
    question:"¿Qué vestimenta médica se requiere durante la asistencia a quirófano?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Pharetra sed massa in elit. Ullamcorper lectus massa tellus donec facilisis in. Tristique nunc eu pharetra eget tellus pellentesque nisl curabitur. Justo neque amet nec risus pharetra diam sed vestibulum."
  },
  { question:"¿Se entrega certificado oficial de participación?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Pharetra sed massa in elit. Ullamcorper lectus massa tellus donec facilisis in. Tristique nunc eu pharetra eget tellus pellentesque nisl curabitur. Justo neque amet nec risus pharetra diam sed vestibulum."
  },
]

export function InscribirmeFaq() {
  return (
    <section className="pt-section pb-8 px-8 md:px-8 bg-bg-light">
      <div className="max-w-content mx-auto">
        <h2 className="font-maven text-h4 font-semibold mb-8 letter-spacing--2 text-content-footer-section1-follow text-zinc-900 text-center">
          ¿Dudas?<br></br>
          Estamos aquí para ayudarte</h2>
        <Accordion
          id="faq-accordion"
          type="multiple"
          defaultValue={[faqs[0]?.question].filter(Boolean) as string[]}
          className="w-full px-4 md:px-6"
        >
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className={index === faqs.length - 1 ? "border-0" : undefined}
            >
              <AccordionTrigger className="text-left text-base text-zinc-900 font-inter hover:no-underline hover:text-brand-500 data-[state=open]:text-brand-500 data-[state=open]:active py-5 font-medium letter-spacing--2">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-zinc-500 font-inter">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
