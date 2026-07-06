import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MessageSquareHeart, Send } from "lucide-react";
import { fetchWishes, postWish, type Wish, type WishSource } from "../lib/wishesApi";

interface BirthdayWishesProps {
  person: "sammy" | "martin";
  personName: string;
}

function timeAgo(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const minutes = Math.round(diffMs / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  return `${days}d ago`;
}

export default function BirthdayWishes({ person, personName }: BirthdayWishesProps) {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [source, setSource] = useState<WishSource | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchWishes(person).then((result) => {
      if (cancelled) return;
      setWishes(result.wishes);
      setSource(result.source);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [person]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage) {
      setFormError("Please add your name and a short message.");
      return;
    }
    if (trimmedName.length > 60 || trimmedMessage.length > 400) {
      setFormError("Keep the name under 60 characters and the message under 400.");
      return;
    }

    setFormError(null);
    setSubmitting(true);
    const result = await postWish(person, trimmedName, trimmedMessage);
    setWishes((prev) => [result.wish, ...prev]);
    setSource(result.source);
    setMessage("");
    setSubmitting(false);
  };

  return (
    <section aria-labelledby="wishes-heading" className="mb-12">
      <h2 id="wishes-heading" className="text-xl sm:text-2xl font-serif font-bold text-gold mb-4">
        Public Comments &amp; Birthday Wishes
      </h2>
      <div className="file-card rounded-2xl p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="mb-6 space-y-3">
          <div className="grid sm:grid-cols-[1fr_2fr] gap-3">
            <label className="block">
              <span className="sr-only">Your name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                maxLength={60}
                className="focus-ring w-full rounded-lg border border-office-folder bg-white/70 px-3 py-2 text-office-ink placeholder:text-office-ink/40"
              />
            </label>
            <label className="block">
              <span className="sr-only">Your birthday wish for {personName}</span>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Leave a birthday wish for ${personName}...`}
                maxLength={400}
                className="focus-ring w-full rounded-lg border border-office-folder bg-white/70 px-3 py-2 text-office-ink placeholder:text-office-ink/40"
              />
            </label>
          </div>
          {formError && <p className="text-sm text-redstamp">{formError}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-light disabled:opacity-60 text-office-ink font-bold px-5 py-2.5 shadow transition-transform hover:scale-105 active:scale-95"
          >
            <Send size={16} aria-hidden="true" />
            {submitting ? "Submitting..." : "Submit Wish"}
          </button>
        </form>

        <div className="max-h-96 overflow-y-auto space-y-3 pr-1" aria-live="polite">
          {loading && <p className="text-office-ink/60 text-sm">Loading wishes...</p>}
          {!loading && wishes.length === 0 && (
            <p className="text-office-ink/60 text-sm flex items-center gap-2">
              <MessageSquareHeart size={16} aria-hidden="true" />
              No wishes yet. Be the first to say something nice (or funny).
            </p>
          )}
          {wishes.map((wish, i) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(i, 5) * 0.05 }}
              className="border-l-4 border-gold-dark bg-office-ink/5 rounded-r-lg px-4 py-2"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-bold text-office-ink">{wish.name}</p>
                <p className="text-xs text-office-ink/50 shrink-0">{timeAgo(wish.createdAt)}</p>
              </div>
              <p className="text-office-ink/80">{wish.message}</p>
            </motion.div>
          ))}
        </div>

        {source === "local" && !loading && (
          <p className="mt-4 text-xs text-office-ink/50">
            Running in local preview mode: wishes are saved to this browser only. Deploy to Azure to
            share wishes with everyone.
          </p>
        )}
        {source === "azure" && !loading && (
          <p className="mt-4 text-xs text-office-ink/50">Wishes are synced live via Azure.</p>
        )}
      </div>
    </section>
  );
}
