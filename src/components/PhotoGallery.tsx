import { useState } from "react";

interface PhotoGalleryProps {
  images: string[];
  fallbackText: string;
}

function GalleryImage({ src, alt, fallbackText }: { src: string; alt: string; fallbackText: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="w-full h-48 rounded-xl border-2 border-dashed border-gold-dark bg-office-folder/20 flex items-center justify-center text-center text-sm text-office-cream/70 px-4">
        {fallbackText}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className="w-full h-48 object-cover rounded-xl border-2 border-gold-dark/60 shadow-md"
    />
  );
}

export default function PhotoGallery({ images, fallbackText }: PhotoGalleryProps) {
  return (
    <section aria-labelledby="gallery-heading" className="mb-12">
      <h2 id="gallery-heading" className="text-xl sm:text-2xl font-serif font-bold text-gold mb-4">
        Photo Evidence
      </h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {images.map((src, i) => (
          <GalleryImage key={src} src={src} alt={`Case photo evidence ${i + 1}`} fallbackText={fallbackText} />
        ))}
      </div>
    </section>
  );
}
