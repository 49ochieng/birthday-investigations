import { useState } from "react";

interface RoastLevelEntry {
  level: number;
  label: string;
  line: string;
}

interface RoastLevelSliderProps {
  levels: RoastLevelEntry[];
}

export default function RoastLevelSlider({ levels }: RoastLevelSliderProps) {
  const [value, setValue] = useState(1);
  const active = levels.find((l) => l.level === value) ?? levels[0];

  return (
    <section aria-labelledby="roast-slider-heading" className="mb-12">
      <h2 id="roast-slider-heading" className="text-xl sm:text-2xl font-serif font-bold text-gold mb-4">
        Roast Level
      </h2>
      <div className="file-card rounded-2xl p-6 sm:p-8">
        <label htmlFor="roast-range" className="block text-sm font-bold text-office-ink mb-3">
          Currently set to: <span className="text-redstamp">{active.label}</span>
        </label>
        <input
          id="roast-range"
          type="range"
          min={1}
          max={5}
          step={1}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="focus-ring w-full accent-redstamp"
          aria-valuetext={active.label}
        />
        <div className="flex justify-between text-[10px] sm:text-xs text-office-ink/60 mt-1 font-mono">
          <span>Polite</span>
          <span>Office Safe</span>
          <span>Mildly Spicy</span>
          <span>HR Is Watching</span>
          <span>Delete History</span>
        </div>
        <p className="mt-5 font-mono text-sm bg-office-ink/5 border-l-4 border-gold-dark pl-4 py-2 text-office-ink">
          {active.line}
        </p>
      </div>
    </section>
  );
}
