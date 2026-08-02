import Gallery from "./Gallery";
import { astroPhotos } from "./astroPhotos";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Astrophotography Portfolio",
  description: "Astrophotography portfolio featuring famous deep-sky objects like the Andromeda Galaxy, Orion Nebula, Rho Ophiuchi, and the North America Nebula, as well as wide-field milky way images",
};

export default function Home() {
  return (
    <>
      <Gallery photos={astroPhotos}/>
    </>
  );
}
