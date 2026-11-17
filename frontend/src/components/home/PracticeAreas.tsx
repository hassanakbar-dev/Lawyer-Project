import Image from "next/image";
import {
  Briefcase,
  Gavel,
  Users,
  Scale,
  Building2,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";

export default function PracticeAreas() {
  const areas = [
    {
      icon: Briefcase,
      title: "Corporate & Commercial Law",
      tag: "Business Advisory",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      description:
        "Mergers & acquisitions, cross-border corporate governance, partnership dissolutions, venture financing, and commercial contract negotiations.",
      bullets: ["M&A and Joint Ventures", "Regulatory Compliance", "Corporate Governance"],
    },
    {
      icon: Gavel,
      title: "Criminal Defense Litigation",
      tag: "Trial Defense",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      description:
        "Relentless defense for high-profile white-collar offenses, government investigations, felony charges, and state/federal courtroom representation.",
      bullets: ["White-Collar Crimes", "Federal Defense", "Appeals & Post-Conviction"],
    },
    {
      icon: Users,
      title: "High-Net-Worth Family Law",
      tag: "Private Client",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      description:
        "Discreet counsel for complex asset divisions, contested divorces, spousal support, prenuptial agreements, and sensitive child custody disputes.",
      bullets: ["Complex Asset Division", "Child Custody Settlements", "Prenuptial Contracts"],
    },
    {
      icon: Scale,
      title: "Civil & Commercial Litigation",
      tag: "Dispute Resolution",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
      description:
        "Formidable courtroom advocacy for breach of contract, shareholder disputes, fraud claims, antitrust issues, and arbitration enforcement.",
      bullets: ["Shareholder Disputes", "Breach of Contract", "Arbitration & Mediation"],
    },
    {
      icon: Building2,
      title: "Property & Real Estate Law",
      tag: "Real Estate Counsel",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      description:
        "Commercial property transactions, zoning and land use, title disputes, construction litigation, and high-value landlord-tenant conflicts.",
      bullets: ["Commercial Acquisitions", "Zoning & Land Disputes", "Title Due Diligence"],
    },
    {
      icon: ShieldAlert,
      title: "Intellectual Property Protection",
      tag: "IP Advocacy",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      description:
        "Aggressive defense and strategic registration of patent portfolios, trademarks, trade secrets, copyright enforcement, and licensing deals.",
      bullets: ["Patent & Trademark Defense", "Trade Secret Protection", "Infringement Lawsuits"],
    },
  ];

  return (
    <section id="practice-areas" className="py-24 lg:py-32 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span>
            Comprehensive Practice Areas
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl font-serif">
            Legal Disciplines We Master
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Our multi-disciplinary trial attorneys provide authoritative guidance across crucial sectors of law.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl"
              >
                {/* Visual Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-amber-600 shadow-md border border-slate-200">
                      <Icon className="h-5 w-5 stroke-[2.2]" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800 shadow-md border border-slate-200">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors font-serif">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition-colors group-hover:text-amber-800"
                    >
                      <span>Consult With A Specialist</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
