export interface Photo {
  src: string,
  year: number,
  title: string,
  description: string,
  location: string,
  aspectRatio: number,
  alt: string,
  featured: boolean,
  vertical: boolean,
}

export interface Gallery {
  photos: Photo[]
};