import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FolderSearch } from "lucide-react";
import OfficeBackdrop from "../components/OfficeBackdrop";

export default function Landing() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <OfficeBackdrop />

      <div className="relative z-10 max-w-3xl w-full text-center">
        <span className="confidential-tab inline-block px-3 py-1 text-xs font-bold rounded mb-6">
          TOP SECRET-ISH
        </span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-serif font-bold text-gold mb-4"
        >
          Department of Unnecessary Birthday Investigations
        </motion.h1>
        <p className="text-office-cream/80 text-lg mb-12">
          Two birthdays. Two suspects. Zero chance of working normally today.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ y: -6 }}
            className="file-card rounded-2xl p-6 flex flex-col items-center gap-4"
          >
            <FolderSearch size={40} className="text-gold-dark" aria-hidden="true" />
            <h2 className="text-xl font-serif font-bold text-office-ink">Sammy Chesire</h2>
            <p className="text-office-ink/70 text-sm italic">
              “A man, a myth, a calendar reminder we almost ignored.”
            </p>
            <Link
              to="/sammy"
              className="focus-ring w-full rounded-full bg-gold hover:bg-gold-light text-office-ink font-bold px-5 py-3 transition-transform hover:scale-105"
            >
              Enter Sammy&rsquo;s Situation Room
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="file-card rounded-2xl p-6 flex flex-col items-center gap-4"
          >
            <FolderSearch size={40} className="text-gold-dark" aria-hidden="true" />
            <h2 className="text-xl font-serif font-bold text-office-ink">Martin Wambui</h2>
            <p className="text-office-ink/70 text-sm italic">
              “Another year older. HR has been notified.”
            </p>
            <Link
              to="/martin"
              className="focus-ring w-full rounded-full bg-gold hover:bg-gold-light text-office-ink font-bold px-5 py-3 transition-transform hover:scale-105"
            >
              Enter Martin&rsquo;s Board of Inquiry
            </Link>
          </motion.div>
        </div>

        <p className="mt-14 text-xs text-office-cream/40 max-w-lg mx-auto">
          This website is 100% unserious, 0% legally binding, and created for birthday laughs only.
        </p>
      </div>
    </div>
  );
}
