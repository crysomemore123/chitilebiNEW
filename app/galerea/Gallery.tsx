import Image from "next/image";
import { galleryImages, galleryImagesSecond, galleryImagesThird, galleryImagesFourth, galleryVideo } from "@/app/_utils/constants";

function Gallery({ section }: { section: "first" | "second" | "third" | "fourth" }) {
  let imagesToShow: string[] = [];

  if (section === "first") imagesToShow = galleryImages;
  else if (section === "second") imagesToShow = galleryImagesSecond;
  else if (section === "third") imagesToShow = galleryImagesThird;
  else if (section === "fourth") imagesToShow = galleryImagesFourth;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full place-items-center my-4">
      {section === "fourth" && (
        <video controls className="w-full h-auto rounded-lg">
          <source src={galleryVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {imagesToShow.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Gallery Image ${index + 1}`}
          width={500}
          height={300}
          className="w-full h-auto rounded-lg"
        />
      ))}
    </div>
  );
}

export default Gallery;
