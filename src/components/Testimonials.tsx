import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ShieldCheck } from 'lucide-react';

export const TESTIMONIAL_IMAGES = [
  {
    id: 1,
    alt: 'Testimonio 1',
    url: 'https://iili.io/CSe03Yl.md.jpg',
  },
  {
    id: 2,
    alt: 'Testimonio 2',
    url: 'https://iili.io/CSeOPDJ.md.jpg',
  },
  {
    id: 3,
    alt: 'Testimonio 3',
    url: 'https://iili.io/CSeO6Na.md.jpg',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalImages = TESTIMONIAL_IMAGES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  // Auto play interval (3.5 seconds per slide)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [nextSlide]);

  return (
    <div className="w-full max-w-md mx-auto py-8 px-4 font-sans">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full border border-emerald-100 uppercase tracking-wider font-heading shadow-3xs mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" /> TESTIMONIOS REALES Y ESPONTÁNEOS
        </span>
        <h3 className="text-2xl font-bold text-sky-pastel-950 font-heading leading-snug tracking-tight">
          ¡Quienes Ya Compraron Lo Recomiendan!
        </h3>
        <p className="text-[12px] sm:text-xs text-stone-550 mt-2 font-sans max-w-xs mx-auto leading-relaxed">
          Sin montajes ni testimonios falsos. A continuación, mensajes sinceros enviados por quienes confiaron y transformaron la oración en su hogar:
        </p>
      </div>

      {/* Infinite Auto-playing Testimonials Carousel */}
      <div className="w-full max-w-md mx-auto overflow-hidden">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-sm">
          <div 
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TESTIMONIAL_IMAGES.map((img, idx) => (
              <div 
                key={img.id} 
                className="w-full flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-auto object-cover select-none block"
                  loading={idx === 0 ? "eager" : "lazy"}
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
