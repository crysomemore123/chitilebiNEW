"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import firstImage from "@/public/slideshow/Slideshow 1.jpg";
import secondImage from "@/public/slideshow/Slideshow 2.jpg";
import thirdImage from "@/public/slideshow/Slideshow 3.jpg";
import fourthImage from "@/public/slideshow/Slideshow 4.jpg";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [firstImage, secondImage, thirdImage, fourthImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex h-full">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative aspect-[3/2] h-[40rem] sm:h-[78.2rem] duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="-z-20 w-full md:h-[782px] object-cover brightness-75"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
