import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationSection from "@/components/home/ConsultationSection";
import { HelpCircle, Shield, FileText, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Schedule Confidential Consultation | Apex Legal",
  description:
    "Get in touch with the attorneys at Apex Legal & Associates. 24/7 emergency legal helpline, confidential intake, and chamber consultations in New York.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "Is my initial consultation strictly confidential?",
      a: "Yes. From the moment you contact our law firm, all communications are strictly protected by attorney-client privilege, even if you do not retain our firm.",
    },
    {
      q: "What documentation should I prepare for our meeting?",
      a: "Please bring all relevant contracts, pleadings, emails, court dates, financial statements, or police reports pertinent to your case to facilitate a thorough evaluation.",
    },
    {
      q: "How are your legal fees structured?",
      a: "Depending upon the discipline, we work on structured hourly retainers, flat fee arrangements for transactional matters, or contingency arrangements for selected litigation.",
    },
    {
      q: "Do you offer emergency or weekend counsel?",
      a: "Yes. We maintain an on-call emergency trial hotline 24/7 for immediate arrests, search warrants, bail hearings, or urgent commercial injunctions.",
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
              <span className="text-slate-400">Contact & Chambers</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif">
              Contact & Case Intake
            </h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-300">
              When facing complex legal challenges, timing is vital. Reach out directly to our intake advocates to schedule a private, discreet evaluation.
            </p>
          </div>
        </section>

        {/* Main Intake Form Section */}
        <ConsultationSection />

        {/* Consultation FAQs */}
        <section className="py-24 bg-slate-950 border-t border-slate-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
                <HelpCircle className="h-4 w-4" />
                Frequently Asked Questions
              </div>
              <h2 className="mt-2 text-3xl font-bold font-serif text-white">
                Client Intake & Consultation Inquiries
              </h2>
            </div>

            <div className="mt-12 space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7 transition-colors hover:border-slate-700"
                >
                  <h3 className="text-base font-bold text-white font-serif flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-400">
                      ?
                    </span>
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed pl-9">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
