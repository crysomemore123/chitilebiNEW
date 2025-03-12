import { galleryImages, galleryImagesSecond, galleryImagesThird } from "@/app/_utils/constants";

function Gallery({ section }: { section: "first" | "second" | "third" }) {
  let imagesToShow = [];

  if (section === "first") imagesToShow = galleryImages;
  else if (section === "second") imagesToShow = galleryImagesSecond;
  else if (section === "third") imagesToShow = galleryImagesThird;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full place-items-center my-4">
      {imagesToShow.map((image, index) => (
        <img key={index} src={image.src} alt={`Gallery Image ${index + 1}`} className="w-full h-auto rounded-lg" />
      ))}
    </div>
  );
}

export default Gallery;
