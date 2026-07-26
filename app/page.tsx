import Gallery from "./Gallery";
import Navbar from "./Navbar";
import { astroPhotos } from "./astroPhotos";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Gallery photos={astroPhotos}/>
    </>
  );
}
