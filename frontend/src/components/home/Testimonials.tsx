import Image from "next/image";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "David Vance",
      title: "Chief Executive Officer, Nexa Logistics Global",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      content:
        "Apex Legal steered our enterprise through an existential $40M patent and contract lawsuit. Arthur Sterling's courtroom composure and tactical counter-claims forced the plaintiff to drop all claims on the third day of trial.",
      matter: "Corporate Commercial Defense",
      rating: 5,
    },
    {
      name: "Eleanor Martinez",
      title: "Private Real Estate Investor & Developer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      content:
        "When targeted by an aggressive federal regulatory inquiry, Victoria Hayes and her defense team worked day and night to expose flawed forensic evidence. Her intervention saved my enterprise from indictment.",
      matter: "Federal Regulatory Defense",
      rating: 5,
    },
    {
      name: "Marcus Sterling",
      title: "Managing Director, Sterling Asset Partners",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      content:
        "During a highly contentious marital dissolution involving multi-jurisdictional family trusts, Elena Rostova's forensic accounting team delivered exceptional results while maintaining total discretion.",
      matter: "High-Net-Worth Matrimonial",
      rating: 5,
    },
    {
      name: "Siddharth Mehta",
      title: "Founder & CTO, Synthetix AI Systems",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      content:
        "When our proprietary code weights were stolen by a rogue former co-founder, Marcus Vance filed an emergency federal DTSA injunction within 36 hours. Apex Legal safeguarded our IP and our Series B round.",
      matter: "Trade Secrets & IP Litigation",
      rating: 5,
    },
    {
      name: "Catherine Holloway",
      title: "Chief Compliance Officer, Horizon BioHealth",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      content:
        "Their internal investigation protocols and direct engagement with the Department of Justice averted what could have been a catastrophic false claims enforcement action. Invaluable partners.",
      matter: "Health Care & White-Collar Defense",
      rating: 5,
    },
    {
      name: "Robert Langdon",
      title: "Managing Partner, Beacon Commercial Properties",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      content:
        "Julian Thorne navigated our multi-tiered debt restructuring and rezoning approvals in record time. His deep knowledge of municipal land use and commercial litigation gave our lenders complete confidence.",
      matter: "Commercial Real Estate",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span>
            Client Endorsements
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl font-serif">
            What Clients Say About Our Representation
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Real corporate leaders, private individuals, and landmark verdicts. Read first-hand accounts of our courtroom advocacy.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-7 shadow-xs hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Stars and Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-amber-600/30" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &quot;{rev.content}&quot;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center gap-3">
                <div className="relative h-11 w-11 flex-shrink-0 rounded-full overflow-hidden border border-amber-300">
                  <Image
                    src={rev.image}
                    alt={rev.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-serif">{rev.name}</h4>
                  <div className="text-[11px] text-slate-500">{rev.title}</div>
                  <div className="text-[10px] font-semibold text-amber-700 mt-0.5">
                    Matter: {rev.matter}
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
