"use client";

import { useState, useEffect } from "react";
import { FeaturedImage } from "./FeaturedImage";
import { StandardImage } from "./StandardImage";
import { SelectedImage } from "./SelectedImage";
import { useIsMobile } from "./isMobile";
import type { Gallery } from "./types";

export default function Gallery({photos}: Gallery) {
  const [selected, setSelected] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();


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
    <div className="p-4 sm:p-4 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2" style={{caretColor: "transparent"}}>
      {photos.map((photo, i) =>
        photo.featured && !isMobile ? (
          <FeaturedImage key={i} photo={photo} setSelected={setSelected} index={i}/>
        ) : (
          <StandardImage key={i} photo={photo} setSelected={setSelected} index={i}/>
        )
      )}
    </div>
    {selected !== null && (
      <SelectedImage photo={photos[selected]} visible={visible} close={close}/>
    )}
    </>
  );
}