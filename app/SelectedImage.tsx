"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useIsMobile } from "./isMobile";

export const SelectedImage = ({
  photos,
  visible,
  selected,
  close,
}: {
  photos: any;
  visible: boolean;
  selected: number;
  close: any;
}) => {
    const [loaded, setLoaded] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const photo = photos[selected];
    const isMobile = useIsMobile();
    const landscapeSize = isMobile ? "w-[100vw] h-auto" : "w-auto h-[92vh]";
    const portraitSize = isMobile ? "w-[100vw] h-auto" : "w-auto h-[100vh]";
    const landscapeAspectRatio = isMobile ? "7 / 5" : "3 / 2";
    const verticalAspectRatio = isMobile ? "3 / 5" : "2 / 3";

    useEffect(() => {
        setLoaded(false);
        setShowInfo(false);
    }, [selected]);

    const infoHandlers = isMobile
      ? { onClick: () => setShowInfo((v) => !v) }
      : {
          onMouseEnter: () => setShowInfo(true),
          onMouseLeave: () => setShowInfo(false),
        };

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
            quality={85}
            onLoad={() => setLoaded(true)}
            priority
            className={`object-cover transition-opacity duration-500 ease-out ${
                loaded ? "opacity-100" : "opacity-0"
            }`}
        />
        {!loaded && !photo.blurDataURL && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {/* Info button + tooltip */}
        {loaded && (
          <div
            className="absolute top-3 right-3 sm:top-4 sm:right-4"
            onClick={(e) => e.stopPropagation()}
            {...(!isMobile ? infoHandlers : {})}
          >
            <button
              {...(isMobile ? infoHandlers : {})}
              className="flex items-center justify-center h-8 w-8 rounded-full bg-black/50 backdrop-blur-sm text-white/90 hover:bg-black/70 transition-colors outline-none"
              aria-label="Image details"
            >
              <span className="text-sm font-serif italic">i</span>
            </button>

            <div
              className={`absolute top-10 right-0 w-64 rounded-lg bg-black/80 backdrop-blur-md p-4 text-white transition-all duration-200 ease-out ${
                showInfo
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <h3 className="text-m font-medium">{photo.title}</h3>
              {photo.year && (
                <p className="text-sm text-gray-400 mt-0.5">{photo.year}</p>
              )}
              {photo.location && (
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  {photo.location}
                </p>
              )}
                {photo.description && (
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                {photo.description}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};