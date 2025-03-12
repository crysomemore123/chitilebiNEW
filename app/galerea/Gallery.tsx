import Image from "next/image";
import { galleryImages, galleryImagesSecond, galleryImagesThird } from "@/app/_utils/constants";

function Gallery({ section }: { section: "first" | "second" | "third" }) {
  let imagesToShow: string[] = [];

  if (section === "first") imagesToShow = galleryImages;
  else if (section === "second") imagesToShow = galleryImagesSecond;
  else if (section === "third") imagesToShow = galleryImagesThird;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full place-items-center my-4">
      {imagesToShow.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Gallery Image ${index + 1}`}
          width={500} // Adjust this value based on your image sizes
          height={300} // Adjust this value based on your image sizes
          className="w-full h-auto rounded-lg"
        />
      ))}
    </div>
  );
}

export default Gallery;
