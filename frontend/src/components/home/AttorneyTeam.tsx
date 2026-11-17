import Image from "next/image";
import { Mail, Award } from "lucide-react";

export default function AttorneyTeam() {
  const attorneys = [
    {
      name: "Arthur Sterling, Esq.",
      role: "Managing Partner & Senior Trial Advocate",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      education: "Harvard Law School, J.D. (Magna Cum Laude)",
      bar: "New York & Federal Bar Admission",
      experience: "25+ Years Experience",
      specialty: "High-Stakes Commercial Litigation & Corporate Defense",
    },
    {
      name: "Victoria Hayes, Esq.",
      role: "Senior Partner - Criminal Defense & Appeals",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      education: "Columbia Law School, J.D.",
      bar: "State & Supreme Court Bar Admission",
      experience: "19+ Years Experience",
      specialty: "Federal Criminal Litigation & White-Collar Defense",
    },
    {
      name: "Marcus Vance, Esq.",
      role: "Partner - Corporate Transactions & IP",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      education: "Yale Law School, LL.M.",
      bar: "New York & International Arbitration Bar",
      experience: "16+ Years Experience",
      specialty: "Cross-Border Mergers, IP Portfolios & Venture Law",
    },
  ];

  return (
    <section id="attorneys" className="py-24 lg:py-32 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
            Distinguished Counsel
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-serif">
            Meet Our Senior Advocates
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Seasoned courtroom veterans and strategic legal advisors dedicated to achieving unparalleled outcomes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((attorney, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition-all duration-300 hover:border-amber-500/40 hover:bg-slate-900"
            >
              {/* Attorney Image */}
              <div className="relative h-96 w-full overflow-hidden bg-slate-800">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-lg bg-slate-950/90 px-3 py-1.5 text-xs font-bold text-amber-400 backdrop-blur-md border border-amber-500/30">
                  <Award className="h-3.5 w-3.5" />
                  <span>{attorney.experience}</span>
                </div>
              </div>

              {/* Attorney Info */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-400 transition-colors">
                  {attorney.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-amber-500">
                  {attorney.role}
                </p>

                <p className="mt-4 text-xs font-medium text-slate-300">
                  {attorney.specialty}
                </p>

                <div className="mt-5 space-y-1.5 border-t border-slate-800/80 pt-4 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-300">Education:</span>
                    <span>{attorney.education}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-300">Bar:</span>
                    <span>{attorney.bar}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
                  <a
                    href="#contact"
                    className="text-xs font-bold text-amber-400 hover:text-amber-300"
                  >
                    Direct Consultation →
                  </a>
                  <div className="flex items-center gap-3 text-slate-400">
                    <a href="#contact" className="hover:text-amber-400 transition-colors" aria-label="Direct Email">
                      <Mail className="h-4 w-4" />
                    </a>
                    <a href="#contact" className="hover:text-amber-400 transition-colors" aria-label="Professional Profile">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46V10.9M7.85 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
