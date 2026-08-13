import React, { useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Sparkles, Heart, Star, Cloud } from 'lucide-react';
import { BookletPage } from '../types';

interface BookletPreviewProps {
  coverImageUrl: string;
}

const previewPages: BookletPage[] = [
  {
    pageNumber: 1,
    title: "Querido Dios",
    subTitle: "Portada del Librito Ilustrado",
    contentLines: [
      "🌸 Colección Pequeñas Semillas de Fe 🌸",
      "",
      "MIS PRIMERAS CONVERSACIONES CON DIOS",
      "",
      "Una guía ilustrada amorosa con oraciones del día a día, el Santo Rosario en rimas suaves y dulces dibujos para colorear.",
      "",
      "❤ ¡Ama, Cree y Reza Sonriendo!"
    ],
    illustrationDesc: "Marco acuarela celeste con angelitos y estrellas fugaces",
    graphicStyle: "angel"
  },
  {
    pageNumber: 2,
    title: "Mi Oración de la Mañana",
    subTitle: "Al despertar con el corazón alegre",
    contentLines: [
      "☀ DIOS PADRE:",
      "¡Gracias por un día hermoso de sol! Bendice mis ojitos para ver el bien, mi boquita para decir palabras dulces, y mis pies para caminar en tu amor. Santo Ángel del Señor, protégeme hoy. Amén."
    ],
    illustrationDesc: "Sol sonriente sobre nubes afelpadas en acuarela",
    graphicStyle: "candle"
  },
  {
    pageNumber: 3,
    title: "El Rosario de los Pequeños",
    subTitle: "Explicado de manera suave y dulce",
    contentLines: [
      "Cómo rezar el rosario con María:",
      "✨ Señal de la Cruz: Toca la frente, el pecho y los hombros despacio, sintiendo el abrazo de Jesús.",
      "✨ Cuentita Blanca: Reza 1 Padre Nuestro (Agradeciendo por nuestra hermosa familia).",
      "✨ Cuentita Azul: Ofrece 1 Ave María (Dando un besito de amor a la Mamita del Cielo)."
    ],
    illustrationDesc: "Cuentas del rosario en forma de corazones y nubecitas azules",
    graphicStyle: "rosary"
  },
  {
    pageNumber: 4,
    title: "Corazoncito Limpio",
    subTitle: "Preparando el Alma para la Confesión Infantil",
    contentLines: [
      "Preguntitas dulces para hacer con Jesús antes de dormir:",
      "🌸 ¿Guardé mis juguetes con amor y sin reclamar?",
      "🌸 ¿Ayudé a mis amiguitos en la escuela?",
      "🌸 ¿Dije la verdad a papá y a mamá hoy?",
      "🌸 ¿Recé a mi Santo Ángel con cariño?"
    ],
    illustrationDesc: "Un angelito sosteniendo un corazón brillante de estrellas",
    graphicStyle: "cross"
  },
  {
    pageNumber: 5,
    title: "Actividades y Pintura",
    subTitle: "Jugar y fijar el amor de Dios",
    contentLines: [
      "🎨 Lo que vas a encontrar en el Kit Completo:",
      "• Páginas enteras de dibujos infantiles para colorear",
      "• Une los puntos con la palomita de la paz",
      "• Laberinto de la ovejita perdida volviendo al Buen Pastor",
      "",
      "¡Colorear lo Sagrado ayuda a nuestros recuerdos a guardar la fe!"
    ],
    illustrationDesc: "Jesús abraza a una ovejita tierna para que los niños la pinten",
    graphicStyle: "dove"
  }
];

export default function BookletPreview({ coverImageUrl }: BookletPreviewProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const nextPage = () => {
    if (currentPageIndex < previewPages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const prevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const activePage = previewPages[currentPageIndex];

  return (
    <div className="w-full max-w-md mx-auto py-4 font-sans">
      <div className="text-center mb-5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-pastel-100 text-sky-pastel-700 text-xs font-bold rounded-full border border-sky-pastel-200">
          <BookOpen className="w-3.5 h-3.5" /> ECHA UN VISTAZO A LAS PÁGINAS POR DENTRO
        </span>
        <h3 className="text-lg font-bold text-sky-pastel-900 mt-1.5 font-heading">Lúdico, Delicado y de Fácil Lectura</h3>
        <p className="text-xs text-stone-500">Toca o arrastra para hojear el librito virtual simulado:</p>
      </div>

      {/* Book Layout Simulator - Light blue, white, feminine look */}
      <div className="relative bg-gradient-to-r from-sky-pastel-100 via-sky-pastel-50 to-sky-pastel-100 p-4 pt-6 pb-9 rounded-3xl shadow-lg border-2 border-sky-pastel-200/80">
        
        {/* Book spine simulation rings (feminine binder style) */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-5 bg-gradient-to-r from-white/20 via-sky-pastel-200 to-white/20 z-20 flex flex-col justify-around py-8 pointer-events-none">
          <div className="w-full h-1 bg-sky-pastel-300 rounded"></div>
          <div className="w-full h-1 bg-sky-pastel-300 rounded"></div>
          <div className="w-full h-1 bg-sky-pastel-300 rounded"></div>
          <div className="w-full h-1 bg-sky-pastel-300 rounded"></div>
          <div className="w-full h-1 bg-sky-pastel-300 rounded"></div>
        </div>

        {/* Paper Page */}
        <div className="bg-white min-h-[350px] rounded-2xl shadow-sm border border-sky-pastel-100 p-5 pt-8 flex flex-col justify-between relative overflow-hidden">
          
          {/* Subtle star decorations behind */}
          <div className="absolute top-2 right-2 opacity-15">
            <Star className="w-5 h-5 text-sky-pastel-400 fill-sky-pastel-300" />
          </div>
          <div className="absolute bottom-12 left-2 opacity-15">
            <Cloud className="w-6 h-6 text-sky-pastel-400 fill-sky-pastel-300" />
          </div>

          {/* Golden/Blue border internal frame */}
          <div className="absolute inset-2.5 border border-dashed border-sky-pastel-200 rounded-xl pointer-events-none opacity-60"></div>

          {/* Heading */}
          <div className="z-10 text-center">
            {currentPageIndex === 0 && (
              <div className="mx-auto w-16 h-20 mb-3 bg-sky-pastel-50 border border-sky-pastel-200 rounded-lg shadow-2xs flex items-center justify-center overflow-hidden">
                <img 
                  src={coverImageUrl} 
                  alt="Portada del Librito Semilla de Fe" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            <span className="text-[9px] font-bold text-pink-500 uppercase tracking-wider block font-heading">
              {activePage.subTitle}
            </span>
            <h4 className="text-sm font-bold text-sky-pastel-955 font-heading text-sky-pastel-900 border-b border-dashed border-sky-pastel-200 pb-1 px-3 mt-0.5">
              {activePage.title}
            </h4>
          </div>

          {/* Page Body Text content */}
          <div className="z-10 py-5 px-3 my-auto">
            {activePage.contentLines.map((line, idx) => (
              <p 
                key={idx} 
                className={`text-[11.5px] text-stone-600 leading-relaxed text-center font-sans ${line.trim() === '' ? 'h-2' : ''} ${idx === 2 && currentPageIndex === 0 ? 'text-xs font-bold text-sky-pastel-900' : ''}`}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Bottom illustration indicator description */}
          <div className="z-10 text-center text-[9px] text-sky-pastel-600 bg-sky-pastel-50/70 p-2 rounded-lg border border-sky-pastel-100 flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-pink-400 fill-pink-300 flex-shrink-0" />
            <span className="font-heading">Versión Física Idealizada: {activePage.illustrationDesc}</span>
          </div>

          {/* Page Number footer */}
          <div className="z-10 flex justify-between items-center text-[8px] font-mono text-stone-400 mt-2 px-1">
            <span>© SEMILLA DE FE</span>
            <span className="bg-sky-pastel-100 text-sky-pastel-700 font-bold px-2 py-0.5 rounded-full">Pág. {activePage.pageNumber}</span>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
          {previewPages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPageIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentPageIndex ? 'bg-sky-pastel-600 scale-125' : 'bg-sky-pastel-300/40 hover:bg-sky-pastel-300'}`}
              title={`Ver página ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-3 px-1">
        <button
          onClick={prevPage}
          disabled={currentPageIndex === 0}
          className={`flex items-center gap-1 text-[11px] font-bold py-1.5 px-3 rounded-full border transition ${currentPageIndex === 0 ? 'opacity-30 border-stone-200 text-stone-400' : 'bg-white border-sky-pastel-300 text-sky-pastel-700 hover:bg-sky-pastel-50'}`}
        >
          <ChevronLeft className="w-3.5 h-3.5" /> Anterior
        </button>

        <span className="text-[10px] text-stone-500 font-sans flex items-center gap-1 font-medium">
          <Heart className="w-3 h-3 text-pink-400 fill-pink-300" /> Hojea el PDF
        </span>

        <button
          onClick={nextPage}
          disabled={currentPageIndex === previewPages.length - 1}
          className={`flex items-center gap-1 text-[11px] font-bold py-1.5 px-3.5 rounded-full border transition ${currentPageIndex === previewPages.length - 1 ? 'opacity-30 border-stone-200 text-stone-400' : 'bg-sky-pastel-500 border-sky-pastel-500 text-white hover:bg-sky-pastel-600 shadow-xs'}`}
        >
          Siguiente <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
