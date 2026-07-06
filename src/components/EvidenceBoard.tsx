import { motion } from "framer-motion";

interface EvidenceBoardProps {
  evidenceItems: string[];
}

export default function EvidenceBoard({ evidenceItems }: EvidenceBoardProps) {
  return (
    <section aria-labelledby="evidence-heading" className="mb-12">
      <h2 id="evidence-heading" className="text-xl sm:text-2xl font-serif font-bold text-gold mb-4">
        Evidence Board
      </h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {evidenceItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="sticky-note p-4 rounded-sm font-mono text-sm transition-transform hover:scale-[1.03] hover:rotate-0 focus-within:scale-[1.03]"
          >
            <span aria-hidden="true">📌 </span>
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
