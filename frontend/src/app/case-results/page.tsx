import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseResults from "@/components/home/CaseResults";
import Testimonials from "@/components/home/Testimonials";
import Stats from "@/components/home/Stats";
import { Trophy, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Results, Verdicts & Settlements | Apex Legal",
  description:
    "Review our recent courtroom victories, multi-million dollar jury verdicts, criminal acquittals, and favorable settlements across commercial and civil litigation.",
};

export default function CaseResultsPage() {
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
              <span className="text-slate-400">Verdicts & Settlements</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif">
              Landmark Verdicts & Proven Case Results
            </h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-300">
              When the stakes are existential, preparation and trial composure make the difference. Explore our track record of defending clients and securing justice.
            </p>
          </div>
        </section>

        {/* Stats Summary */}
        <div className="py-12">
          <Stats />
        </div>

        {/* Main Case Results Component */}
        <CaseResults />

        {/* Client Endorsements */}
        <Testimonials />

        {/* Mandatory Legal Advertising Disclaimer */}
        <section className="py-12 bg-slate-900/40 border-t border-slate-800 text-slate-400 text-xs">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 flex items-start gap-4">
            <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="font-bold text-slate-200">Legal Disclaimer Regarding Prior Results:</span> The case results, settlements, and verdicts published on this website are illustrative of cases handled by Apex Legal & Associates LLP. Prior results do not guarantee, warranty, or predict a similar outcome in any future legal matter. Each case depends upon its specific legal facts, jurisdiction, and merits.
            </p>
          </div>
        </section>

        {/* Bottom Consultation CTA */}
        <section className="py-20 bg-slate-900/90 text-center border-t border-slate-800">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold font-serif text-white">
              Evaluate Your Case with Senior Trial Counsel
            </h2>
            <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
              Whether you are anticipating a corporate lawsuit or facing urgent regulatory charges, we are ready to defend your rights.
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
