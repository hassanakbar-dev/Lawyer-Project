import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PracticeAreas from "@/components/home/PracticeAreas";
import {
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  CheckCircle,
  Briefcase,
  Gavel,
  Users,
  Building2,
  ShieldAlert,
  Scale,
  FileText,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Services & Specialized Disciplines | Apex Legal",
  description:
    "Comprehensive legal services: Corporate & Commercial Law, Criminal Defense, High-Net-Worth Family Law, Civil Litigation, Real Estate, and Intellectual Property.",
};

export default function ServicesPage() {
  const servicePillars = [
    {
      title: "Senior Partner Direct Access",
      desc: "Every matter is personally strategized and argued by a senior courtroom trial advocate with 15+ years experience.",
    },
    {
      title: "Nationwide & Virtual Reach",
      desc: "Licensed representation across federal and state jurisdictions with encrypted Google Meet chambers for remote clients.",
    },
    {
      title: "Transparent Fee Architecture",
      desc: "No hidden administrative costs. Clear retainers, detailed monthly statements, and contingency options in selected disputes.",
    },
  ];

  const detailedDisciplines = [
    {
      id: "corporate",
      icon: Briefcase,
      title: "Corporate Governance & M&A",
      subtitle: "Enterprise Advisory, Cross-Border Deals & Compliance",
      overview:
        "We serve as trusted outside general counsel to emerging enterprises, mid-market companies, and multinational corporations. From seed financings to cross-border acquisitions, we negotiate bulletproof agreements that insulate executives from liability.",
      capabilities: [
        "Mergers & Acquisitions (Asset & Stock Purchases)",
        "Shareholder Agreements & Operating Structures",
        "SEC Filings, Sarbanes-Oxley & Corporate Governance",
        "Cross-Border Commercial Transactions & JV Formations",
        "Partnership Disputes & Business Dissolutions",
        "Executive Compensation & Non-Compete Agreements",
      ],
      forum: "SDNY, Delaware Court of Chancery, AAA & ICC Arbitration",
    },
    {
      id: "criminal",
      icon: Gavel,
      title: "Criminal Defense & Government Inquiries",
      subtitle: "White-Collar Defense, Subpoenas & Trial Litigation",
      overview:
        "When your liberty, reputation, and livelihood are threatened by government prosecutors or regulatory enforcement bodies, our white-collar criminal defense division mounts an aggressive, proactive defense from the earliest investigative stages.",
      capabilities: [
        "DOJ, SEC, IRS & Regulatory Enforcement Actions",
        "Grand Jury Subpoena Response & Immunity Negotiations",
        "Federal Wire Fraud, Mail Fraud & Securities Violations",
        "Health Care Fraud, False Claims Act & Anti-Kickback",
        "Pre-Indictment Defense & Search Warrant Challenges",
        "Appellate Litigation & Post-Conviction Petitions",
      ],
      forum: "Federal District Courts, 2nd Circuit Appeals, State Supreme Bench",
    },
    {
      id: "family",
      icon: Users,
      title: "High-Net-Worth Matrimonial & Family Law",
      subtitle: "Complex Asset Division, Offshore Holdings & Discretion",
      overview:
        "Representing C-suite executives, business owners, and affluent families in contested marital dissolutions. We specialize in forensic asset tracking, business valuations, and the protection of separate property.",
      capabilities: [
        "Complex Marital Asset & Equity Division",
        "Forensic Tracing of Hidden & Offshore Wealth",
        "Comprehensive Prenuptial & Postnuptial Agreements",
        "High-Conflict Custody, Relocation & Parental Rights",
        "Valuation of Privately Held Companies & Real Estate",
        "Post-Judgment Modifications & Enforcement",
      ],
      forum: "New York Supreme Court Matrimonial Part, Private Mediation",
    },
    {
      id: "litigation",
      icon: Scale,
      title: "Complex Commercial Litigation",
      subtitle: "High-Stakes Contract Disputes & Fiduciary Breaches",
      overview:
        "Our trial lawyers are built for the courtroom. We aggressively litigate high-exposure disputes, enforcing contractual terms, vindicating shareholder rights, and defeating extortionate plaintiff claims.",
      capabilities: [
        "Breach of Commercial Contract & Warranty Claims",
        "Breach of Fiduciary Duty & Officer/Director Liability",
        "Fraud, Tortious Interference & Unfair Competition",
        "Emergency TROs & Preliminary Injunction Motions",
        "Class Action Defense & Multi-District Litigation (MDL)",
        "Enforcement of Foreign Judgments & Arbitral Awards",
      ],
      forum: "Commercial Division NY Supreme Court, Federal District Courts",
    },
    {
      id: "ip",
      icon: ShieldAlert,
      title: "Intellectual Property & Trade Secrets",
      subtitle: "Patent Defense, Copyrights & DTSA Injunctions",
      overview:
        "In a technology-driven economy, trade secrets and proprietary code represent your most valuable assets. We secure emergency injunctions against departing employees and defend against aggressive infringement lawsuits.",
      capabilities: [
        "Defend Trade Secrets Act (DTSA) Emergency Injunctions",
        "Patent Infringement Defense & PTAB Proceedings",
        "Trademark Portfolio Enforcement & TTAB Opposition",
        "Software Copyright & Licensing Royalty Disputes",
        "Non-Disclosure Agreement (NDA) Breach Litigation",
        "Counterfeiting & Brand Protection Restraining Orders",
      ],
      forum: "U.S. Patent and Trademark Office, Federal District Courts",
    },
    {
      id: "realestate",
      icon: Building2,
      title: "Commercial Real Estate & Land Use",
      subtitle: "Acquisitions, Zoning, Leases & Developer Representation",
      overview:
        "Guiding institutional developers, REITs, and private investors through complex zoning approvals, debt financing, commercial leasing, and construction contract disputes.",
      capabilities: [
        "Commercial Property Acquisitions & Title Clearance",
        "Ground Lease & Anchor Tenant Lease Negotiations",
        "Construction Defect Claims & Mechanic's Liens",
        "Zoning Approvals & Municipal Board Petitions",
        "Distressed Debt Workouts & Foreclosure Defense",
        "Real Estate Joint Venture Structuring",
      ],
      forum: "Municipal Planning Boards, State Supreme Court Commercial Part",
    },
  ];

  const litigationLifecycle = [
    {
      step: "01",
      title: "Emergency Case Audit & Privilege Shield",
      description:
        "Immediate invocation of attorney-client privilege. We issue litigation hold notices, secure critical digital evidence, and audit immediate legal exposures.",
    },
    {
      step: "02",
      title: "Forensic Discovery & Early Motion Practice",
      description:
        "Demanding electronic ESI disclosures, retaining forensic accountants, and filing preliminary motions to dismiss non-viable claims early in the litigation.",
    },
    {
      step: "03",
      title: "Tactical Deposition & Settlement Leverage",
      description:
        "Aggressive cross-examination of opposing key witnesses, establishing insurmountable exposure to force favorable confidential settlements.",
    },
    {
      step: "04",
      title: "Trial Advocacy & Appellate Defense",
      description:
        "When litigation proceeds to verdict, our courtroom-tested advocates present compelling jury narratives and safeguard appellate records.",
    },
  ];

  const billingModels = [
    {
      title: "Structured Retainer & Hourly",
      bestFor: "Complex, unpredictable litigation and active government defense",
      features: [
        "Evergreen trust retainer",
        "Detailed, 10th-of-an-hour itemized billing",
        "Quarterly budget estimates and expense caps",
        "No charges for routine internal administrative tasks",
      ],
    },
    {
      title: "Fixed Flat-Fee Certainty",
      bestFor: "Commercial transactions, prenuptial agreements, and corporate formation",
      features: [
        "100% predictable upfront fee",
        "Comprehensive scope covering all drafts and meetings",
        "No surprise invoices or travel billings",
        "Includes initial regulatory filing coordination",
      ],
    },
    {
      title: "Contingency & Hybrid Models",
      bestFor: "Selected commercial plaintiff disputes and breach of contract",
      features: [
        "Reduced or zero upfront attorney fees",
        "Firm fee tied directly to financial recovery",
        "Shared litigation risk for approved commercial claims",
        "Rigorous pre-engagement viability audit",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-widest mb-4">
              <Link href="/" className="hover:text-amber-800">Home</Link>
              <span>/</span>
              <span className="text-slate-500">Legal Services</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-serif">
              Specialized Legal Disciplines & Practice Areas
            </h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
              Seasoned trial advocacy, meticulous corporate governance, and discreet representation tailored to safeguard your enterprise, assets, and freedom.
            </p>
          </div>
        </section>

        {/* Practice Overview Cards (Visual Component) */}
        <PracticeAreas />

        {/* Detailed Service Deep-Dives */}
        <section className="py-24 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
                <Sparkles className="h-4 w-4 text-amber-600" />
                Comprehensive Scope of Representation
              </div>
              <h2 className="mt-3 text-3xl font-bold font-serif text-slate-900 sm:text-4xl">
                In-Depth Discipline Breakdown
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Explore the specific sub-specialties, forums, and statutory frameworks our legal teams master.
              </p>
            </div>

            <div className="mt-16 grid gap-10 md:grid-cols-2">
              {detailedDisciplines.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-8 shadow-xs hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-white shadow-md shadow-amber-600/20">
                          <Icon className="h-6 w-6 stroke-[2.2]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 font-serif">
                            {d.title}
                          </h3>
                          <span className="text-xs font-semibold text-amber-700">
                            {d.subtitle}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {d.overview}
                      </p>

                      <div className="border-t border-slate-200/80 pt-5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                          Representative Matters & Capabilities:
                        </h4>
                        <ul className="space-y-2">
                          {d.capabilities.map((cap, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                              <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-semibold text-amber-900">Primary Forums:</span>
                      <span className="text-right truncate max-w-[260px] font-medium text-slate-600">
                        {d.forum}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4-Stage Litigation Lifecycle */}
        <section className="py-24 bg-slate-100/70 border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
                <Layers className="h-4 w-4 text-amber-600" />
                Case Strategy
              </div>
              <h2 className="mt-3 text-3xl font-bold font-serif text-slate-900 sm:text-4xl">
                Our 4-Stage Litigation & Advisory Workflow
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                A disciplined methodology engineered to isolate leverage early and deliver decisive victories.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {litigationLifecycle.map((stage, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs relative flex flex-col justify-between"
                >
                  <div>
                    <span className="text-4xl font-extrabold text-amber-600/30 font-serif">
                      {stage.step}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-slate-900 font-serif">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-amber-700">
                    <span>Phase Complete & Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparent Billing Models */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
                <FileText className="h-4 w-4 text-amber-600" />
                Fee Transparency
              </div>
              <h2 className="mt-3 text-3xl font-bold font-serif text-slate-900 sm:text-4xl">
                Predictable Fee Architecture
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                We believe billing disputes undermine the attorney-client partnership. We offer clear, structured fee models customized to your matter.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {billingModels.map((model, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 p-7 shadow-xs hover:border-amber-400 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-serif">
                      {model.title}
                    </h3>
                    <div className="mt-2 inline-block rounded-lg bg-amber-100/70 px-2.5 py-1 text-[11px] font-semibold text-amber-900">
                      Best For: {model.bestFor}
                    </div>

                    <ul className="mt-6 space-y-3">
                      {model.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 py-3 text-xs font-bold text-slate-800 shadow-xs hover:border-amber-500 hover:text-amber-700 transition-colors"
                    >
                      <span>Request Fee Quote</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl font-serif text-white">
              Discuss Your Legal Exposure in Complete Confidence
            </h2>
            <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Schedule a face-to-face Google Meet video consultation or visit our Manhattan chambers for an exhaustive initial case analysis.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-amber-500 shadow-xl"
              >
                <span>Book Consultation via Calendar</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+18005550199"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-8 py-4 text-sm font-bold text-slate-200 transition-all hover:bg-slate-700"
              >
                <PhoneCall className="h-4 w-4 text-amber-400" />
                <span>Urgent Hotline: +1 (800) 555-0199</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
