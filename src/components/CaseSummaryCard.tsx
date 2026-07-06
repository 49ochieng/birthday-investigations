interface CaseSummaryCardProps {
  name: string;
  charge: string;
  status: string;
  riskLevel: string;
}

export default function CaseSummaryCard({ name, charge, status, riskLevel }: CaseSummaryCardProps) {
  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Charge", charge],
    ["Status", status],
    ["Risk Level", riskLevel],
  ];

  return (
    <section aria-labelledby="case-summary-heading" className="mb-12">
      <h2 id="case-summary-heading" className="text-xl sm:text-2xl font-serif font-bold text-gold mb-4">
        Case Summary
      </h2>
      <dl className="file-card rounded-2xl p-6 sm:p-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
        {rows.map(([term, value]) => (
          <div key={term}>
            <dt className="text-xs uppercase tracking-wide font-bold text-gold-dark">{term}</dt>
            <dd className="text-office-ink mt-1">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
