interface GifEntry {
  title: string;
  url: string;
}

interface GifWallProps {
  gifs: GifEntry[];
}

export default function GifWall({ gifs }: GifWallProps) {
  return (
    <section aria-labelledby="gifwall-heading" className="mb-12">
      <h2 id="gifwall-heading" className="text-xl sm:text-2xl font-serif font-bold text-gold mb-4">
        Exhibit Reel
      </h2>
      <div className="grid sm:grid-cols-3 gap-5">
        {gifs.map((gif, i) => (
          <figure key={i} className="file-card rounded-xl overflow-hidden">
            <img src={gif.url} alt={gif.title} loading="lazy" className="w-full h-40 object-cover" />
            <figcaption className="p-3 text-xs text-office-ink/70">{gif.title}</figcaption>
          </figure>
        ))}
      </div>
      <p className="text-center text-xs text-office-cream/50 mt-4">GIFs powered by GIPHY.</p>
    </section>
  );
}
