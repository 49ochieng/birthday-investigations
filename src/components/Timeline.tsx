import { motion } from "framer-motion";

interface TimelineEvent {
  label: string;
  text: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <section aria-labelledby="timeline-heading" className="mb-12">
      <h2 id="timeline-heading" className="text-xl sm:text-2xl font-serif font-bold text-gold mb-4">
        Fake Timeline
      </h2>
      <ol className="relative border-l-2 border-gold-dark/60 ml-3 space-y-6">
        {events.map((event, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="ml-6"
          >
            <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-gold border-2 border-office-ink" aria-hidden="true" />
            <p className="text-sm uppercase tracking-wide text-gold-light font-bold">{event.label}</p>
            <p className="text-office-cream/90">{event.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
