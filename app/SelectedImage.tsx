"use client";

import Image from "next/image";
import { useState } from "react";
import { useIsMobile } from "./isMobile";
import { Tooltip } from "./Tooltip";
import type { Photo } from "./types";

export const SelectedImage = ({
  photo,
  visible,
  close,
}: {
  photo: Photo;
  visible: boolean;
  close: () => void;
}) => {
    const [loaded, setLoaded] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const isMobile = useIsMobile();
    const landscapeSize = isMobile ? "w-[100vw] h-auto" : "w-auto h-[92vh]";
    const portraitSize = isMobile ? "w-[100vw] h-auto" : "w-auto h-[100vh]";
    const landscapeAspectRatio = isMobile ? "7 / 5" : "3 / 2";
    const verticalAspectRatio = isMobile ? "3 / 5" : "2 / 3";

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/15 backdrop-blur-lg flex items-center justify-center transition-opacity duration-350 ease-in-out ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={close}
    >
      <div className={`relative max-h-full max-w-full ${photo.vertical ? portraitSize : landscapeSize}`} style={{ aspectRatio: photo.vertical ? verticalAspectRatio : landscapeAspectRatio }}>
        <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="3000px"
            placeholder={"empty"}
            quality={88}
            onLoad={() => setLoaded(true)}
            priority
            className={`object-cover transition-opacity duration-350 ease-out ${
                loaded ? "opacity-100" : "opacity-0"
            }`}
        />
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {/* Info button + tooltip */}
        {loaded && <Tooltip photo={photo} showInfo={showInfo} setShowInfo={setShowInfo}/>}
      </div>
    </div>
  );
};