"use client";

import { useState } from "react";
import { galleryImages } from "../../app/_utils/constants";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

function GalleryImageSlider({ index }: { index: number }) {
  const [currentIndex, setCurrentIndex] = useState(index);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative h-[80vh] w-[80vw] overflow-hidden">
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {galleryImages.map((src, index) => (
          <div key={index} className="relative h-full w-full flex-shrink-0">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="absolute inset-0 object-cover"
            />
          </div>
        ))}
      </div>

      <Icon
        icon="bxs:chevron-left"
        onClick={prevSlide}
        className="absolute left-0 px-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 h-full text-gray-800 text-7xl hover:text-gray-950 hover:bg-white/40 duration-300 transition-all cursor-pointer"
      />
      <Icon
        icon="bxs:chevron-right"
        onClick={nextSlide}
        className="absolute right-0 px-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 h-full text-gray-800 text-7xl hover:text-gray-950 hover:bg-white/40 duration-300 transition-all cursor-pointer"
      />
    </div>
  );
}

export default GalleryImageSlider;
