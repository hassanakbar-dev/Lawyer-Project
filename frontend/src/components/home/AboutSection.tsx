import Image from "next/image";
import { CheckCircle2, Scale, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Column: Visual Image with Floating Experience Badge */}
          <div className="relative">
            <div className="relative h-[480px] sm:h-[560px] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=85"
                alt="Apex Legal Law Firm Conference and Case Preparation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Experience Box */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-8 rounded-xl border border-amber-300 bg-white p-6 shadow-2xl max-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 text-white">
                  <Scale className="h-5 w-5 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 font-serif">25+ Years</div>
                  <div className="text-[11px] font-semibold text-amber-700">High Court Advocacy</div>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-600 leading-relaxed">
                Trusted by Fortune 500 executives and private individuals across landmark cases.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span>
              About Apex Legal Firm
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl font-serif leading-tight">
              A Legacy of Uncompromising Trial Excellence & Integrity
            </h2>

            <p className="mt-6 text-base text-slate-600 leading-relaxed">
              Founded over two decades ago, Apex Legal was established on a single principle: that every client
              deserves aggressive, sophisticated, and deeply prepared representation. We do not merely react to
              legal challenges; we shape the outcome before walking into the courtroom.
            </p>

            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              From high-stakes commercial disputes and complex corporate litigation to urgent criminal defense
              and sensitive family matters, our team brings disciplined strategy and absolute discretion to every brief.
            </p>

            <div className="mt-8 space-y-3.5">
              {[
                "Every case personally evaluated and directed by senior partners",
                "Proven mastery across state, appellate, and supreme court jurisdictions",
                "Comprehensive trial preparation and advanced forensic evidence analysis",
                "Unbroken record of strict ethical integrity and client confidentiality",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-amber-600 mt-0.5" />
                  <span className="text-sm font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-amber-500"
              >
                <span>Speak With Our Counsel</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="border-l border-slate-200 pl-6">
                <div className="font-serif text-sm font-bold text-slate-900">Arthur Sterling, Esq.</div>
                <div className="text-xs text-amber-700 font-semibold">Founder & Senior Advocate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
