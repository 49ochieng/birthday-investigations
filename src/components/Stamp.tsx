interface StampProps {
  text: string;
  className?: string;
}

export default function Stamp({ text, className = "" }: StampProps) {
  return (
    <span
      className={`stamp animate-stamp-in inline-block px-3 py-1 text-xs sm:text-sm text-redstamp ${className}`}
      role="img"
      aria-label={`Stamp: ${text}`}
    >
      {text}
    </span>
  );
}
