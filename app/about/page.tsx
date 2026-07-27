import Image from "next/image";
import Navbar from "../Navbar";
import FadeIn from "../FadeIn";
import { authorPhotos } from "../authorPhotos";

export default function About() {
  return (
    <>
  <Navbar />
<div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 flex flex-col-reverse sm:flex-row-reverse sm:gap-8">
  {/* Image column */}
  <div className="w-full sm:w-[450px] lg:w-[150vw] flex flex-col gap-8 mt-8 sm:mt-0">
    {authorPhotos.map((photo, i) => (
      <FadeIn key={photo.src ?? i}>
          {photo.video ? 
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full"
            >
              <source src={photo.src} type="video/mp4" />
            </video>
            : 
             <div className="relative aspect-[3/2] overflow-hidden select-none">
              <Image
                src={photo.src}
                alt={photo.alt}
                draggable={false}
                fill
                sizes="(max-width: 640px) 100vw, 600px"
                className="object-cover"
              />
              </div>
          }
        <p className="text-sm text-gray-400 italic text-center mt-2">
          {photo.description}, {photo.year}
        </p>
      </FadeIn>
    ))}

  </div>
  
  {/* Text column */}
  <div className="space-y-8">
    <h1 className="text-3xl font-bold leading-tight">About Me</h1>
    <div className="space-y-14">
      <p className="text-lg leading-relaxed">
      I'm an astrophotographer and landscape photographer based in the San Gabriel Valley/Los Angeles area. I first took an interest in photography in 2014 and have shot a wide variety of genres like landscape, studio portraiture, sports, and wildlife, but in the last two years I've truly found my niche in wide-field and deep space astrophotography.
      </p>
      <p className="text-lg leading-relaxed">
        Over the last 2 years, I've explored much of California in search of clear horizons and pristine dark skies. My pursuit for the best shooting locations has taken me to Yosemite, Joshua Tree, Death Valley, Pinnacles, the Lassen and Tahoe National Forest, the Trona Pinnacles near Ridgecrest, the Mojave Desert, the Owens Valley in Bishop, and various campgrounds throughout the state. I've also camped in the Black Rock Desert in a road trip through Nevada.
      </p>
      <p className="text-lg leading-relaxed">
      What draws me to the night sky is the surreal and otherworldly nature of the images. Being able to pull out vivid colors, stars, and rich dust trails of nebulas and galaxies right here on Earth is something that has never ceased to amaze me. Looking up towards the incredibly rich field of stars and Milky Way in a true dark sky location is something everyone should experienece at least once in their lifetime.
      </p>
    </div>
  </div>
</div>  </>
  );
}