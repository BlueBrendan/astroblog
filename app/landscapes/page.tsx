import Gallery from "../Gallery";
import { landscapePhotos } from "../landscapePhotos";

export default function Home() {
  return (
    <>
      <Gallery photos={landscapePhotos}/>
    </>
  );
}
