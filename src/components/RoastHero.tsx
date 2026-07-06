import { motion } from "framer-motion";
import Stamp from "./Stamp";

interface RoastHeroProps {
  name: string;
  title: string;
  subtitle: string;
  imagePath?: string;
  badgeText: string;
}

export default function RoastHero({ name, title, subtitle, imagePath, badgeText }: RoastHeroProps) {
  return (
    <header className="relative overflow-hidden rounded-2xl file-card p-6 sm:p-10 mb-10">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8">
        <Stamp text={badgeText} />
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="shrink-0">
          {imagePath ? (
            <img
              src={imagePath}
              alt={`Photo evidence of ${name}`}
              className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-gold shadow-lg"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "flex";
              }}
            />
          ) : null}
          <div
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-dashed border-gold-dark bg-office-folder/40 items-center justify-center text-center text-xs sm:text-sm px-3 text-office-ink/70"
            style={{ display: imagePath ? "none" : "flex" }}
          >
            Photo evidence pending upload. The investigation continues.
          </div>
        </div>

        <div className="text-center sm:text-left">
          <span className="confidential-tab inline-block px-2 py-1 text-[10px] sm:text-xs font-bold rounded mb-3">
            CONFIDENTIAL BIRTHDAY FILE
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-serif font-bold text-office-ink mb-3"
          >
            {title}
          </motion.h1>
          <p className="text-office-ink/80 leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </header>
  );
}
