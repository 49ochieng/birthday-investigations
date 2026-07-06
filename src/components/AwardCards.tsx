import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface AwardCardsProps {
  awards: string[];
}

export default function AwardCards({ awards }: AwardCardsProps) {
  return (
    <section aria-labelledby="awards-heading" className="mb-12">
      <h2 id="awards-heading" className="text-xl sm:text-2xl font-serif font-bold text-gold mb-4">
        Awards
      </h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {awards.map((award, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="file-card rounded-xl p-5 flex items-start gap-3 transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <Award className="shrink-0 text-gold-dark" aria-hidden="true" />
            <p className="font-serif font-semibold text-office-ink">{award}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
