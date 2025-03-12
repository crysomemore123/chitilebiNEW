"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full flex-shrink-0">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1920}  // Default width for larger screens
              height={1080} // Default height for larger screens
              sizes="(max-width: 768px) 100vw, 1920px"  // Adjusts image size for different screen widths
              quality={100} // Ensures the highest image quality
              priority={index === 0} // Prioritize loading the first image
              objectFit="cover"  // Ensures the image fills its container while preserving aspect ratio
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
