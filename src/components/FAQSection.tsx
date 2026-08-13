import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export interface FAQItemData {
  id: number;
  question: string;
  answer: string;
}

const faqList: FAQItemData[] = [
  {
    id: 1,
    question: "¿Cómo funciona el envío? ¿El material llega por correo postal?",
    answer: "¡No! El envío es 100% digital e inmediato. Inmediatamente después de la confirmación del pago, recibes en tu e-mail y directo en tu WhatsApp el enlace para descargar todos los libros y materiales en PDF de altísima resolución. ¡Sin gastos de envío y sin esperar por el correo!"
  },
  {
    id: 2,
    question: "¿Cómo hago para imprimir el librito en casa?",
    answer: "¡Es súper sencillo! El material se proporciona en archivo PDF estándar en hoja A4 común. Puedes imprimirlo directamente en tu impresora casera (a color o en blanco y negro) o guardar el archivo en una memoria USB para imprimirlo en cualquier imprenta rápida de tu ciudad."
  },
  {
    id: 3,
    question: "¿El valor es un pago único o una mensualidad?",
    answer: "¡Es un pago ÚNICO y promocional! Pagas una sola vez y obtienes acceso vitalicio a todo el kit del Librito de Oraciones y a todos los bonos incluidos. No existe ninguna suscripción ni mensualidad oculta."
  },
  {
    id: 4,
    question: "¿Para qué edad se recomienda el librito?",
    answer: "El material fue elaborado con mucho cariño para niños de 4 a 11 años. Las ilustraciones tiernas y coloridas encantan a los más pequeños, mientras que el lenguaje lúdico y las oraciones enseñan la fe y el hábito diario de orar a los más grandes."
  },
  {
    id: 5,
    question: "¿Puedo imprimirlo para mis alumnos de Catequesis o de la Escuela?",
    answer: "¡Por supuesto! Adquieres la licencia para uso familiar y parroquial. Puedes descargar el PDF e imprimir cuantas copias necesites para tus hijos, nietos, ahijados o para todo tu grupo de catequesis sin ningún costo extra."
  },
  {
    id: 6,
    question: "¿Qué viene incluido en el Kit Completo?",
    answer: "Al asegurar tu oferta, recibes: 1. Librito de Oraciones Principal a Color en PDF, 2. Versión en contornos para Colorear, 3. Diario de Hábitos y Oratorio Infantil, 4. Tarjetas de Bolsillo con las Oraciones, y 5. Guía de los 10 Mandamientos para Niños."
  },
  {
    id: 7,
    question: "¿La compra en el sitio web es segura?",
    answer: "¡Totalmente segura! Utilizamos la misma tecnología de encriptación que los principales bancos internacionales. El proceso es rápido, confidencial y con liberación automatizada e inmediata de tu acceso."
  },
  {
    id: 8,
    question: "¿Cómo funciona la Garantía de 7 Días?",
    answer: "Ofrecemos Garantía Incondicional de 7 días enteros. Si tú o tus pequeños no quedan encantados con el material, solo envíanos un mensaje por WhatsApp o e-mail y te devolveremos el 100% de tu inversión sin burocracia."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1); // First question open by default

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-12 px-5 bg-white border-t border-stone-100 font-sans">
      <div className="max-w-md sm:max-w-[500px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-sky-50 text-sky-700 text-[11px] font-black rounded-full border border-sky-100 uppercase tracking-wider font-heading mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" /> PREGUNTAS FRECUENTES (FAQ)
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] font-heading leading-tight tracking-tight">
            Resuelve tus Dudas
          </h3>
          <p className="text-xs sm:text-[13px] text-stone-500 mt-2 font-sans max-w-sm mx-auto leading-relaxed">
            Respuestas claras y transparentes para mamás, papás, abuelos y catequistas:
          </p>
        </div>

        {/* FAQ Accordions List */}
        <div className="space-y-3">
          {faqList.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id} 
                className="bg-white rounded-2xl border border-sky-100/60 shadow-[0_4px_15px_rgba(15,23,42,0.015)] transition-all duration-300 overflow-hidden text-left"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                >
                  <span className="text-[#0f172a] font-black text-[13px] sm:text-[14px] font-heading leading-snug tracking-tight">
                    {faq.question}
                  </span>

                  <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 text-[#e5007d] transition-all duration-300">
                    <ChevronDown className={`w-3.5 h-3.5 text-[#e5007d] stroke-[3] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {/* Drawer Answer Body */}
                <div 
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isOpen ? '240px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-5 pb-4.5 pt-1 border-t border-stone-100/50">
                    <p className="text-[12px] sm:text-[13px] text-stone-500 font-sans leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Support Box */}
        <div className="mt-8 p-4 sm:p-5 bg-emerald-50/70 border border-emerald-200/60 rounded-2xl flex items-center justify-between gap-3 shadow-3xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <MessageCircle className="w-4 h-4 fill-white/20" />
            </div>
            <div className="text-left">
              <p className="text-xs font-black text-emerald-950 font-heading">¿Aún tienes alguna duda?</p>
              <p className="text-[11px] text-emerald-700 font-sans">Habla directamente con nuestro equipo por WhatsApp.</p>
            </div>
          </div>
          <a 
            href="https://wa.me/?text=%C2%A1Hola%21+Tengo+una+duda+sobre+el+Librito+de+Oraciones+Infantil" 
            target="_blank" 
            rel="noreferrer"
            className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold rounded-xl flex-shrink-0 font-heading shadow-xs transition-transform active:scale-95"
          >
            Hablar por Whats
          </a>
        </div>

      </div>
    </section>
  );
}
