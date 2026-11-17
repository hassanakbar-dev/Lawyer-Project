import Image from "next/image";
import { Mail, Award, CheckCircle, Scale } from "lucide-react";

export default function AttorneyTeam() {
  const attorneys = [
    {
      name: "Arthur Sterling, Esq.",
      role: "Managing Partner & Senior Trial Advocate",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      education: "Harvard Law School, J.D. (Magna Cum Laude)",
      bar: "New York & U.S. Supreme Court Bar",
      experience: "25+ Years Experience",
      specialty: "High-Stakes Commercial Litigation & Corporate Defense",
      email: "sterling@apexlegal.com",
    },
    {
      name: "Victoria Hayes, Esq.",
      role: "Senior Partner - Criminal Defense & Appeals",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      education: "Columbia Law School, J.D.",
      bar: "State Supreme Bench & SDNY Federal Bar",
      experience: "19+ Years Experience",
      specialty: "Federal Criminal Litigation & White-Collar Defense",
      email: "hayes@apexlegal.com",
    },
    {
      name: "Marcus Vance, Esq.",
      role: "Partner - Corporate Transactions & IP",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      education: "Yale Law School, LL.M.",
      bar: "Delaware Chancery & International Arbitration",
      experience: "16+ Years Experience",
      specialty: "Cross-Border Mergers, IP Portfolios & Venture Law",
      email: "vance@apexlegal.com",
    },
    {
      name: "Elena Rostova, Esq.",
      role: "Partner - Matrimonial & Private Wealth",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      education: "NYU School of Law, J.D.",
      bar: "New York Matrimonial & Family Law Bar",
      experience: "14+ Years Experience",
      specialty: "Forensic Asset Tracing, Trusts & High-Net-Worth Divorce",
      email: "rostova@apexlegal.com",
    },
    {
      name: "Julian Thorne, Esq.",
      role: "Senior Counsel - Real Estate & Regulatory",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      education: "Georgetown University Law Center, J.D.",
      bar: "District of Columbia & New York Bar",
      experience: "18+ Years Experience",
      specialty: "Commercial Development, Zoning Approvals & Title Litigation",
      email: "thorne@apexlegal.com",
    },
  ];

  return (
    <section id="attorneys" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span>
            Distinguished Counsel
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl font-serif">
            Meet Our Senior Advocates & Partners
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Every client at Apex Legal is represented directly by seasoned courtroom veterans who command respect before state and federal benches.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((attorney, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-amber-400 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Attorney Image */}
                <div className="relative h-96 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  
                  {/* Experience Badge */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-amber-800 shadow-md border border-slate-200">
                    <Award className="h-3.5 w-3.5 text-amber-600" />
                    <span>{attorney.experience}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 font-serif group-hover:text-amber-700 transition-colors">
                    {attorney.name}
                  </h3>
                  <div className="mt-1 text-xs font-semibold text-amber-700 uppercase tracking-wide">
                    {attorney.role}
                  </div>

                  <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Specialty: </strong>
                    {attorney.specialty}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Scale className="h-3.5 w-3.5 text-amber-600 flex-shrink-0" />
                      <span className="font-medium text-slate-800">{attorney.education}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-amber-600 flex-shrink-0" />
                      <span>{attorney.bar}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Action */}
              <div className="border-t border-slate-100 px-6 py-4 bg-slate-50 flex items-center justify-between text-xs">
                <a
                  href={`mailto:${attorney.email}`}
                  className="inline-flex items-center gap-1.5 text-slate-600 hover:text-amber-700 font-medium transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-amber-600" />
                  <span>{attorney.email}</span>
                </a>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                  Partner
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
