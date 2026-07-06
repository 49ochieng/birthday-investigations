import { useState } from "react";
import { AlertTriangle } from "lucide-react";

interface HRWarningGeneratorProps {
  warnings: string[];
}

export default function HRWarningGenerator({ warnings }: HRWarningGeneratorProps) {
  const [current, setCurrent] = useState<string | null>(null);

  const generate = () => {
    const next = warnings[Math.floor(Math.random() * warnings.length)];
    setCurrent(next);
  };

  return (
    <section aria-labelledby="hr-heading" className="mb-12">
      <h2 id="hr-heading" className="text-xl sm:text-2xl font-serif font-bold text-gold mb-4">
        HR Incident Generator
      </h2>
      <div className="file-card rounded-2xl p-6 sm:p-8">
        <button
          type="button"
          onClick={generate}
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-redstamp hover:brightness-110 text-office-cream font-bold px-5 py-3 shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <AlertTriangle size={18} aria-hidden="true" />
          Generate Fake HR Warning
        </button>
        <div className="mt-4 min-h-[3rem]" role="status" aria-live="polite">
          {current && (
            <p className="font-mono text-sm bg-office-ink/5 border-l-4 border-redstamp pl-4 py-2 text-office-ink">
              {current}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
