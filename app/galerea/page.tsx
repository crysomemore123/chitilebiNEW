// app/galerea/page.tsx

"use client"; // Required for state and click events

import React, { useState } from "react";
import Image from "next/image";
import SectionHeader from "../_components/SectionHeader";

// Lightbox imports
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import the plugin for video support
import { Video } from "yet-another-react-lightbox/plugins";

// --- FIX: Define the specific types for our gallery items to satisfy TypeScript ---
type ImageSlide = {
  src: string;
  type?: undefined;
};

type VideoSlide = {
  type: "video";
  poster: string;
  sources: {
    src: string;
    type: string;
  }[];
};

type GallerySlide = ImageSlide | VideoSlide;

// --- ALL YOUR IMAGE AND VIDEO PATHS ARE NOW INCLUDED ---
const galleryData: Record<string, GallerySlide[]> = {
  first: [
    // Images 1 to 22 (with .png updates)
    { src: "/galerea/1.png" }, { src: "/galerea/2.jpg" }, { src: "/galerea/3.jpg" },
    { src: "/galerea/4.jpg" }, { src: "/galerea/5.jpg" }, { src: "/galerea/6.png" },
    { src: "/galerea/7.jpg" }, { src: "/galerea/8.jpg" }, { src: "/galerea/9.jpg" },
    { src: "/galerea/10.jpg" }, { src: "/galerea/11.jpg" }, { src: "/galerea/12.jpg" },
    { src: "/galerea/13.jpg" }, { src: "/galerea/14.jpg" }, { src: "/galerea/15.jpg" },
    { src: "/galerea/16.jpg" }, { src: "/galerea/17.jpg" }, { src: "/galerea/18.jpg" },
    { src: "/galerea/19.jpg" }, { src: "/galerea/20.jpg" }, { src: "/galerea/21.jpg" },
    { src: "/galerea/22.jpg" },
  ],
  second: [
    // Images 23 to 44 (with .png updates)
    { src: "/galerea/23.jpg" }, { src: "/galerea/24.jpg" }, { src: "/galerea/25.jpg" },
    { src: "/galerea/26.png" }, { src: "/galerea/27.jpg" }, { src: "/galerea/28.png" },
    { src: "/galerea/29.png" }, { src: "/galerea/30.png" }, { src: "/galerea/31.jpg" },
    { src: "/galerea/32.jpg" }, { src: "/galerea/33.jpg" }, { src: "/galerea/34.jpg" },
    { src: "/galerea/35.jpg" }, { src: "/galerea/36.jpg" }, { src: "/galerea/37.jpg" },
    { src: "/galerea/38.jpg" }, { src: "/galerea/39.jpg" }, { src: "/galerea/40.jpg" },
    { src: "/galerea/41.jpg" }, { src: "/galerea/42.jpg" }, { src: "/galerea/43.jpg" },
    { src: "/galerea/44.jpg" },
  ],
  third: [
    // Images 45 to 64, then the video, then 66
    { src: "/galerea/45.jpg" }, { src: "/galerea/46.jpg" }, { src: "/galerea/47.jpg" },
    { src: "/galerea/48.jpg" }, { src: "/galerea/49.jpg" }, { src: "/galerea/50.jpg" },
    { src: "/galerea/51.jpg" }, { src: "/galerea/52.jpg" }, { src: "/galerea/53.jpg" },
    { src: "/galerea/54.jpg" }, { src: "/galerea/55.jpg" }, { src: "/galerea/56.jpg" },
    { src: "/galerea/57.jpg" }, { src: "/galerea/58.jpg" }, { src: "/galerea/59.jpg" },
    { src: "/galerea/60.jpg" }, { src: "/galerea/61.jpg" }, { src: "/galerea/62.jpg" },
    { src: "/galerea/63.jpg" }, { src: "/galerea/64.jpg" },
    {
      type: "video",
      poster: "/galerea/65-thumbnail.png",
      sources: [{ src: "/galerea/65.mp4", type: "video/mp4" }],
    },
    { src: "/galerea/66.jpg" },
  ],
  fourth: [
    // Images 67 to 87
    { src: "/galerea/67.jpg" }, { src: "/galerea/68.jpg" }, { src: "/galerea/69.jpg" },
    { src: "/galerea/70.jpg" }, { src: "/galerea/71.jpg" }, { src: "/galerea/72.jpg" },
    { src: "/galerea/73.jpg" }, { src: "/galerea/74.jpg" }, { src: "/galerea/75.jpg" },
    { src: "/galerea/76.jpg" }, { src: "/galerea/77.jpg" }, { src: "/galerea/78.jpg" },
    { src: "/galerea/79.jpg" }, { src: "/galerea/80.jpg" }, { src: "/galerea/81.jpg" },
    { src: "/galerea/82.jpg" }, { src: "/galerea/83.jpg" }, { src: "/galerea/84.jpg" },
    { src: "/galerea/85.jpg" }, { src: "/galerea/86.jpg" }, { src: "/galerea/87.jpg" },
  ],
};

type GallerySection = keyof typeof galleryData;

// Reusable Gallery Component
function Gallery({
  images,
  onImageClick,
}: {
  // --- FIX: Use the new GallerySlide type instead of any[] ---
  images: GallerySlide[];
  onImageClick: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
      {images.map((item, idx) => (
        <div
          key={idx}
          className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-square group"
          onClick={() => onImageClick(idx)}
        >
          <Image
            src={item.poster || item.src}
            alt={`Gallery item ${idx + 1}`}
            width={500}
            height={500}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
          />
          {item.type === "video" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-colors duration-300">
              <svg className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Main Page Component
export default function GalereaPage() {
  const [lightboxState, setLightboxState] = useState<{
    open: boolean;
    index: number;
    // --- FIX: Use the new GallerySlide type instead of any[] ---
    slides: GallerySlide[];
  }>({
    open: false,
    index: 0,
    slides: [],
  });

  const openLightboxForSection = (section: GallerySection, index: number) => {
    setLightboxState({
      open: true,
      index: index,
      slides: galleryData[section],
    });
  };

  return (
    <section className="mx-auto max-w-[70rem] px-4 py-8">
      {/* First Gallery */}
      <SectionHeader>გალერეა</SectionHeader>
      <div className="mt-8">
        <Gallery
          images={galleryData.first}
          onImageClick={(index) => openLightboxForSection("first", index)}
        />
      </div>

      {/* Second Gallery */}
      <SectionHeader>საჩითილე მეურნეობა</SectionHeader>
      <div className="mt-8">
        <Gallery
          images={galleryData.second}
          onImageClick={(index) => openLightboxForSection("second", index)}
        />
      </div>

      {/* Third Gallery */}
      <SectionHeader>ყვავილები</SectionHeader>
      <div className="mt-8">
        <Gallery
          images={galleryData.third}
          onImageClick={(index) => openLightboxForSection("third", index)}
        />
      </div>

      {/* Fourth Gallery */}
      <SectionHeader>ჩვენი ყვავილების გამოყენება ღია გრუნტზე</SectionHeader>
      <div className="mt-8">
        <Gallery
          images={galleryData.fourth}
          onImageClick={(index) => openLightboxForSection("fourth", index)}
        />
      </div>

      {/* Lightbox component that serves all galleries */}
      <Lightbox
        open={lightboxState.open}
        close={() => setLightboxState((prev) => ({ ...prev, open: false }))}
        index={lightboxState.index}
        slides={lightboxState.slides}
        plugins={[Video]}
      />
    </section>
  );
}