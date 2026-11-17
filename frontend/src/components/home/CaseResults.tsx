import { Trophy, CheckCircle, ArrowRight } from "lucide-react";

export default function CaseResults() {
  const cases = [
    {
      amount: "$38.5 Million",
      type: "Commercial Breach of Contract",
      outcome: "Jury Verdict Won",
      summary:
        "Secured a landmark jury verdict for a tech logistics enterprise against a multinational supplier for unlawful contract repudiation.",
    },
    {
      amount: "Full Acquittal",
      type: "Federal Securities Fraud",
      outcome: "All Charges Dismissed",
      summary:
        "Successfully defended a chief executive against federal regulatory allegations following a grueling 4-week trial.",
    },
    {
      amount: "$19.2 Million",
      type: "High-Net-Worth Marital Asset Division",
      outcome: "Favorable Settlement",
      summary:
        "Protected extensive real estate and offshore equity holdings through meticulous forensic accounting and negotiation.",
    },
    {
      amount: "$14.7 Million",
      type: "Intellectual Property Infringement",
      outcome: "Out-of-Court Settlement & Royalty License",
      summary:
        "Enforced proprietary patent rights against a rival manufacturer, securing both lump-sum damages and ongoing licensing royalties.",
    },
  ];

  return (
    <section id="results" className="py-24 bg-slate-900/50 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
              <Trophy className="h-4 w-4" />
              Proven Track Record
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-serif">
              Recent Case Victories & Settlements
            </h2>
            <p className="mt-3 text-sm text-slate-400 max-w-2xl">
              Numbers do not lie. Here is how our courtroom preparation and legal strategy translated into real justice for our clients.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 self-start md:self-auto"
          >
            <span>Discuss Your Legal Matter</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
                  <CheckCircle className="h-3 w-3" />
                  {item.outcome}
                </span>

                <div className="mt-4 text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">
                  {item.amount}
                </div>

                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                  {item.type}
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-400">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-800 pt-4 text-[10px] uppercase font-bold tracking-widest text-slate-500">
                Apex Trial Team
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
