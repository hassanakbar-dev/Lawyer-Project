import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/home/AboutSection";
import AttorneyTeam from "@/components/home/AttorneyTeam";
import {
  Scale,
  Award,
  Shield,
  CheckCircle2,
  ArrowRight,
  Gavel,
  Landmark,
  Building,
  FileCheck,
  Globe2,
  Users2,
  BookOpenCheck,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Law Firm | Heritage & Courtroom Philosophy",
  description:
    "Learn about Apex Legal & Associates, our 28-year heritage of elite courtroom advocacy, federal trial admissions, senior partners, and nationwide representation.",
};

export default function AboutPage() {
  const firmPillars = [
    {
      title: "Relentless Preparation",
      description:
        "Cases are won long before trial. We dissect discovery, deploy forensic investigators, retain renowned expert witnesses, and exhaustively anticipate opposing counsel's tactics.",
      icon: Scale,
    },
    {
      title: "Direct Senior Partner Access",
      description:
        "Your legal affairs are never delegated to junior associates or outsourced paralegals. You maintain a direct hotline to senior trial counsel throughout your matter.",
      icon: Shield,
    },
    {
      title: "Unbroken Confidentiality",
      description:
        "We serve high-net-worth families, executives, and commercial enterprises with the highest ethical standards, ironclad NDAs, and absolute attorney-client discretion.",
      icon: CheckCircle2,
    },
    {
      title: "Trial-Tested Track Record",
      description:
        "With over $140M secured for clients and hundreds of criminal acquittals, our courtroom presence commands instant respect across state and federal jurisdictions.",
      icon: Award,
    },
  ];

  const milestones = [
    {
      year: "1998",
      title: "Founding in Lower Manhattan",
      description:
        "Founded by Arthur Sterling with a focused mission: to deliver aggressive, unyielding courtroom defense for corporate executives and entrepreneurs.",
    },
    {
      year: "2005",
      title: "Federal Appellate Expansion",
      description:
        "Admitted to the Second Circuit Court of Appeals and U.S. Supreme Court Bar, establishing our dedicated federal appellate defense division.",
    },
    {
      year: "2014",
      title: "Landmark $38.5M Commercial Verdict",
      description:
        "Secured one of New York's largest breach-of-contract jury verdicts against a multinational logistics conglomerate.",
    },
    {
      year: "2020",
      title: "Encrypted Nationwide Virtual Chambers",
      description:
        "Pioneered secure virtual Google Meet consultations and remote witness preparation across all 50 states.",
    },
    {
      year: "2026",
      title: "Global Arbitration & Cross-Border M&A",
      description:
        "Expanded practice to international commercial arbitrations in London (LCIA) and Paris (ICC), advising over 180 corporate entities worldwide.",
    },
  ];

  const courtAdmissions = [
    {
      court: "Supreme Court of the United States",
      jurisdiction: "Federal SCOTUS Bar",
      details: "Full admission to present oral arguments and petitions for writ of certiorari.",
    },
    {
      court: "U.S. Court of Appeals (2nd & 9th Circuits)",
      jurisdiction: "Federal Appellate",
      details: "Complex appeals, interlocutory reviews, and constitutional challenges.",
    },
    {
      court: "U.S. District Court (SDNY & EDNY)",
      jurisdiction: "Federal Commercial & Criminal",
      details: "Extensive courtroom experience in Manhattan and Brooklyn federal courthouses.",
    },
    {
      court: "Delaware Court of Chancery",
      jurisdiction: "Corporate Governance",
      details: "Specialized representation in shareholder derivative suits, mergers, and corporate disputes.",
    },
    {
      court: "New York State Supreme Court (Appellate Div.)",
      jurisdiction: "State Civil & Criminal",
      details: "Decades of trial practice in state supreme, appellate, and commercial divisions.",
    },
    {
      court: "International Court of Arbitration (ICC / LCIA)",
      jurisdiction: "Global Cross-Border",
      details: "Private international arbitrations, cross-border contract enforcement, and bilateral treaties.",
    },
  ];

  const recognitions = [
    {
      organization: "Chambers & Partners USA",
      award: "Band 1 Commercial Litigation (2021–2026)",
      quote: "Renowned for ferocious trial tactics and impeccable strategic counsel.",
    },
    {
      organization: "Martindale-Hubbell",
      award: "AV Preeminent® 5.0 / 5.0 Peer Rating",
      quote: "The pinnacle of legal ability and stringent adherence to professional ethics.",
    },
    {
      organization: "The Best Lawyers in America",
      award: "National Tier 1 Law Firm (Corporate & Criminal)",
      quote: "Recognized among the country's most formidable courtroom advocates.",
    },
    {
      organization: "Super Lawyers",
      award: "Top 100 Attorneys in New York Metro",
      quote: "Distinguished by peers for outstanding professional achievements.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header Banner with Light Theme Background Image */}
        <section className="relative overflow-hidden border-b border-slate-200 py-20 lg:py-28 bg-[#f8fafc] text-slate-900">
          {/* Natural Background Image with Light Wash (No Black / No Dark Color) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=85"
              alt="Supreme Court & Legal Jurisprudence Heritage"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-right lg:object-center opacity-30"
            />
            {/* Pure Light Wash - Crystal Clear Readability Without Any Dark/Black Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/85 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-slate-50/80"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Breadcrumb with Warm Amber Accents */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4">
                <Link href="/" className="text-amber-700 hover:text-amber-800 transition-colors">
                  Home
                </Link>
                <span className="text-slate-400">/</span>
                <span className="text-slate-600">About Our Firm</span>
              </div>

              {/* Majestic Headline (Deep Navy & Royal Amber) */}
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-serif leading-[1.12]">
                A 28-Year Heritage of{" "}
                <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
                  Relentless Advocacy
                </span>
              </h1>

              {/* Subheading */}
              <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Founded on the belief that justice belongs to the thoroughly prepared, Apex Legal & Associates defends corporations, executives, and individuals across high-stakes courtroom battlegrounds.
              </p>

              {/* Trust Badges Bar in Clean Light Cards */}
              <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-slate-300/80 text-xs text-slate-800">
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/95 border border-slate-200/90 px-3.5 py-2 shadow-xs backdrop-blur-xs">
                  <Scale className="h-4 w-4 text-amber-600 flex-shrink-0" />
                  <span className="font-semibold text-slate-900">Est. 1998 in Lower Manhattan</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/95 border border-slate-200/90 px-3.5 py-2 shadow-xs backdrop-blur-xs">
                  <Shield className="h-4 w-4 text-amber-600 flex-shrink-0" />
                  <span className="font-semibold text-slate-900">Supreme Court Bar Admitted</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/95 border border-slate-200/90 px-3.5 py-2 shadow-xs backdrop-blur-xs">
                  <Award className="h-4 w-4 text-amber-600 flex-shrink-0" />
                  <span className="font-semibold text-slate-900">$140M+ Recovered for Clients</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Existing Comprehensive About Narrative */}
        <AboutSection />

        {/* Historical Timeline (1998 - 2026) */}
        <section className="py-24 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
                <Landmark className="h-4 w-4 text-amber-600" />
                Firm Chronology
              </div>
              <h2 className="mt-3 text-3xl font-bold font-serif text-slate-900 sm:text-4xl">
                Milestones in Advocacy & Growth
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                From a boutique Manhattan trial chamber to a nationwide practice handling multi-million dollar verdicts.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-5">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xs hover:border-amber-400 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-extrabold text-amber-700 font-serif">
                      {m.year}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-slate-900 font-serif">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-semibold text-amber-800">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
                    <span>Verified Milestone</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Pillars Grid */}
        <section className="py-24 bg-slate-100/70 border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
                <Compass className="h-4 w-4 text-amber-600" />
                Our Operational Ethos
              </div>
              <h2 className="mt-3 text-3xl font-bold font-serif text-slate-900 sm:text-4xl">
                The Four Pillars of Apex Legal
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                The governing doctrines that determine how we dissect evidence, construct arguments, and represent our clients.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {firmPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-amber-400 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 mb-5">
                      <Icon className="h-6 w-6 stroke-[2.2]" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-serif">{pillar.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Court Admissions & Jurisdictions Grid */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
                <Gavel className="h-4 w-4 text-amber-600" />
                Jurisdictional Reach
              </div>
              <h2 className="mt-3 text-3xl font-bold font-serif text-slate-900 sm:text-4xl">
                Court Admissions & Licensed Forums
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Our trial partners are admitted to practice before premier federal appellate courts, state benches, and international arbitration bodies.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courtAdmissions.map((admission, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 hover:bg-white hover:border-amber-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-900">
                      {admission.jurisdiction}
                    </span>
                    <FileCheck className="h-4 w-4 text-amber-700" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900 font-serif">
                    {admission.court}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {admission.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership & Advocates */}
        <AttorneyTeam />

        {/* Accreditations & Ratings */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
                <Award className="h-4 w-4 text-amber-600" />
                Industry Recognition
              </div>
              <h2 className="mt-3 text-3xl font-bold font-serif text-slate-900 sm:text-4xl">
                Peer-Reviewed Accreditations & Honours
              </h2>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {recognitions.map((rec, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      {rec.organization}
                    </div>
                    <div className="mt-2 text-base font-bold text-slate-900 font-serif">
                      {rec.award}
                    </div>
                    <p className="mt-3 text-xs italic text-slate-600 border-l-2 border-amber-300 pl-3">
                      &quot;{rec.quote}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-20 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-white">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl font-serif">
              Need Confidential Legal Guidance?
            </h2>
            <p className="mt-4 text-base font-light text-amber-100 max-w-2xl mx-auto leading-relaxed">
              Contact our senior intake advocates today for an initial case evaluation. We evaluate your situation frankly and outline your optimal legal path.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100 shadow-xl"
              >
                <span>Schedule Confidential Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/20"
              >
                <span>Explore Legal Services</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
