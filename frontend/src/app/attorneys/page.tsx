import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AttorneyTeam from "@/components/home/AttorneyTeam";
import FirmGallery from "@/components/home/FirmGallery";
import { Award, BookOpen, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Attorneys & Senior Advocates | Apex Legal",
  description:
    "Meet the experienced attorneys and partners at Apex Legal & Associates. Harvard, Columbia, and Yale law graduates with trial credentials and federal bar admissions.",
};

export default function AttorneysPage() {
  const credentials = [
    {
      title: "Ivy League Pedigree",
      desc: "Our partners hold law degrees and honors from Harvard, Yale, and Columbia Law Schools.",
    },
    {
      title: "Bar Admissions",
      desc: "Licensed before the New York Bar, U.S. District Courts, Court of Appeals, and Supreme Court.",
    },
    {
      title: "Over 1,400+ Verdicts",
      desc: "Decades of courtroom appearances yielding multi-million dollar verdicts and acquittals.",
    },
    {
      title: "Legal Publications",
      desc: "Frequently published authors in prominent national law reviews and legal symposiums.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* Page Banner */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-slate-900/40 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest mb-4">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <span>/</span>
              <span className="text-slate-400">Senior Advocates</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif">
              Our Attorneys & Senior Counselors
            </h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-300">
              Meet the trial attorneys defending your interests. We bring unparalleled intellect, courtroom authority, and relentless dedication to every client brief.
            </p>
          </div>
        </section>

        {/* Credentials Highlights */}
        <section className="border-b border-slate-800 bg-slate-900/20 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white font-serif">{c.title}</h2>
                    <p className="mt-1 text-xs text-slate-400 leading-normal">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Attorneys Roster */}
        <AttorneyTeam />

        {/* Chambers Gallery */}
        <FirmGallery />

        {/* Bottom Consultation Banner */}
        <section className="py-20 bg-slate-900/80 border-t border-slate-800 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold font-serif text-white">
              Schedule A Direct Consultation With A Senior Partner
            </h2>
            <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
              We provide discrete, partner-level reviews of your pending civil disputes, commercial agreements, or criminal defense needs.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-3.5 text-sm font-bold text-slate-950 hover:bg-amber-400"
              >
                <span>Request Case Evaluation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
