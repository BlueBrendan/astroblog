import Image from "next/image";
import FadeIn from "./FadeIn";
import type { Photo } from "./types";
import { Dispatch, SetStateAction } from "react";

export const StandardImage = ({
  photo,
  setSelected,
  index,
}: {
  photo: Photo;
  setSelected: Dispatch<SetStateAction<number | null>>;
  index: number;
}) => {
  return (
    <FadeIn key={photo.src} delay={(index % 3) * 100}>
      <button
        onClick={
          () => setSelected(index)
        }
        className="relative aspect-[4/3] overflow-hidden outline-none w-full"
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          draggable={false}
          fill
          quality={85}
          sizes="(max-width: 840px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover hover:scale-102 transition-transform select-none"
        />
      </button>
    </FadeIn>
  );
};