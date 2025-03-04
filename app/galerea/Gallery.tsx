"use client";

import Image from "next/image";
import { galleryImages } from "../_utils/constants";
import Modal from "./Modal";
import GalleryImageSlider from "./GalleryImageSlider";

function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full  place-items-center my-4">
      {galleryImages.map((img, i) => (
        <Modal key={i}>
          <Modal.Open opens="something">
            <div className="relative aspect-square h-[20rem] self-center hover:cursor-pointer">
              <Image
                src={img}
                alt={`Gallery ${i + 1}`}
                fill
                sizes="20vw"
                className="-z-20 w-full object-contain"
              />
            </div>
          </Modal.Open>
          <Modal.Window name="something">
            <GalleryImageSlider index={i} />
          </Modal.Window>
        </Modal>
      ))}
    </div>
  );
}

export default Gallery;
