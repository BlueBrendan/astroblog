"use client";

import Image from "next/image";
import FadeIn from "../FadeIn";
import { authorPhotos } from "../authorPhotos";
import Link from 'next/link';
import { useIsMobile } from "../isMobile";

export const AboutPage = () => {
    const isMobile = useIsMobile();
    const fontSize = isMobile ? 'text-[13px]' : 'text-m';
    const captionSize = isMobile ? 'text-xs' : 'text-sm'

    return (
        <>
        <div className="max-w-6xl mx-auto px-8 lg:px-12 py-2 lg:py-6">
            <div className={`${isMobile ? "space-y-6" : "space-y-10"}`} style={{caretColor: "transparent"}}>
            <p className={`${fontSize} leading-relaxed`}>
                I'm Brendan, an astro and landscape photographer based in the
                Los Angeles area. I first took an interest in
                photography in 2014 and have shot a wide variety of genres like
                landscape, studio portraiture, sports, and wildlife, but in the
                last two years I've truly found my niche in wide-field and deep
                space astrophotography.
            </p>
            {/* Mojave Desert Timelapse */}
            <FadeIn>
                <div className="aspect-[16/9] relative rounded-lg overflow-hidden select-none">
                <video autoPlay muted loop playsInline className="w-full rounded-lg">
                <source src={authorPhotos[0].src} type="video/mp4" />
                </video>
                </div>
                <p className={`${captionSize} text-gray-400 italic text-center mt-2`}>
                {authorPhotos[0].description}
                </p>
            </FadeIn>
            <p className={`${fontSize} leading-relaxed`}>
                Over the last 2 years, I've explored much of California in
                search of clear horizons and pristine dark skies. My pursuit for
                the best shooting locations has taken me to Yosemite, Joshua
                Tree, Death Valley, Pinnacles, the Lassen and Tahoe National
                Forest, the Trona Pinnacles near Ridgecrest, the Mojave Desert,
                the Owens Valley in Bishop, and various campgrounds and parking lots throughout
                the state. I've also camped in the Black Rock Desert in a road
                trip through Nevada.
            </p>
            {/* Black Rock Desert Image */}
            <FadeIn>
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden select-none">
                <Image
                    src={authorPhotos[1].src}
                    alt={authorPhotos[1].alt}
                    draggable={false}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 100vw"
                    className="object-cover"
                />
                </div>
                <p className={`${captionSize} text-gray-400 italic text-center mt-2`}>
                {authorPhotos[1].description}
                </p>
            </FadeIn>
            <p className={`${fontSize} leading-relaxed`}>
                What draws me to the night sky is the surreal and otherworldly
                nature of the images. Being able to pull out vivid colors,
                stars, and rich dust trails of nebulas and galaxies right here
                on Earth is something that has never ceased to amaze me. Looking
                up towards the incredibly rich field of stars and Milky Way in a
                true dark sky location is something everyone should experience
                at least once!
            </p>
            {/* Trona Pinnacles Timelapse */}
            <FadeIn>
                <div className="relative rounded-lg overflow-hidden select-none">
                <video autoPlay muted loop playsInline className="w-full rounded-lg">
                <source src={authorPhotos[2].src} type="video/mp4" />
                </video>
                </div>
                <p className={`${captionSize} text-gray-400 italic text-center mt-2`}>
                {authorPhotos[2].description}
                </p>
            </FadeIn>
            {/* Yosemite National Park Image */}
            <FadeIn>
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden select-none">
                <Image
                    src={authorPhotos[3].src}
                    alt={authorPhotos[3].alt}
                    draggable={false}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 100vw"
                    className="object-cover"
                />
                </div>
                <p className={`${captionSize} text-gray-400 italic text-center mt-2`}>
                {authorPhotos[3].description}
                </p>
            </FadeIn>
            {/* Trona Pinnacles Image */}
            <FadeIn>
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden select-none">
                <Image
                    src={authorPhotos[4].src}
                    alt={authorPhotos[4].alt}
                    draggable={false}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 100vw"
                    className="object-cover"
                />
                </div>
                <p className={`${captionSize} text-gray-400 italic text-center mt-2`}>
                {authorPhotos[4].description}
                </p>
            </FadeIn>
            <p className={`${fontSize} leading-relaxed`}>
                If you're interested in prints or booking a shoot at a dark-sky location, reach out via the <Link href="/contact" className="hover:text-gray-400  transition-colors">Contact Form</Link>.
            </p>
            </div>
        </div>
        </>
    )
}