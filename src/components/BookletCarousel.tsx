import React from 'react';

export const SETEMBRO_AMARELO_MODELS = [
  {
    id: 1,
    alt: 'Material Kit Setembro Amarelo 1',
    url: 'https://iili.io/nJogyNV.md.png',
  },
  {
    id: 2,
    alt: 'Material Kit Setembro Amarelo 2',
    url: 'https://iili.io/nJogmHx.md.png',
  },
  {
    id: 3,
    alt: 'Material Kit Setembro Amarelo 3',
    url: 'https://iili.io/nJogpAQ.md.png',
  },
  {
    id: 4,
    alt: 'Material Kit Setembro Amarelo 4',
    url: 'https://iili.io/nJogDSj.md.png',
  },
  {
    id: 5,
    alt: 'Material Kit Setembro Amarelo 5',
    url: 'https://iili.io/nJxaX6u.md.jpg',
  },
  {
    id: 6,
    alt: 'Material Kit Setembro Amarelo 6',
    url: 'https://iili.io/nJxawaj.md.jpg',
  },
  {
    id: 7,
    alt: 'Material Kit Setembro Amarelo 7',
    url: 'https://iili.io/nJxaj3b.md.webp',
  },
  {
    id: 8,
    alt: 'Material Kit Setembro Amarelo 8',
    url: 'https://iili.io/nJxaWGe.md.jpg',
  },
];

// Duplicamos os itens exatamente 2x para garantir o loop infinito 100% contínuo no translateX(-50%)
const CAROUSEL_ITEMS = [
  ...SETEMBRO_AMARELO_MODELS,
  ...SETEMBRO_AMARELO_MODELS,
];

export const BookletCarousel: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden py-3 select-none">
      {/* Suaves máscaras de desvanecimento nas bordas da página */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-sky-50/70 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-sky-50/70 to-transparent z-10" />

      {/* Carrossel contínuo com as novas fotos */}
      <div className="flex w-max gap-3 sm:gap-4.5 animate-infinite-scroll hover:[animation-play-state:paused]">
        {CAROUSEL_ITEMS.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex-shrink-0 w-[200px] xs:w-[220px] sm:w-[260px] md:w-[285px] aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-md border border-stone-200/70 transform-gpu transition-transform duration-300"
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

