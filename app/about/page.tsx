import Navbar from "../Navbar";
import Image from "next/image";

export default function About() {
  return (
    <>
        <Navbar/>
        <Image
            src="/images/author-image.jpg"
            alt="author-image"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 66vw"
            className="object-cover transition-transform"
        />
    </>
  );
}
