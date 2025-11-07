"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from "@/lib/utils";

const photos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_2X_888910-MLA75593917543_042024-O-21.webp" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_2X_952815-MLA75593917557_042024-O-22.webp" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_2X_775574-MLA78565480333_082024-O-23.webp" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_2X_622627-MLA78861439549_092024-O-24.webp" },
];

const ProductReviewsPhotos = () => {
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScroll();
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);

      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.8; // Scroll by 80% of the container width
      el.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='mt-5'>
      <h3 className="text-[18px] text-text-primary mb-4 font-normal">Opiniões com fotos</h3>
      <div className="relative">
        <ul
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {photos.map((photo, index) => (
            <li key={index} className="snap-start flex-shrink-0 cursor-pointer">
              <div className="relative w-[120px] h-[120px]">
                <Image
                  src={photo.src}
                  alt={`Foto de avaliação de cliente ${index + 1}`}
                  width={120}
                  height={120}
                  className="rounded-md object-cover w-full h-full"
                />
                <div className="absolute bottom-2 left-2 flex items-center justify-center gap-1 bg-black/50 text-white rounded-full px-2 py-[2px] h-[22px]">
                  <span className="text-sm font-semibold leading-none">5</span>
                  <Star size={12} className="fill-[#FDB500] text-[#FDB500] leading-none" />
                </div>
              </div>
            </li>
          ))}
        </ul>
        {canScrollLeft && (
          <button
            onClick={() => handleScroll('left')}
            className={cn(
              "absolute top-1/2 -translate-y-1/2 left-[-24px] z-10",
              "w-12 h-12 bg-white rounded-full flex items-center justify-center",
              "shadow-[0_1px_4px_0_rgba(0,0,0,0.15)] hover:shadow-lg transition-shadow"
            )}
            aria-label="Rolar para esquerda"
          >
            <ChevronLeft className="w-6 h-6 text-interactive-primary" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => handleScroll('right')}
            className={cn(
              "absolute top-1/2 -translate-y-1/2 right-[-24px] z-10",
              "w-12 h-12 bg-white rounded-full flex items-center justify-center",
              "shadow-[0_1px_4px_0_rgba(0,0,0,0.15)] hover:shadow-lg transition-shadow"
            )}
            aria-label="Rolar para direita"
          >
            <ChevronRight className="w-6 h-6 text-interactive-primary" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductReviewsPhotos;