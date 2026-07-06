import { useState, useCallback, useRef } from "react";

interface ConfettiButtonProps {
  label: string;
  className?: string;
}

const CONFETTI_COLORS = ["#d4af37", "#a0272d", "#f8f1e0", "#e8cc6a", "#8a9a5b"];

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  color: string;
  rotate: number;
}

export default function ConfettiButton({ label, className = "" }: ConfettiButtonProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const counter = useRef(0);

  const launchConfetti = useCallback(() => {
    const newPieces: ConfettiPiece[] = Array.from({ length: 40 }, () => {
      counter.current += 1;
      return {
        id: counter.current,
        left: Math.random() * 100,
        delay: Math.random() * 0.4,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotate: Math.random() * 360,
      };
    });
    setPieces(newPieces);
    window.setTimeout(() => setPieces([]), 3200);
  }, []);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={launchConfetti}
        className={`focus-ring rounded-full bg-gold hover:bg-gold-light text-office-ink font-bold px-6 py-3 shadow-lg transition-transform hover:scale-105 active:scale-95 ${className}`}
      >
        {label}
      </button>
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-50" aria-hidden="true">
        {pieces.map((p) => (
          <span
            key={p.id}
            className="absolute top-0 block w-2 h-3 animate-confetti-fall"
            style={{
              left: `${p.left}%`,
              backgroundColor: p.color,
              animationDelay: `${p.delay}s`,
              transform: `rotate(${p.rotate}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
