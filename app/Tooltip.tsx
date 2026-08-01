import { useIsMobile } from "./isMobile";
import type { Photo } from "./types";
import { Dispatch, SetStateAction } from "react";

export const Tooltip = ({photo, showInfo, setShowInfo}: {photo: Photo, showInfo: boolean, setShowInfo: Dispatch<SetStateAction<boolean>>}) => {
    const isMobile = useIsMobile();
    const infoHandlers = 
    isMobile
      ?  { onClick: () => setShowInfo((v) => !v) }
      : 
    {
        onMouseEnter: () => setShowInfo(true),
        onMouseLeave: () => setShowInfo(false),
    };
    const titleSize = isMobile ? 'text-[13px]': 'text-m'
    const fontSize = isMobile ? 'text-[10px]' : 'text-sm'

    return (
        <div
            className="absolute top-3 right-3 sm:top-4 sm:right-4"
            onClick={(e) => e.stopPropagation()}
            {...(!isMobile ? infoHandlers : {})}
        >
            <button
                {...(isMobile ? infoHandlers : {})}
                className={`flex items-center justify-center ${isMobile ? 'h-4 w-4': 'h-8 w-8'} rounded-full bg-black/50 backdrop-blur-sm text-white/90 hover:bg-black/70 transition-colors outline-none"
                aria-label="Image details"`}
                >
                <span className={`${fontSize} font-serif italic`}>i</span>
            </button>
            <div
                className={`absolute  ${isMobile ? 'top-6': 'top-10'} right-0 rounded-lg bg-black/80 backdrop-blur-md ${isMobile ? 'p-2 w-42': 'p-4 w-64'} text-white transition-all duration-200 ease-out ${
                    showInfo
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
                <h3 className={`${titleSize} font-medium`}>{photo.title}</h3>
                {photo.year && (
                    <p className={`${fontSize} text-gray-400 mt-0.5`}>{photo.year}</p>
                )}
                {photo.location && (
                    <p className={`${fontSize} text-gray-300 mt-2 leading-relaxed`}>
                    {photo.location}
                    </p>
                )}
                    {photo.description && (
                    <p className={`${fontSize} text-gray-300 mt-2 leading-relaxed`}>
                    {photo.description}
                    </p>
                )}
            </div>
        </div>
    )
}