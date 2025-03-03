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
    <div
      className="flex h-screen transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {images.map((src, index) => (
        <div key={index} className="relative h-full w-full flex-shrink-0">
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="-z-20 absolute inset-0 object-cover brightness-75"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
