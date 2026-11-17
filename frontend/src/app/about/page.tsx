import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/home/AboutSection";
import AttorneyTeam from "@/components/home/AttorneyTeam";
import { Scale, Award, Shield, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Law Firm | Heritage & Courtroom Philosophy",
  description:
    "Learn about Apex Legal & Associates, our 25+ year heritage of elite advocacy, senior trial partners, courtroom ethos, and nationwide client representation.",
};

export default function AboutPage() {
  const firmPillars = [
    {
      title: "Relentless Preparation",
      description:
        "Cases are won long before trial. We dissect discovery, deploy forensic investigators, and anticipate opposing counsel's tactics.",
      icon: Scale,
    },
    {
      title: "Direct Partner Access",
      description:
        "Your legal affairs are never delegated to junior associates. You have a direct hotline to senior trial counsel.",
      icon: Shield,
    },
    {
      title: "Unbroken Confidentiality",
      description:
        "We serve high-net-worth families, executives, and enterprises with the highest ethical standards and absolute discretion.",
      icon: CheckCircle2,
    },
    {
      title: "Trial-Tested Track Record",
      description:
        "With over $140M secured for clients and hundreds of acquittals, our courtroom presence commands respect in state and federal courts.",
      icon: Award,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* Page Header Banner */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-slate-900/40 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest mb-4">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <span>/</span>
              <span className="text-slate-400">About Our Firm</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif">
              A Legacy of Relentless Advocacy & Justice
            </h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-300">
              For over a quarter century, Apex Legal has championed the rights of corporations, executives, and individuals across high-stakes legal battlegrounds.
            </p>
          </div>
        </section>

        {/* Existing Comprehensive About Narrative */}
        <AboutSection />

        {/* Core Pillars Grid */}
        <section className="py-24 bg-slate-900/30 border-y border-slate-800/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-500">
                Our Operational Ethos
              </div>
              <h2 className="mt-2 text-3xl font-bold font-serif text-white sm:text-4xl">
                The Four Pillars of Apex Legal
              </h2>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {firmPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all hover:border-amber-500/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-5">
                      <Icon className="h-6 w-6 stroke-[2.2]" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-serif">{pillar.title}</h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership & Advocates */}
        <AttorneyTeam />

        {/* Call to Action Banner */}
        <section className="py-20 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 text-slate-950">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl font-serif">
              Need Confidential Legal Guidance?
            </h2>
            <p className="mt-4 text-base font-medium text-amber-100 max-w-2xl mx-auto">
              Contact our senior intake advocates today for an initial case evaluation. We evaluate your situation frankly and outline your optimal legal path.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-slate-900 shadow-xl"
              >
                <span>Schedule Confidential Consultation</span>
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
