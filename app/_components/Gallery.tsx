import Image from "next/image";

interface GalleryProps {
  title: string;
  images: string[];
}

function Gallery({ title, images }: GalleryProps) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-64">
            <Image src={image} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;