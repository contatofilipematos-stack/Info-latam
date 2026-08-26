import React from 'react';

export const SACRED_ART_MODELS = [
  {
    id: 1,
    alt: 'Quadro Sagrada Família em Alto Relevo 3D',
    url: 'https://iili.io/CDQs4O7.md.webp',
  },
  {
    id: 2,
    alt: 'Presépio Sagrada Família com Estrela Guia 3D',
    url: 'https://iili.io/CDQsrRS.md.webp',
  },
  {
    id: 3,
    alt: 'Terço Católico Esculpido em Detalhe 3D',
    url: 'https://iili.io/CDQsgJ2.md.webp',
  },
  {
    id: 4,
    alt: 'Oratório Hexagonal Iluminado com Reis Magos 3D',
    url: 'https://iili.io/CDQsSUl.md.webp',
  },
  {
    id: 5,
    alt: 'Letreiro e Peça Decorativa Sacra 3D',
    url: 'https://iili.io/CDQssWu.md.webp',
  },
  {
    id: 6,
    alt: 'Modelo de Arte Sacra 3D 6',
    url: 'https://iili.io/CDQsLib.md.webp',
  },
  {
    id: 7,
    alt: 'Modelo de Arte Sacra 3D 7',
    url: 'https://iili.io/CDQst0x.md.webp',
  },
  {
    id: 8,
    alt: 'Modelo de Arte Sacra 3D 8',
    url: 'https://iili.io/CDQsDUQ.md.webp',
  },
  {
    id: 9,
    alt: 'Modelo de Arte Sacra 3D 9',
    url: 'https://iili.io/CDQsmJV.md.webp',
  },
  {
    id: 10,
    alt: 'Modelo de Arte Sacra 3D 10',
    url: 'https://iili.io/CDQsp5B.md.webp',
  },
  {
    id: 11,
    alt: 'Modelo de Arte Sacra 3D 11',
    url: 'https://iili.io/CDQLJzF.md.webp',
  },
  {
    id: 12,
    alt: 'Modelo de Arte Sacra 3D 12',
    url: 'https://iili.io/CDQLdWg.md.webp',
  },
];

// Duplicamos a lista para criar um loop infinito contínuo e suave sem cortes
const CAROUSEL_ITEMS = [...SACRED_ART_MODELS, ...SACRED_ART_MODELS];

export const BookletCarousel: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden py-3 select-none">
      {/* Suaves máscaras de desvanecimento nas bordas claras da página */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-sky-50/70 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-sky-50/70 to-transparent z-10" />

      {/* Faixa animada contínua e suave (marquise automática sem botões) */}
      <div className="flex w-max gap-3 sm:gap-4.5 animate-infinite-scroll hover:[animation-play-state:paused]">
        {CAROUSEL_ITEMS.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex-shrink-0 w-[185px] xs:w-[210px] sm:w-[250px] md:w-[275px] aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-md border border-stone-200/70 transform-gpu transition-transform duration-300"
          >
            <img
              src={item.url}
              alt={item.alt}
              className="w-full h-full object-cover select-none pointer-events-none block"
              loading={idx < 4 ? 'eager' : 'lazy'}
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookletCarousel;
