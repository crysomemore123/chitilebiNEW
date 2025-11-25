'use client';
import { useEffect, useRef, useState } from 'react';

function Page() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsMapLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before it's visible
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl font-bold mb-4">კონტაქტი</h1>
      <div className="w-full max-w-4xl" ref={mapRef}>
        {isMapLoaded ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.3963923670344!2d44.70814517603852!3d41.927332922767434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404467264f98a231%3A0x30487cc9c7b8572d!2z4YOU4YOV4YOg4YOd4YOe4YOj4YOa4YOYIOGDqeGDmOGDl-GDmOGDmuGDlOGDkeGDmA!5e0!3m2!1ska!2sGE!4v1741378383317!5m2!1ska!2sGE"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        ) : (
          <div className="w-full h-[450px] bg-gray-200 flex items-center justify-center">
            <p className="text-gray-600">რუკის ჩატვირთვა...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;