'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image, { StaticImageData } from 'next/image';
import { useCallback, useEffect, useState } from 'react';

type ProductCarouselProps = {
  images: (string | StaticImageData)[];
  altText: string;
};

export default function ProductCarousel({ images, altText }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Sync selected index on scroll
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Scroll to a selected thumbnail
  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect(); // Init on mount
  }, [emblaApi, onSelect]);

  return (
    <div>
      {/* Main Carousel */}
      <div className="overflow-hidden mb-4" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] flex justify-center items-center h-[400px]">
              <Image
                src={typeof src === "string" ? src : src.src}
                alt={`${altText} - ${index + 1}`}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Row */}
      <div className="flex gap-2 overflow-x-auto">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`border-2 ${
              index === selectedIndex ? 'border-blue-500' : 'border-transparent'
            } p-1 rounded`}
          >
            <Image
              src={typeof src === "string" ? src : src.src}
              alt={`${altText} Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}