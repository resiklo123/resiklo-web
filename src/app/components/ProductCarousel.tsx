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
    onSelect(); // initialize
  }, [emblaApi, onSelect]);

  return (
    <div>
      {/* ─── Main Carousel ─── */}
      <div className="overflow-hidden mb-4" ref={emblaRef}>
        <div className="flex">
        {images.map((src, index) => {
          const isStatic  = typeof src !== 'string';
          const url       = isStatic ? src.src : src;
          const natWidth  = isStatic ? src.width  : 0;
          const natHeight = isStatic ? src.height : 0;

          // thresholds = your carousel frame’s size
          const FRAME_WIDTH  = 600;
          const FRAME_HEIGHT = 500;
          const isSmall      = isStatic && natWidth < FRAME_WIDTH && natHeight < FRAME_HEIGHT;

          return (
            <div
              key={index}
              className="min-w-full relative w-full h-96 sm:h-[500px] flex justify-center items-center"
            >
              {isSmall ? (
                <Image
                  src={url}
                  alt={`${altText} — ${index + 1}`}
                  width={natWidth}
                  height={natHeight}
                  className="object-contain object-center"
                />
              ) : (
                <Image
                  src={url}
                  alt={`${altText} — ${index + 1}`}
                  fill
                  className="object-contain object-center"
                />
              )}
            </div>
          );
        })}
        </div>
      </div>

      {/* ─── Thumbnail Row ─── */}
      <div className="flex gap-2 overflow-x-auto">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`flex-none border-2 ${
              index === selectedIndex ? 'border-blue-500' : 'border-transparent'
            } rounded`}
          >
            <Image
              src={typeof src === 'string' ? src : src.src}
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
