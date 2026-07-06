import { Cake, Folder, Paperclip, FileText, Coffee } from "lucide-react";

const ICONS = [Cake, Folder, Paperclip, FileText, Coffee];

function seededPositions(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const seed = (i * 137.5) % 100;
    return {
      top: `${(seed * 3.7) % 100}%`,
      left: `${(seed * 5.3 + i * 11) % 100}%`,
      rotate: (i * 47) % 360,
      size: 28 + (i % 4) * 8,
    };
  });
}

const positions = seededPositions(18);

export default function OfficeBackdrop() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.05]" aria-hidden="true">
      {positions.map((pos, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <Icon
            key={i}
            size={pos.size}
            className="absolute text-gold"
            style={{ top: pos.top, left: pos.left, transform: `rotate(${pos.rotate}deg)` }}
          />
        );
      })}
    </div>
  );
}
