"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import first from "@/public/Service/1.jpg";
import second from "@/public/Service/2.jpg";
import third from "@/public/Service/3.jpg";
import fourth from "@/public/Service/4.jpg";
import fifth from "@/public/Service/5.jpg";
import sixth from "@/public/Service/6.jpg";

// A simple SVG icon for the close button
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="-2 -2 28 28" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function Service() {
  const images = [first, second, third, fourth, fifth, sixth] as const;

  // State to manage the lightbox
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to open the lightbox at a specific image
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Function to show the next image
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to show the previous image
  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Effect to handle keyboard navigation (left/right arrows, escape key)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (event.key === "ArrowRight") {
        showNextImage();
      } else if (event.key === "ArrowLeft") {
        showPrevImage();
      } else if (event.key === "Escape") {
        closeLightbox();
      }
    };

    // Add event listener when the lightbox is opened
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup: remove event listener when the component unmounts or lightbox closes
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]); // Rerun effect if isLightboxOpen changes

  return (
    <Section className="bg-gray-100" idName="servisi">
      <SectionHeader>ჩვენი სერვისი</SectionHeader>

      <h3 className="flex justify-center text-lg tracking-tighter font-extrabold mb-10 mt-8 text-center">
        ჩვენ მოგაწვდით იმ ჩითილს, რომელიც გსურთ, როდესაც გსურთ და როგორი
        ფორმითაც გსურთ!
      </h3>

      <div className="text-[0.925rem] tracking-[-0.03em] leading-6 space-y-4">
        <p>
          „ევროპული ჩითილები“ დასპეციალიზებულია მხოლოდ მაღალხარისხიანი ჩითილების
          მოყვანაზე. ასორტიმენტშია – წიწაკა, პომიდორი, კიტრი, სალათა, ნესვი,
          საზამთრო, ბადრიჯანი, ბროკოლი, ყვავილოვანი კომბოსტო და მრავალი სხვა.
        </p>
        <p>
          გამოგიყვანთ პრაქტიკულად ნებისმიერი ბოსტნეულის ჩითილს. ფასი
          დამოკიდებულია მცენარის სახეობაზე, მოყვანის პერიოდზე, კასეტის ზომაზე და
          რიგ სხვა დეტალზე.
        </p>
        <p>
          ჩითილებს ვზრდით წინასწარი შეკვეთით, მაგრამ მაის-ივნისში გვაქვს
          გასაყიდად გამზადებული ჩითილებიც.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
        {images.map((img, index) => (
          // Changed Link to a div with an onClick handler
          <div
            key={index}
            className="relative block cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <div
              className={`relative w-full overflow-hidden rounded-lg ${
                index === 0 || index === 1 || index === 2
                  ? "aspect-[3/4]"
                  : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img}
                alt="Image of plants"
                fill
                className={`object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 ${
                  index === 2 ? "object-[center_55%]" : "object-top"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4" onClick={closeLightbox}>
          {/* Main image display area. The wrapping div was removed to allow the flex container
            to directly center the Image component. The stopPropagation call was moved here.
          */}
          <Image
            src={images[currentImageIndex]}
            alt="Lightbox view of plants"
            className="object-contain max-w-[90vw] max-h-[85vh] rounded-lg"
            placeholder="blur" // Optional: adds a blur-up effect
            onClick={(e) => e.stopPropagation()}
          />

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Close image viewer"
          >
            <CloseIcon />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-75 transition-opacity text-2xl"
            aria-label="Previous image"
          >
            &#8249;
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); showNextImage(); }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-75 transition-opacity text-2xl"
            aria-label="Next image"
          >
            &#8250;
          </button>
        </div>
      )}
    </Section>
  );
}

export default Service;
