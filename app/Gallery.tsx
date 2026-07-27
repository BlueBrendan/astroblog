"use client";

import { useState, useEffect } from "react";
import { FeaturedImage } from "./FeaturedImage";
import { StandardImage } from "./StandardImage";
import { SelectedImage } from "./SelectedImage";

interface PhotoItem {
  src: string,
  year: number,
  alt: string,
  featured?: boolean,
}
interface GalleryType {
  photos: PhotoItem[]
};

export default function Gallery({photos}: GalleryType) {
  const [selected, setSelected] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (selected !== null) {
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const close = () => {
    setVisible(false);
    setTimeout(() => setSelected(null), 200);
  };

  // Escape key exists full screen view
  useEffect(() => {
    if (selected === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <>
    <div className="p-4 sm:p-8 lg:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 select-none">
      {photos.map((photo, i) =>
        photo.featured ? (
          <FeaturedImage key={i} photo={photo} setSelected={setSelected} index={i}/>
        ) : (
          <StandardImage key={i} photo={photo} setSelected={setSelected} index={i}/>
        )
      )}
    </div>
    {selected !== null && (
      <SelectedImage photos={photos} visible={visible} selected={selected} close={close}/>
    )}
    </>
  );
}