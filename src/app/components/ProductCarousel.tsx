'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import type { StaticImageData } from "next/image";

type ProductCarouselProps = {
  images: (string | StaticImageData)[];
  altText: string;
};

export default function ProductCarousel({ images, altText }: ProductCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((src, index) => (
          <div key={index} className="flex-[0_0_100%] flex justify-center items-center">
            <Image
              src={typeof src === "string" ? src : src.src}
              alt={`${altText} - ${index + 1}`}
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}