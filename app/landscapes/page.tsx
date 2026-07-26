import Gallery from "../Gallery";
import Navbar from "../Navbar";
import { landscapePhotos } from "../landscapePhotos";

export default function Home() {
  return (
    <>
        <Navbar/>
        <Gallery photos={landscapePhotos}/>
    </>
  );
}
