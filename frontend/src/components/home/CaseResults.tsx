import { Trophy, CheckCircle, ArrowRight, ShieldCheck, Scale, Award } from "lucide-react";
import Link from "next/link";

export default function CaseResults() {
  const cases = [
    {
      amount: "$38.5 Million",
      type: "Commercial Breach of Contract",
      outcome: "Jury Verdict Won (SDNY)",
      summary:
        "Secured a landmark jury verdict for a tech logistics enterprise against a multinational supplier for unlawful supply agreement repudiation and lost profits.",
      discipline: "Commercial Litigation",
    },
    {
      amount: "Full Acquittal",
      type: "Federal Securities Fraud & Insider Trading",
      outcome: "All Charges Dismissed",
      summary:
        "Successfully defended a chief financial officer against 14 federal counts following a grueling 4-week trial in Manhattan federal district court.",
      discipline: "Criminal Defense",
    },
    {
      amount: "$19.2 Million",
      type: "High-Net-Worth Marital Asset Division",
      outcome: "Favorable Settlement",
      summary:
        "Protected extensive multi-state real estate portfolios and offshore equity holdings through aggressive forensic accounting and private mediation.",
      discipline: "Family Law",
    },
    {
      amount: "$14.7 Million",
      type: "Intellectual Property & DTSA Trade Secret Injunction",
      outcome: "Permanent Injunction & Royalties",
      summary:
        "Enforced proprietary software weights and trade secrets against a departing executive team, securing both a permanent injunction and seven-figure damages.",
      discipline: "Intellectual Property",
    },
    {
      amount: "Complete Dismissal",
      type: "DOJ Health Care False Claims Act (Qui Tam)",
      outcome: "Pre-Trial Dismissal with Prejudice",
      summary:
        "Dismantled federal whistleblower allegations against a hospital network by demonstrating complete regulatory compliance and medical necessity under Medicare billing rules.",
      discipline: "White-Collar Defense",
    },
    {
      amount: "$27.4 Million",
      type: "Commercial Real Estate Development Dispute",
      outcome: "Arbitration Award Affirmed",
      summary:
        "Vindicated lead developer's equity rights against a private equity mezzanine lender who attempted a predatory foreclosure on a Manhattan mixed-use tower.",
      discipline: "Real Estate Litigation",
    },
  ];

  return (
    <section id="results" className="py-24 bg-slate-100/70 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
              <Trophy className="h-4 w-4 text-amber-600" />
              Proven Track Record
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl font-serif">
              Recent Case Victories & Settlements
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl leading-relaxed">
              Our record speaks for itself. Over $140M recovered and protected for corporations, executives, and private individuals.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-amber-500 transition-colors w-fit"
          >
            <span>Evaluate Your Matter</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-md bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[10px] font-bold text-amber-900">
                    {c.discipline}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{c.outcome}</span>
                  </div>
                </div>

                <div className="text-3xl font-extrabold text-slate-900 font-serif tracking-tight">
                  {c.amount}
                </div>
                <div className="mt-1 text-xs font-bold text-amber-700">
                  {c.type}
                </div>

                <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                  {c.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Jurisdiction: New York & Federal</span>
                <span className="text-amber-700 font-bold">Verified Result</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
