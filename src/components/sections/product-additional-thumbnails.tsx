"use client";

import { useState } from "react";
import Image from "next/image";

type Thumbnail = {
  id: string;
  src: string;
  alt: string;
};

const thumbnailData: Thumbnail[] = [
  {
    id: "console-front",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_2X_684352-MLA75438155112_042024-O-16.webp",
    alt: "PlayStation 2 console front view",
  },
  {
    id: "console-angle",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_2X_945710-MLA78565442107_082024-O-17.webp",
    alt: "PlayStation 2 console angled view",
  },
  {
    id: "controller",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_2X_789102-MLA78861597683_092024-O-18.webp",
    alt: "PlayStation 2 controller",
  },
  {
    id: "console-back",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_2X_645547-MLA77738283227_072024-O-19.webp",
    alt: "PlayStation 2 console back view with ports",
  },
  {
    id: "accessories",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_NQ_NP_2X_903857-MLA75438027504_042024-O-20.webp",
    alt: "PlayStation 2 accessories including cables and power adapter",
  },
  {
    id: "memory-card",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/images/D_Q_NP_842048-MLA95682163938_102025-F-15.webp",
    alt: "PlayStation 2 memory card",
  },
];

const ProductAdditionalThumbnails = () => {
  const [activeThumbnailId, setActiveThumbnailId] = useState(
    thumbnailData[0].id
  );

  return (
    <div className="flex flex-col gap-2">
      {thumbnailData.map((thumbnail) => {
        const isActive = activeThumbnailId === thumbnail.id;
        const baseClasses =
          "w-11 h-11 bg-white rounded-md overflow-hidden transition-all duration-200 ease-in-out card-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
        const activeClasses = "border-2 border-primary";
        const inactiveClasses = "border border-border hover:border-primary";

        return (
          <button
            key={thumbnail.id}
            onClick={() => setActiveThumbnailId(thumbnail.id)}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            aria-label={`View ${thumbnail.alt}`}
          >
            <Image
              src={thumbnail.src}
              alt={thumbnail.alt}
              width={44}
              height={44}
              className="object-contain w-full h-full"
            />
          </button>
        );
      })}
    </div>
  );
};

export default ProductAdditionalThumbnails;