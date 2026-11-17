import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, PhoneCall, Scale, Star, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden py-16 lg:py-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-slate-950"></div>
        {/* Subtle Luxury Gold Radial Gradients */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[130px]"></div>
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-amber-600/10 blur-[150px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 text-left">
            {/* Top Recognition Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-amber-400 shadow-lg shadow-amber-500/10 backdrop-blur-md mb-6">
              <Award className="h-4 w-4 text-amber-400" />
              <span>Recognized Among Top Trial Advocates & Counselors • 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif leading-[1.15]">
              Fearless Advocacy. <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Unyielding Protection.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              When life, liberty, or corporate enterprise is on the line, we deploy seasoned courtroom experience,
              strategic negotiation, and personalized counsel to defend your rights and commercial future.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/25 transition-all hover:from-amber-400 hover:to-amber-500 hover:scale-105 active:scale-95"
              >
                <span>Request Case Review</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </a>

              <a
                href="tel:+18005550199"
                className="inline-flex items-center gap-2.5 rounded-lg border border-slate-700 bg-slate-900/80 px-7 py-4 text-sm font-semibold text-slate-200 backdrop-blur-md transition-colors hover:border-amber-500/50 hover:bg-slate-800"
              >
                <PhoneCall className="h-4 w-4 text-amber-400" />
                <span>Call 24/7: +1 (800) 555-0199</span>
              </a>
            </div>

            {/* Key Trust Checkmarks */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span>Senior Partner Led</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span>25+ Yrs Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Lawyer Image Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-amber-500/30 to-amber-600/10 blur-xl opacity-75"></div>

              {/* Main Image Container */}
              <div className="relative h-[480px] sm:h-[540px] w-full overflow-hidden rounded-2xl border-2 border-amber-500/30 bg-slate-900 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=85"
                  alt="Senior Trial Attorney Arthur Sterling"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                />

                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Lawyer Identity Card at Bottom */}
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-slate-800/80 bg-slate-950/90 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-white font-serif">
                        Arthur Sterling, Esq.
                      </h2>
                      <p className="text-xs text-amber-400 font-medium">
                        Senior Trial Advocate & Managing Partner
                      </p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      <Scale className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-400 border-t border-slate-800/80 pt-2">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-400" />
                      ))}
                    </div>
                    <span>Over 1,400+ Courtroom Victories</span>
                  </div>
                </div>
              </div>

              {/* Top-Right Floating Trust Badge */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2.5 rounded-xl border border-amber-500/40 bg-slate-900/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-slate-950 font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-white">98.4% Win Rate</div>
                  <div className="text-[10px] text-amber-400">State & Federal Courts</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
