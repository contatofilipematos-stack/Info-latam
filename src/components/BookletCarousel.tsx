import React, { useState, useEffect, useRef, useCallback } from 'react';

export const BOOKLET_PAGES = [
  {
    id: 1,
    alt: 'Página del Librito de Oraciones 1',
    url: 'https://iili.io/CSeHjyX.md.jpg',
  },
  {
    id: 2,
    alt: 'Página del Librito de Oraciones 2',
    url: 'https://iili.io/CSeHeZG.md.jpg',
  },
  {
    id: 3,
    alt: 'Página del Librito de Oraciones 3',
    url: 'https://iili.io/CSeHNun.md.jpg',
  },
  {
    id: 4,
    alt: 'Página del Librito de Oraciones 4',
    url: 'https://iili.io/CSeHOjs.md.jpg',
  },
  {
    id: 5,
    alt: 'Página del Librito de Oraciones 5',
    url: 'https://iili.io/CSeHvnf.md.jpg',
  },
  {
    id: 6,
    alt: 'Página del Librito de Oraciones 6',
    url: 'https://iili.io/CSeH8G4.md.jpg',
  },
  {
    id: 7,
    alt: 'Página del Librito de Oraciones 7',
    url: 'https://iili.io/CSeHS6l.md.jpg',
  },
];

export const BookletCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalPages = BOOKLET_PAGES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  }, [totalPages]);

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
    <div className="w-full max-w-md mx-auto overflow-hidden">
      <div className="relative w-full overflow-hidden rounded-2xl shadow-sm">
        <div 
          className="flex w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {BOOKLET_PAGES.map((page, idx) => (
            <div 
              key={page.id} 
              className="w-full flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={page.url}
                alt={page.alt}
                className="w-full h-auto object-cover select-none block"
                loading={idx === 0 ? "eager" : "lazy"}
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookletCarousel;
