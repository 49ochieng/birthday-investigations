import Stamp from "./Stamp";

interface VerdictCardProps {
  verdict: string;
}

export default function VerdictCard({ verdict }: VerdictCardProps) {
  return (
    <section aria-labelledby="verdict-heading" className="mb-12">
      <h2 id="verdict-heading" className="text-xl sm:text-2xl font-serif font-bold text-gold mb-4">
        Verdict
      </h2>
      <div className="relative file-card rounded-2xl p-6 sm:p-8">
        <div className="absolute -top-4 -right-2 sm:right-6">
          <Stamp text="Do Not Trust Before Coffee" className="text-sm" />
        </div>
        <p className="font-serif text-lg text-office-ink leading-relaxed italic">“{verdict}”</p>
      </div>
    </section>
  );
}
