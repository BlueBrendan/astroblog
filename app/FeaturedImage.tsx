import Image from "next/image";
import FadeIn from "./FadeIn";

export const FeaturedImage = ({photo, setSelected, index}: {photo: any, setSelected: any, index: number}) => {
    return (
        <FadeIn className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-2" key={photo.src} delay={(index % 3) * 100}>
            <div
                key={photo.src}
                className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 py-4"
                >
                <button
                    onClick={() => setSelected(index)}
                    style={{ aspectRatio: photo.aspectRatio ?? 3 / 2 }}
                    className="relative col-span-2 overflow-hidden outline-none"
                >
                <Image
                    src={photo.src}
                    alt={photo.alt}
                    draggable={false}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 66vw"
                    className="object-cover hover:scale-102 transition-transform select-none"
                />
                </button>
                <div className="flex flex-col justify-center gap-2">
                    <h3 className="text-3xl font-medium">{photo.title}</h3>
                    {photo.year && <p className="text-lg text-gray-500">{photo.year}</p>}
                    {photo.description && <p className="text-md mt-2">{photo.description}</p>}
                </div>
            </div>
        </FadeIn>
    )
}