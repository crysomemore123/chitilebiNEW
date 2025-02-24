import Gallery from "../_components/Gallery";

const section1Images = [
  "/gallery/section1/1.jpg",
  "/gallery/section1/2.jpg",
  "/gallery/section1/3.jpg",
];

const section2Images = [
  "/gallery/section2/1.jpg",
  "/gallery/section2/2.jpg",
  "/gallery/section2/3.jpg",
];

const section3Images = [
  "/gallery/section3/1.jpg",
  "/gallery/section3/2.jpg",
  "/gallery/section3/3.jpg",
];

function GalereaPage() {
  return (
    <div>
      <h1>გალერეა</h1>
      <Gallery title="Section 1" images={section1Images} />
      <Gallery title="Section 2" images={section2Images} />
      <Gallery title="Section 3" images={section3Images} />
    </div>
  );
}

export default GalereaPage;
