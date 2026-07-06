import { Printer } from "lucide-react";

interface PrintCertificateButtonProps {
  name: string;
}

export default function PrintCertificateButton({ name }: PrintCertificateButtonProps) {
  return (
    <section aria-labelledby="certificate-heading" className="mb-12">
      <h2 id="certificate-heading" className="text-xl sm:text-2xl font-serif font-bold text-gold mb-4">
        Certificate of Continued Existence
      </h2>
      <div className="file-card rounded-2xl p-6 sm:p-8 text-center">
        <p className="text-office-ink/70 mb-4">
          Print an official, entirely unofficial certificate to commemorate this achievement.
        </p>
        <button
          type="button"
          onClick={() => window.print()}
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-light text-office-ink font-bold px-6 py-3 shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <Printer size={18} aria-hidden="true" />
          Print Certificate
        </button>
      </div>

      <div id="print-certificate" className="print-only">
        <div className="border-8 border-double border-gold p-16 text-center font-serif text-office-ink bg-office-cream">
          <p className="text-sm tracking-[0.3em] uppercase mb-6">Department of Unnecessary Birthday Investigations</p>
          <h1 className="text-4xl font-bold mb-6">Certificate of Continued Existence</h1>
          <p className="text-lg mb-2">Awarded to</p>
          <p className="text-3xl font-bold mb-6">{name}</p>
          <p className="max-w-xl mx-auto leading-relaxed">
            For bravely completing another lap around the sun while maintaining plausible professionalism.
          </p>
          <p className="mt-10 text-sm">Signed, The Birthday Committee (unelected, unqualified, unbothered)</p>
        </div>
      </div>
    </section>
  );
}
