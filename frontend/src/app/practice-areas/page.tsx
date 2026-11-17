import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PracticeAreas from "@/components/home/PracticeAreas";
import { ShieldCheck, ArrowRight, PhoneCall, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Practice Areas & Legal Disciplines | Specialized Advocates",
  description:
    "Explore our specialized legal practice areas: Corporate & Commercial Law, Criminal Defense, High-Net-Worth Family Law, Civil Litigation, Real Estate, and Intellectual Property.",
};

export default function PracticeAreasPage() {
  const processSteps = [
    {
      step: "01",
      title: "Confidential Case Intake",
      description:
        "You share your matter under complete attorney-client privilege. We assess jurisdiction, evidentiary strength, and urgency.",
    },
    {
      step: "02",
      title: "Strategic Discovery & Analysis",
      description:
        "Our trial team investigates the facts, audits contracts and financial forensic records, and builds the strategic roadmap.",
    },
    {
      step: "03",
      title: "Decisive Legal Execution",
      description:
        "Whether through aggressive courtroom advocacy or commanding negotiation, we fight relentlessly for your best outcome.",
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
              <span className="text-slate-400">Practice Disciplines</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif">
              Specialized Legal Practice Areas
            </h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-300">
              Multi-disciplinary courtroom attorneys combining decades of specialized knowledge, aggressive representation, and strategic acumen.
            </p>
          </div>
        </section>

        {/* Practice Areas Showcase */}
        <PracticeAreas />

        {/* How We Handle Your Matter */}
        <section className="py-24 bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-500">
                Our Legal Approach
              </div>
              <h2 className="mt-2 text-3xl font-bold font-serif text-white sm:text-4xl">
                How We Manage Your Case from Intake to Resolution
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8"
                >
                  <span className="text-4xl font-extrabold text-amber-500/20 font-serif">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white font-serif">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Consultation Section */}
        <section className="border-t border-slate-800 bg-slate-900/60 py-16">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <ShieldCheck className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              Urgent Legal Matter Requiring Immediate Counsel?
            </h2>
            <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
              Our partners are available for urgent bail hearings, emergency injunctions, and immediate corporate dispute counseling.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-7 py-3.5 text-sm font-bold text-slate-950 hover:bg-amber-400"
              >
                <span>Request Case Evaluation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+18005550199"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-800"
              >
                <PhoneCall className="h-4 w-4 text-amber-400" />
                <span>Call Hotline: +1 (800) 555-0199</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
