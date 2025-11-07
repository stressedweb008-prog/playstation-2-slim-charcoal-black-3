"use client";

import { useState } from "react";
import Image from "next/image";

const productImages = [
  {
    id: 1,
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_Q_NP_783443-MLA78158255856_082024-R-2.webp",
    original: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_783443-MLA78158255856_082024-O-3.webp",
    alt: "PlayStation 2 Slim console front view with controller port",
  },
  {
    id: 2,
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_Q_NP_842048-MLA95682163938_102025-R-4.webp",
    original: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_842048-MLA95682163938_102025-O-5.webp",
    alt: "PlayStation 2 Slim console three-quarter view",
  },
  {
    id: 3,
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_Q_NP_839790-MLA84477375987_052025-R-6.webp",
    original: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_839790-MLA84477375987_052025-O-7.webp",
    alt: "PlayStation 2 Slim console top view",
  },
  {
    id: 4,
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_Q_NP_719572-MLA84180784770_052025-R-8.webp",
    original: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_719572-MLA84180784770_052025-O-9.webp",
    alt: "PlayStation 2 Slim console back view showing ports",
  },
  {
    id: 5,
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_Q_NP_923283-MLA40388393976_012020-R-10.webp",
    original: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_923283-MLA40388393976_012020-O-11.webp",
    alt: "PlayStation 2 Slim console side view",
  },
  {
    id: 6,
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_Q_NP_616735-MLA78386704865_082024-R-12.webp",
    original: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_616735-MLA78386704865_082024-O-13.webp",
    alt: "Accessories included with the PlayStation 2 Slim",
  },
];

export default function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <figure
        className="relative w-full max-w-[444px] h-auto mx-auto aspect-square group overflow-hidden bg-background-primary rounded-md"
        role="group"
      >
        <Image
          src={productImages[activeIndex].original}
          alt={productImages[activeIndex].alt}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 444px"
          className="object-contain p-2 transition-transform duration-300 ease-in-out group-hover:scale-105"
          priority={true}
        />
      </figure>

      <div className="mt-4">
        <div className="w-full overflow-x-auto">
          <div
            role="list"
            className="flex items-center justify-center gap-x-2 px-1 pb-1"
          >
            {productImages.map((image, index) => (
              <div key={image.id} className="w-12 h-12 flex-shrink-0">
                <button
                  aria-label={`View image ${index + 1} of ${
                    productImages.length
                  }`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-full w-full rounded-md border-2 p-px flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                    activeIndex === index
                      ? "border-primary"
                      : "border-transparent hover:border-border-strong"
                  }`}
                >
                  <div className="relative w-[44px] h-[44px]">
                    <Image
                      src={image.thumbnail}
                      alt={`Thumbnail of ${image.alt}`}
                      fill
                      sizes="44px"
                      className="object-contain w-full h-full rounded-sm"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <a
          href="#"
          className="text-sm text-primary hover:text-interactive-hover"
        >
          Ver mais imagens
        </a>
      </div>
    </div>
  );
}